import { useState } from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-medical-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-medical-white rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-medical-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-white">MediGuide</h1>
              <p className="text-sm text-medical-blue-100">Medical Symptom Checker</p>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-medical-blue-200 font-semibold' 
                  : 'text-medical-white hover:text-medical-blue-200'
              }`}
            >
              Symptom Checker
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`transition-colors ${
                currentPage === 'about' 
                  ? 'text-medical-blue-200 font-semibold' 
                  : 'text-medical-white hover:text-medical-blue-200'
              }`}
            >
              About
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-medical-white hover:text-medical-blue-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-medical-blue-500">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  setCurrentPage('home')
                  setIsMenuOpen(false)
                }}
                className={`text-left py-2 transition-colors ${
                  currentPage === 'home' 
                    ? 'text-medical-blue-200 font-semibold' 
                    : 'text-medical-white hover:text-medical-blue-200'
                }`}
              >
                Symptom Checker
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about')
                  setIsMenuOpen(false)
                }}
                className={`text-left py-2 transition-colors ${
                  currentPage === 'about' 
                    ? 'text-medical-blue-200 font-semibold' 
                    : 'text-medical-white hover:text-medical-blue-200'
                }`}
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header