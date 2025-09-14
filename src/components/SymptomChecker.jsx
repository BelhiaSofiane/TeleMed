import { useState } from 'react'
import { symptomDatabase } from '../data/medicalData'

const SymptomChecker = ({ symptoms, setSymptoms, additionalContext, setAdditionalContext, onAnalyze }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredSymptoms = symptomDatabase.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 8)

  const addSymptom = (symptom) => {
    if (!symptoms.includes(symptom.name)) {
      setSymptoms([...symptoms, symptom.name])
    }
    setSearchTerm('')
    setShowSuggestions(false)
  }

  const removeSymptom = (symptomToRemove) => {
    setSymptoms(symptoms.filter(symptom => symptom !== symptomToRemove))
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setShowSuggestions(e.target.value.length > 0)
  }

  return (
    <div className="bg-medical-white rounded-lg shadow-lg p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-medical-gray-800 mb-2">Symptom Checker</h2>
        <p className="text-medical-gray-600">
          Enter your symptoms to get a preliminary assessment and guidance on next steps.
        </p>
      </div>

      {/* Symptom Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
          Add Symptoms
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            placeholder="Type to search symptoms..."
            className="w-full px-4 py-3 border border-medical-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
          />
          
          {showSuggestions && (
            <div className="absolute z-10 w-full mt-1 bg-medical-white border border-medical-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredSymptoms.length > 0 ? (
                filteredSymptoms.map((symptom, index) => (
                  <button
                    key={index}
                    onClick={() => addSymptom(symptom)}
                    className="w-full text-left px-4 py-3 hover:bg-medical-blue-50 border-b border-medical-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-medical-gray-800">{symptom.name}</div>
                    <div className="text-sm text-medical-gray-600">{symptom.description}</div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-medical-gray-500">No symptoms found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Selected Symptoms */}
      {symptoms.length > 0 && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-medical-gray-700 mb-2">
            Selected Symptoms
          </label>
          <div className="flex flex-wrap gap-2">
            {symptoms.map((symptom, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-medical-blue-100 text-medical-blue-800"
              >
                {symptom}
                <button
                  onClick={() => removeSymptom(symptom)}
                  className="ml-2 text-medical-blue-600 hover:text-medical-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Additional Context */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-medical-gray-700 mb-2">
          Additional Context (Optional)
        </label>
        <textarea
          value={additionalContext}
          onChange={(e) => setAdditionalContext(e.target.value)}
          placeholder="Include any additional information such as travel history, recent activities, duration of symptoms, etc."
          rows={4}
          className="w-full px-4 py-3 border border-medical-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Analyze Button */}
      <div className="flex justify-center">
        <button
          onClick={onAnalyze}
          disabled={symptoms.length === 0}
          className={`px-8 py-3 rounded-lg font-medium transition-colors ${
            symptoms.length > 0
              ? 'bg-medical-blue-600 text-medical-white hover:bg-medical-blue-700'
              : 'bg-medical-gray-300 text-medical-gray-500 cursor-not-allowed'
          }`}
        >
          Analyze Symptoms
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-medical-blue-50 rounded-lg">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div className="text-sm text-medical-blue-800">
            <strong>Disclaimer:</strong> This tool is for educational purposes only and should not replace professional medical advice. 
            Always consult with a healthcare provider for proper diagnosis and treatment.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SymptomChecker