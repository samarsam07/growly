import React from "react";
import { FaRegEdit, FaRobot, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegEdit />,
      title: "Input Your Product",
      description: "Tell us about your product or service",
    },
    {
      icon: <FaRobot />,
      title: "AI Generation",
      description: "Our AI creates multiple ad variations",
    },
    {
      icon: <FaRocket />,
      title: "Export & Launch",
      description: "Download and launch your campaigns",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon" style={{ color: "#238636" }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
