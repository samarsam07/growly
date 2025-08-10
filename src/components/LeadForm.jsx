import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const businessTypes = [
    { value: "", label: "Select Business Type" },
    { value: "freelancer", label: "Freelancer" },
    { value: "coach", label: "Coach" },
    { value: "small-business", label: "Small Business Owner" },
    { value: "ecommerce", label: "Ecommerce Seller" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await axios.post("/api/leads/submit", formData);

      if (response.data.success) {
        setSubmitMessage(
          "Thank you! Your demo request has been submitted successfully."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitMessage("Sorry, something went wrong. Please try again.");
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="lead-form" className="lead-form-section">
      <div className="container">
        <h2 className="section-title">Book Your Free Demo</h2>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className={errors.businessType ? "error" : ""}>
              {businessTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.businessType && (
              <span className="error-message">{errors.businessType}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your business and advertising goals *"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Book Free Demo"}
          </button>

          {submitMessage && (
            <div
              className={`submit-message ${
                submitMessage.includes("Thank you") ? "success" : "error"
              }`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
