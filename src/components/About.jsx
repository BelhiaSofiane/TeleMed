const About = () => {
  return (
    <div className="bg-medical-white rounded-lg shadow-lg p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-medical-gray-800 mb-6">About MediGuide</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-medical-gray-600 mb-6">
            MediGuide is a comprehensive medical web application designed to assist both patients and medical students 
            in understanding symptoms and potential medical conditions. Our platform combines advanced symptom analysis 
            with educational resources to provide valuable insights into healthcare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-medical-gray-800 mb-4">For Patients</h3>
              <ul className="space-y-2 text-medical-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  First-step symptom assessment
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Guidance on next steps
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional medical consultation recommendations
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Educational resources about conditions
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-medical-gray-800 mb-4">For Medical Students</h3>
              <ul className="space-y-2 text-medical-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Symptom-disease correlation learning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Differential diagnosis practice
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clinical decision support insights
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interactive educational panel
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-medical-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-medical-blue-800 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-medical-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-medical-blue-800 mb-2">Smart Analysis</h4>
                <p className="text-sm text-medical-blue-700">Advanced symptom matching with likelihood estimates</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-medical-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-medical-blue-800 mb-2">Educational Focus</h4>
                <p className="text-sm text-medical-blue-700">Comprehensive learning resources for medical education</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-medical-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-medical-blue-800 mb-2">Professional Design</h4>
                <p className="text-sm text-medical-blue-700">Clean, clinical interface with medical color scheme</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                <p className="text-yellow-700 text-sm">
                  MediGuide is designed for educational purposes only and should not replace professional medical advice, 
                  diagnosis, or treatment. Always seek the advice of qualified health providers with questions about 
                  medical conditions. In case of emergency, call your local emergency services immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About