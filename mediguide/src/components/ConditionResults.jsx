const ConditionResults = ({ results, symptoms, additionalContext }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getLikelihoodColor = (likelihood) => {
    if (likelihood >= 70) return 'text-red-600'
    if (likelihood >= 40) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getMedicalAttentionColor = (attention) => {
    switch (attention) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="bg-medical-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-medical-gray-800 mb-2">Analysis Results</h2>
        <p className="text-medical-gray-600">
          Based on your symptoms, here are the possible conditions and recommended next steps.
        </p>
      </div>

      {/* Severity Alert */}
      <div className={`mb-6 p-4 rounded-lg border ${getSeverityColor(results.severity)}`}>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <h3 className="font-semibold">
              {results.severity === 'high' && 'High Priority - Seek Medical Attention'}
              {results.severity === 'medium' && 'Medium Priority - Consider Medical Consultation'}
              {results.severity === 'low' && 'Low Priority - Monitor Symptoms'}
            </h3>
            <p className="text-sm mt-1">
              {results.severity === 'high' && 'Some conditions have high likelihood. Please consult a healthcare provider immediately.'}
              {results.severity === 'medium' && 'Consider scheduling an appointment with a healthcare provider for evaluation.'}
              {results.severity === 'low' && 'Continue monitoring your symptoms. Consult a healthcare provider if they worsen.'}
            </p>
          </div>
        </div>
      </div>

      {/* Condition List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-medical-gray-800">Possible Conditions</h3>
        
        {results.conditions.length > 0 ? (
          results.conditions.map((condition, index) => (
            <div key={condition.id} className="border border-medical-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-medical-gray-800">{condition.name}</h4>
                  <p className="text-sm text-medical-gray-600">{condition.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${getLikelihoodColor(condition.likelihood)}`}>
                    {condition.likelihood}% match
                  </span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getMedicalAttentionColor(condition.medicalAttention)}`}>
                    {condition.medicalAttention === 'high' && 'Seek Care'}
                    {condition.medicalAttention === 'medium' && 'Consider Care'}
                    {condition.medicalAttention === 'low' && 'Monitor'}
                  </div>
                </div>
              </div>

              {/* Symptoms Match */}
              <div className="mb-3">
                <h5 className="text-sm font-medium text-medical-gray-700 mb-2">Matching Symptoms:</h5>
                <div className="flex flex-wrap gap-1">
                  {condition.symptoms.map((symptom, symptomIndex) => (
                    <span
                      key={symptomIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        symptoms.some(s => s.toLowerCase().includes(symptom.toLowerCase()) || 
                                          symptom.toLowerCase().includes(s.toLowerCase()))
                          ? 'bg-medical-blue-100 text-medical-blue-800'
                          : 'bg-medical-gray-100 text-medical-gray-600'
                      }`}
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guidance */}
              <div className="bg-medical-gray-50 rounded p-3">
                <h5 className="text-sm font-medium text-medical-gray-700 mb-1">Recommended Actions:</h5>
                <p className="text-sm text-medical-gray-600">{condition.guidance}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-medical-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-medical-gray-500">No specific conditions matched your symptoms.</p>
            <p className="text-sm text-medical-gray-400 mt-1">
              Consider consulting a healthcare provider for a professional evaluation.
            </p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-medical-blue-50 rounded-lg">
        <h4 className="font-semibold text-medical-blue-800 mb-2">Summary</h4>
        <div className="text-sm text-medical-blue-700 space-y-1">
          <p><strong>Reported Symptoms:</strong> {symptoms.join(', ')}</p>
          {additionalContext && (
            <p><strong>Additional Context:</strong> {additionalContext}</p>
          )}
          <p><strong>Analysis Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default ConditionResults