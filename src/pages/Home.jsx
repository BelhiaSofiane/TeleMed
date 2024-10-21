import React, { useState } from 'react';
import symptomsData from '../data/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSymptom, setHoveredSymptom] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([])


  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const addSymptom = (symptom) => {
    // check is symptom is already added if not run next line if not return selected symptom
    setSelectedSymptoms([...selectedSymptoms, symptom])
    console.log(selectedSymptoms)
  }

  return (
    <div className='symptoms-container'>
      <div className="dropdown" onClick={toggleDropDown}>
        <span>Select a Symptom</span>
        {isOpen && (
          <div className="dropdown-menu">
            {Object.keys(symptomsData).map((category) => (
              <div
                className="dropdown-option"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
                key={category}
              >
                {category}
                {hoveredCategory === category && (
                  <div className="nested-dropdown">
                    {symptomsData[category].map((symptom, index) => (
                      <div
                        className="nested-option"
                        onMouseEnter={() => setHoveredSymptom(symptom)}
                        onMouseLeave={() => setHoveredSymptom(null)}
                        onClick={() => addSymptom(symptom.name)}
                        key={index}
                      >
                        {symptom.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {hoveredSymptom && (
        <div className='tooltip'>
          <strong>{hoveredSymptom.name}</strong>: {hoveredSymptom.description}
        </div>
      )}
    </div>
  );
};

export default Home;
