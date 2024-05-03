import React, { useState, useEffect } from 'react';
import "./ProgessBar.scss";


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
  const [suggestions, setSuggestions] = useState([]);

  const stepTitles = ['Artist', 'Reference Track', 'Mood', 'Audience'];

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (currentStep === 1) {
        const response = await fetch(`/api/artistSuggestions?query=${stepInputs[0]}`);
        const data = await response.json();
        setSuggestions(data);
      }
      else (currentStep === 2);{
        const response = await fetch(`/api/artistSuggestions?query=${stepInputs[2]}`)
        const data = await response.json();
        setSuggestions(data);
      }
    };

    fetchSuggestions();
  }, [currentStep, stepInputs]);


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
      console.log(currentStep)
    }
  };

  const Step = (index) => {
setCurrentStep(currentStep - 1)
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
          <>
            <input
              type="text"
              placeholder="Enter artist name"
              value={stepInputs[index]}
              onChange={(e) => handleInputChange(e, index)}
            />
            <ul>
              {suggestions.map((suggestion, i) => (
                <li key={i}>{suggestion}</li>
              ))}
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <input
              type="text"
              placeholder="Enter Reference Track"
              value={stepInputs[index]}
              onChange={(e) => handleInputChange(e, index)}
            />
            <ul>
              {/* Fetch suggestions for reference track if needed */}
            </ul>
          </>
        );
      case 2:
        return (
          <select
            value={stepInputs[index]}
            onChange={(e) => handleInputChange(e, index)}
          >
            <option value="">Select Mood/Emotion</option>
            <option value="sad">Sad</option>
            <option value="happy">Happy</option>
            <option value="angry">Angry</option>
            {/* Add more mood options if needed */}
          </select>
        );
      case 3:
        return (
          <select
            value={stepInputs[index]}
            onChange={(e) => handleInputChange(e, index)}
          >
            <option value="">Select Audience</option>
            <option value="older">Older</option>
            <option value="youth">Youth</option>
            <option value="girls">Girls</option>
            {/* Add more audience options if needed */}
          </select>
        );
      default:
        return null;
    }
  };

  const goToStep = (index) => {
    if (currentStep > index || currentStep === index + 1) {
      setCurrentStep(index + 1);
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
          <a onClick={() => goToStep(index)}
            key={index}
            className={`step-title ${currentStep === index + 1 ? 'active' : ''}`}
          >
            {title}
          </a>
        ))}
      </div>
      {!isGenerating && (
        <div className="step-input">
          {renderInput(currentStep - 1)}
        </div>
      )}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentStep === 1} hidden={currentStep ===4}>Back</button>
        {currentStep === 4 ? (
          <button onClick={handleNext} disabled={isGenerating}>
            {isGenerating ? (
              // Replace 'LoaderSVG' with your loader SVG component
              <div><iframe src="https://giphy.com/embed/RgzryV9nRCMHPVVXPV" width="50" height="50" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/trippy-abstract-pi-slices-RgzryV9nRCMHPVVXPV">via GIPHY</a></p></div>
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
