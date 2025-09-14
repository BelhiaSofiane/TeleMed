import { useState } from 'react'

const EducationalPanel = ({ showEducational, setShowEducational, results }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const educationalContent = {
    overview: {
      title: 'Medical Education Overview',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-medical-gray-600">
            This educational panel provides insights into symptom-disease correlations and medical decision-making processes.
          </p>
          
          <div className="bg-medical-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-medical-blue-800 mb-2">Key Learning Points:</h4>
            <ul className="text-sm text-medical-blue-700 space-y-1">
              <li>• Symptom clustering patterns</li>
              <li>• Differential diagnosis principles</li>
              <li>• Risk stratification methods</li>
              <li>• Clinical decision support</li>
            </ul>
          </div>

          <div className="bg-medical-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-medical-gray-800 mb-2">For Medical Students:</h4>
            <p className="text-sm text-medical-gray-600">
              Use this tool to practice pattern recognition and understand how symptoms relate to different conditions.
            </p>
          </div>
        </div>
      )
    },
    symptoms: {
      title: 'Symptom Analysis',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-medical-gray-600">
            Understanding symptom patterns is crucial for accurate diagnosis.
          </p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-medical-blue-500 pl-4">
              <h5 className="font-semibold text-medical-gray-800">Acute vs Chronic</h5>
              <p className="text-sm text-medical-gray-600">
                Duration of symptoms helps narrow down potential causes.
              </p>
            </div>
            
            <div className="border-l-4 border-medical-blue-500 pl-4">
              <h5 className="font-semibold text-medical-gray-800">Systemic vs Localized</h5>
              <p className="text-sm text-medical-gray-600">
                Distinguishing between body-wide and localized symptoms.
              </p>
            </div>
            
            <div className="border-l-4 border-medical-blue-500 pl-4">
              <h5 className="font-semibold text-medical-gray-800">Red Flag Symptoms</h5>
              <p className="text-sm text-medical-gray-600">
                Symptoms that require immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      )
    },
    diagnosis: {
      title: 'Diagnostic Process',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-medical-gray-600">
            The diagnostic process involves systematic evaluation of symptoms and risk factors.
          </p>
          
          <div className="space-y-3">
            <div className="bg-medical-gray-50 p-3 rounded">
              <h5 className="font-semibold text-medical-gray-800 mb-1">1. History Taking</h5>
              <p className="text-sm text-medical-gray-600">Comprehensive symptom assessment and medical history</p>
            </div>
            
            <div className="bg-medical-gray-50 p-3 rounded">
              <h5 className="font-semibold text-medical-gray-800 mb-1">2. Physical Examination</h5>
              <p className="text-sm text-medical-gray-600">Clinical signs and physical findings</p>
            </div>
            
            <div className="bg-medical-gray-50 p-3 rounded">
              <h5 className="font-semibold text-medical-gray-800 mb-1">3. Diagnostic Testing</h5>
              <p className="text-sm text-medical-gray-600">Laboratory tests, imaging, and other investigations</p>
            </div>
            
            <div className="bg-medical-gray-50 p-3 rounded">
              <h5 className="font-semibold text-medical-gray-800 mb-1">4. Differential Diagnosis</h5>
              <p className="text-sm text-medical-gray-600">Systematic consideration of possible conditions</p>
            </div>
          </div>
        </div>
      )
    }
  }

  if (!showEducational) {
    return (
      <div className="bg-medical-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-medical-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-medical-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-medical-gray-800 mb-2">Medical Education Mode</h3>
          <p className="text-sm text-medical-gray-600 mb-4">
            Enhance your learning with educational insights about symptoms and conditions.
          </p>
          <button
            onClick={() => setShowEducational(true)}
            className="px-4 py-2 bg-medical-blue-600 text-medical-white rounded-lg hover:bg-medical-blue-700 transition-colors"
          >
            Enable Education Mode
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-medical-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-medical-gray-800">Medical Education</h3>
        <button
          onClick={() => setShowEducational(false)}
          className="text-medical-gray-400 hover:text-medical-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-4 bg-medical-gray-100 p-1 rounded-lg">
        {Object.keys(educationalContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-medical-white text-medical-blue-600 shadow-sm'
                : 'text-medical-gray-600 hover:text-medical-gray-800'
            }`}
          >
            {educationalContent[tab].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mb-4">
        {educationalContent[activeTab].content}
      </div>

      {/* Results Analysis (if available) */}
      {results && results.conditions.length > 0 && (
        <div className="border-t border-medical-gray-200 pt-4">
          <h4 className="font-semibold text-medical-gray-800 mb-3">Current Analysis Insights</h4>
          <div className="space-y-3">
            <div className="bg-medical-blue-50 p-3 rounded">
              <h5 className="font-semibold text-medical-blue-800 text-sm">Symptom Clustering</h5>
              <p className="text-sm text-medical-blue-700 mt-1">
                Your symptoms show patterns typical of {results.conditions[0].name.toLowerCase()}.
              </p>
            </div>
            
            <div className="bg-medical-gray-50 p-3 rounded">
              <h5 className="font-semibold text-medical-gray-800 text-sm">Learning Opportunity</h5>
              <p className="text-sm text-medical-gray-600 mt-1">
                Study the differential diagnosis between the top {Math.min(3, results.conditions.length)} conditions 
                to understand key distinguishing features.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-4 p-3 bg-medical-gray-50 rounded">
        <h5 className="font-semibold text-medical-gray-800 text-sm mb-2">Quick Reference</h5>
        <div className="text-xs text-medical-gray-600 space-y-1">
          <p>• High likelihood (>70%): Strong consideration</p>
          <p>• Medium likelihood (40-70%): Possible diagnosis</p>
          <p>• Low likelihood (<40%): Less likely but consider</p>
        </div>
      </div>
    </div>
  )
}

export default EducationalPanel