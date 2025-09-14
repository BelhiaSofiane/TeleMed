// Symptom database with common symptoms
export const symptomDatabase = [
  { name: 'Fever', description: 'Elevated body temperature above normal (98.6°F/37°C)' },
  { name: 'Headache', description: 'Pain or discomfort in the head or neck area' },
  { name: 'Cough', description: 'Sudden, forceful expulsion of air from the lungs' },
  { name: 'Fatigue', description: 'Extreme tiredness or lack of energy' },
  { name: 'Nausea', description: 'Feeling of sickness with an inclination to vomit' },
  { name: 'Vomiting', description: 'Forceful expulsion of stomach contents through the mouth' },
  { name: 'Diarrhea', description: 'Frequent, loose, or watery bowel movements' },
  { name: 'Chest Pain', description: 'Pain or discomfort in the chest area' },
  { name: 'Shortness of Breath', description: 'Difficulty breathing or feeling breathless' },
  { name: 'Dizziness', description: 'Feeling lightheaded or unsteady' },
  { name: 'Rash', description: 'Change in skin color, texture, or appearance' },
  { name: 'Joint Pain', description: 'Pain, stiffness, or swelling in joints' },
  { name: 'Muscle Aches', description: 'Pain or discomfort in muscles' },
  { name: 'Sore Throat', description: 'Pain, irritation, or scratchiness in the throat' },
  { name: 'Runny Nose', description: 'Excessive nasal discharge' },
  { name: 'Congestion', description: 'Blocked or stuffy nose' },
  { name: 'Loss of Appetite', description: 'Reduced desire to eat' },
  { name: 'Weight Loss', description: 'Unintentional decrease in body weight' },
  { name: 'Weight Gain', description: 'Unintentional increase in body weight' },
  { name: 'Insomnia', description: 'Difficulty falling or staying asleep' },
  { name: 'Anxiety', description: 'Feeling of worry, nervousness, or unease' },
  { name: 'Depression', description: 'Persistent feeling of sadness or loss of interest' },
  { name: 'Memory Problems', description: 'Difficulty remembering or concentrating' },
  { name: 'Vision Changes', description: 'Blurred vision, double vision, or other visual disturbances' },
  { name: 'Hearing Loss', description: 'Partial or complete inability to hear' },
  { name: 'Abdominal Pain', description: 'Pain or discomfort in the stomach area' },
  { name: 'Back Pain', description: 'Pain in the back, from neck to lower back' },
  { name: 'Swelling', description: 'Enlargement of body parts due to fluid accumulation' },
  { name: 'Bruising', description: 'Discoloration of skin due to bleeding under the surface' },
  { name: 'Bleeding', description: 'Loss of blood from the body' }
]

