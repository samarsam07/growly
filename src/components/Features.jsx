import React from "react";
import { FaPalette, FaRegEdit, FaShareSquare } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaPalette />,
      title: "AI Creative Generator",
      description: "Generate stunning ad creatives automatically",
    },
    {
      icon: <FaRegEdit />,
      title: "Headline Optimizer",
      description: "AI-powered headlines that convert",
    },
    {
      icon: <FaShareSquare />,
      title: "Export Ad Formats",
      description: "Export for Meta, Google, and more platforms",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <div className="feature-icon" style={{ color: "#238636" }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
