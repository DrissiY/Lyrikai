import React, { useState } from 'react';
import "./ProgessBar.scss";

// Assume you have a loader SVG imported here
// import LoaderSVG from 'path_to_loader_svg';

const stepWidths = [
  "calc(100% / 40)", // Step 1
  "calc(100% / 3)", // Step 2
  "calc(100% / 1.5)", // Step 3
  "calc(100% / 1)" // Step 4
];

const ProgressBar = ({ onFormSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepInputs, setStepInputs] = useState(["", "", "", ""]);
  const [isGenerating, setIsGenerating] = useState(false);

  const stepTitles = ['Artist', 'Reference Track', 'Mood', 'Audience'];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsGenerating(true);
      // Assume you have a function to start generation
      setTimeout(() => {
        // After some time, generation is completed
        setIsGenerating(false);
        onFormSubmit();
      }, 2000); // Placeholder time, replace with actual generation process
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
      {!isGenerating && (
        <div className="step-input">
          {renderInput(currentStep - 1)}
        </div>
      )}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentStep === 1}>Back</button>
        {currentStep === 4 ? (
          <button onClick={handleNext} disabled={isGenerating}>
            {isGenerating ? (
              // Replace 'LoaderSVG' with your loader SVG component
              <div><iframe src="https://giphy.com/embed/RgzryV9nRCMHPVVXPV" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/trippy-abstract-pi-slices-RgzryV9nRCMHPVVXPV">via GIPHY</a></p></div>
            ) : (
              "Generate"
            )}
          </button>
        ) : (
          <button onClick={handleNext} disabled={currentStep === 4}>Next</button>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