// Condition database with symptoms and guidance
export const conditionDatabase = [
  {
    id: 1,
    name: 'Common Cold',
    description: 'Viral infection of the upper respiratory tract',
    symptoms: ['cough', 'runny nose', 'congestion', 'sore throat', 'sneezing'],
    severity: 'mild',
    guidance: 'Rest, stay hydrated, use over-the-counter cold medications. See a doctor if symptoms worsen or persist for more than 10 days.',
    medicalAttention: 'low',
    educationalNotes: 'Most common viral infection. Caused by rhinoviruses. Self-limiting condition.'
  },
  {
    id: 2,
    name: 'Influenza (Flu)',
    description: 'Viral infection affecting the respiratory system',
    symptoms: ['fever', 'cough', 'fatigue', 'muscle aches', 'headache', 'sore throat'],
    severity: 'moderate',
    guidance: 'Rest, stay hydrated, antiviral medications may help if started early. Seek medical attention if symptoms are severe.',
    medicalAttention: 'medium',
    educationalNotes: 'Caused by influenza viruses. Can lead to complications in high-risk groups. Vaccination is the best prevention.'
  },
  {
    id: 3,
    name: 'COVID-19',
    description: 'Coronavirus disease caused by SARS-CoV-2',
    symptoms: ['fever', 'cough', 'shortness of breath', 'fatigue', 'loss of taste', 'loss of smell'],
    severity: 'moderate to severe',
    guidance: 'Isolate immediately, contact healthcare provider. Monitor symptoms closely. Emergency care if severe breathing difficulties.',
    medicalAttention: 'high',
    educationalNotes: 'Novel coronavirus. Can cause severe respiratory illness. Testing and vaccination available.'
  },
  {
    id: 4,
    name: 'Migraine',
    description: 'Severe headache disorder with neurological symptoms',
    symptoms: ['headache', 'nausea', 'vomiting', 'sensitivity to light', 'sensitivity to sound'],
    severity: 'moderate to severe',
    guidance: 'Rest in dark, quiet room. Over-the-counter pain relievers. See a doctor for frequent or severe migraines.',
    medicalAttention: 'medium',
    educationalNotes: 'Neurological condition with recurrent episodes. Can be triggered by various factors.'
  },
  {
    id: 5,
    name: 'Gastroenteritis',
    description: 'Inflammation of the stomach and intestines',
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal pain', 'fever'],
    severity: 'mild to moderate',
    guidance: 'Stay hydrated, eat bland foods, rest. Seek medical attention if severe dehydration or persistent symptoms.',
    medicalAttention: 'medium',
    educationalNotes: 'Commonly called "stomach flu." Can be viral or bacterial. Dehydration is the main concern.'
  },
  {
    id: 6,
    name: 'Pneumonia',
    description: 'Infection that inflames air sacs in the lungs',
    symptoms: ['cough', 'fever', 'shortness of breath', 'chest pain', 'fatigue'],
    severity: 'moderate to severe',
    guidance: 'Seek immediate medical attention. May require antibiotics or hospitalization.',
    medicalAttention: 'high',
    educationalNotes: 'Can be bacterial, viral, or fungal. Chest X-ray typically needed for diagnosis.'
  },
  {
    id: 7,
    name: 'Anxiety Disorder',
    description: 'Mental health condition with excessive worry and fear',
    symptoms: ['anxiety', 'fatigue', 'insomnia', 'muscle tension', 'dizziness'],
    severity: 'mild to severe',
    guidance: 'Consider therapy or counseling. Practice relaxation techniques. See a mental health professional if symptoms persist.',
    medicalAttention: 'medium',
    educationalNotes: 'Common mental health condition. Can be managed with therapy and/or medication.'
  },
  {
    id: 8,
    name: 'Depression',
    description: 'Mood disorder causing persistent sadness and loss of interest',
    symptoms: ['depression', 'fatigue', 'insomnia', 'loss of appetite', 'memory problems'],
    severity: 'mild to severe',
    guidance: 'Seek professional help. Consider therapy and/or medication. Support from loved ones is important.',
    medicalAttention: 'high',
    educationalNotes: 'Serious mental health condition. Early intervention is crucial for better outcomes.'
  },
  {
    id: 9,
    name: 'Allergic Reaction',
    description: 'Immune system response to a foreign substance',
    symptoms: ['rash', 'swelling', 'shortness of breath', 'nausea', 'dizziness'],
    severity: 'mild to severe',
    guidance: 'Avoid allergen if known. Use antihistamines for mild reactions. Seek emergency care for severe reactions.',
    medicalAttention: 'high',
    educationalNotes: 'Can range from mild (hives) to life-threatening (anaphylaxis). Epinephrine may be needed for severe cases.'
  },
  {
    id: 10,
    name: 'Urinary Tract Infection (UTI)',
    description: 'Bacterial infection of the urinary system',
    symptoms: ['frequent urination', 'burning during urination', 'abdominal pain', 'fever', 'fatigue'],
    severity: 'mild to moderate',
    guidance: 'Increase fluid intake. See a doctor for antibiotics. Untreated UTIs can lead to kidney infection.',
    medicalAttention: 'medium',
    educationalNotes: 'More common in women. Caused by bacteria, usually E. coli. Requires antibiotic treatment.'
  }
]