import React, { useEffect, useState } from 'react';
import symptomsData from '../data/data';
import { OpenAI } from 'openai';
import Diagnostic from './Diagnostic';
import Loading from '../components/Loading';

// Get the API key from environment variables
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;


// Create a new OpenAI instance
const openai = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true, 
});


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSymptom, setHoveredSymptom] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [diagnosis, setDiagnosis] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(selectedSymptoms)
  }, [selectedSymptoms])
  

  async function getDiagnosis() {
    setLoading(true)
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo", 
      messages: [
        { 
          role: "system", 
          content: "You are a doctor who provides brief diagnoses based on symptoms." 
        },
        { 
          role: "user", 
          content: `Diagnose based on these symptoms: ${selectedSymptoms.join(", ")}` 
        } 
      ],
      max_tokens: 200,
    });

    console.log("Response from OpenAI:", response);
    setDiagnosis(response.choices[0].message.content)
    setLoading(false)
  }


  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const addSymptom = (symptom) => {
    //prevent duplicate 
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const deleteSymptom = (symptom) => {
    setSelectedSymptoms(prev => {
      const newSymptoms = [...prev]
      let index = prev.findIndex(a => a === symptom)
      if(index !== -1){
        newSymptoms.splice(index, 1)
      }
      return newSymptoms
    })
  }

  return (

    loading 
    ? <Loading /> 
    :(
    <div className='symptoms-container'>
      <div className="dropdown" onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
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
      {selectedSymptoms.map((item,i) => (
          <div>
            <p>{item}</p>
            <button onClick={() => deleteSymptom(item)}>x</button>)
          </div>
      ))}
      <Diagnostic diagnosis={diagnosis} />
      <button onClick={getDiagnosis}>Get Diagnosis</button>
    </div>)
  );
};

export default Home;
