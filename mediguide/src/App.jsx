import { useState } from 'react'
import Header from './components/Header'
import SymptomChecker from './components/SymptomChecker'
import ConditionResults from './components/ConditionResults'
import EducationalPanel from './components/EducationalPanel'
import About from './components/About'
import { symptomDatabase, conditionDatabase } from './data/medicalData'

function App() {
  const [symptoms, setSymptoms] = useState([])
  const [additionalContext, setAdditionalContext] = useState('')
  const [results, setResults] = useState(null)
  const [showEducational, setShowEducational] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const analyzeSymptoms = () => {
    if (symptoms.length === 0) return

    // Simple symptom matching algorithm
    const matchedConditions = conditionDatabase.map(condition => {
      let score = 0
      const symptomCount = condition.symptoms.length
      
      condition.symptoms.forEach(conditionSymptom => {
        if (symptoms.some(symptom => 
          symptom.toLowerCase().includes(conditionSymptom.toLowerCase()) ||
          conditionSymptom.toLowerCase().includes(symptom.toLowerCase())
        )) {
          score += 1
        }
      })
      
      const likelihood = Math.min((score / symptomCount) * 100, 95)
      
      return {
        ...condition,
        likelihood: Math.round(likelihood)
      }
    }).filter(condition => condition.likelihood > 10)
      .sort((a, b) => b.likelihood - a.likelihood)
      .slice(0, 5)

    setResults({
      conditions: matchedConditions,
      severity: matchedConditions.some(c => c.likelihood > 70) ? 'high' : 
                matchedConditions.some(c => c.likelihood > 40) ? 'medium' : 'low'
    })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'home':
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Symptom Checker */}
            <div className="lg:col-span-2">
              <SymptomChecker
                symptoms={symptoms}
                setSymptoms={setSymptoms}
                additionalContext={additionalContext}
                setAdditionalContext={setAdditionalContext}
                onAnalyze={analyzeSymptoms}
              />
              
              {results && (
                <ConditionResults 
                  results={results}
                  symptoms={symptoms}
                  additionalContext={additionalContext}
                />
              )}
            </div>

            {/* Educational Panel */}
            <div className="lg:col-span-1">
              <EducationalPanel
                showEducational={showEducational}
                setShowEducational={setShowEducational}
                results={results}
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-medical-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
