# MediGuide - Medical Symptom Checker

MediGuide is a comprehensive medical web application designed to assist both patients and medical students by offering first-step diagnoses, healthcare guidance, and insights into potential medical conditions.

## Features

### For Patients
- **Symptom Checker**: Input symptoms and get preliminary assessments
- **Condition Analysis**: Receive a list of possible conditions with likelihood estimates
- **Next Steps Guidance**: Clear recommendations on whether professional medical consultation is necessary
- **Additional Context**: Include travel history, lifestyle factors, and other relevant information

### For Medical Students
- **Educational Mode**: Learn symptom-disease correlations and diagnostic patterns
- **Differential Diagnosis Practice**: Understand how symptoms relate to different conditions
- **Clinical Decision Support**: Interactive educational panel with medical insights
- **Pattern Recognition**: Practice identifying symptom clusters and their significance

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom medical color scheme
- **Icons**: Heroicons (SVG icons)
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mediguide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and branding
│   ├── SymptomChecker.jsx  # Main symptom input interface
│   ├── ConditionResults.jsx # Results display and analysis
│   ├── EducationalPanel.jsx # Educational content for students
│   └── About.jsx           # About page
├── data/
│   └── medicalData.js      # Symptom and condition database
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Medical Database

The application includes a comprehensive database of:

- **30+ Common Symptoms**: With descriptions and medical context
- **10+ Medical Conditions**: Including symptoms, severity, and guidance
- **Educational Content**: Learning materials for medical students

## Key Components

### SymptomChecker
- Autocomplete symptom search
- Selected symptoms management
- Additional context input
- Analysis trigger

### ConditionResults
- Likelihood-based condition ranking
- Severity indicators
- Medical attention recommendations
- Symptom matching visualization

### EducationalPanel
- Medical education content
- Diagnostic process explanation
- Symptom analysis insights
- Learning opportunities

## Design System

The application uses a professional medical color scheme:
- **Primary Blue**: Medical blue (#3b82f6) for primary actions and branding
- **Secondary Colors**: Various shades of blue and gray
- **Accent Colors**: Status indicators (red, yellow, green)
- **Typography**: Inter font family for readability

## Disclaimer

**Important**: This application is designed for educational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns. In case of emergency, call your local emergency services immediately.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Future Enhancements

- [ ] User authentication and symptom history
- [ ] Integration with medical APIs
- [ ] Advanced machine learning algorithms
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Integration with electronic health records