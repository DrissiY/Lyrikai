import React, { useState } from 'react';
import "./ProgessBar.scss";

const stepWidths = [
  "calc(100% / 40)", // Step 1
  "calc(100% / 3)", // Step 2
  "calc(100% / 1.5)", // Step 3
  "calc(100% / 1)" // Step 4
];

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepInputs, setStepInputs] = useState(["", "", "", ""]);

  const stepTitles = ['Artist', 'Reference Track', 'Mood', 'Audience'];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...stepInputs];
    newInputs[index] = event.target.value;
    setStepInputs(newInputs);
  };

  const renderInput = (index) => {
    switch (index) {
      case 0:
        return (
          <input
            type="text"
            placeholder="Enter artist name"
            value={stepInputs[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        );
      case 1:
        return (
          <input
            type="text"
            placeholder="Enter Reference Track"
            value={stepInputs[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        );
      case 2:
        return (
          <select
          value={stepInputs[index]}
          onChange={(e) => handleInputChange(e, index)}
        >
          <option value="">Select Mood/Emotion</option>
          {/* Add options for audience */}
        </select>
        );
      case 3:
        return (
          <select
            value={stepInputs[index]}
            onChange={(e) => handleInputChange(e, index)}
          >
            <option value="">Select audience</option>
            {/* Add options for audience */}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`progress-bar-segment ${
              currentStep >= index + 1 ? 'completed' : ''
            }`}
            style={{ width: stepWidths[index] }}
          ></div>
        ))}
        <div className="progress-bar-highlight"></div>
      </div>
      <div className="step-titles">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            className={`step-title ${currentStep === index + 1 ? 'active' : ''}`}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="step-input">
        {renderInput(currentStep - 1)}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentStep === 1}>Back</button>
        <button onClick={handleNext} disabled={currentStep === 4}>Next</button>
      </div>
    </div>
  );
};

export default ProgressBar;
