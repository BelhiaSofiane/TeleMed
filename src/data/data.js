const symptomsData = {
    general: [
      { name: "Fatigue", description: "A feeling of extreme tiredness or lack of energy." },
      { name: "Fever", description: "An elevated body temperature, often indicating an infection or illness." },
      { name: "Weight Loss", description: "Unexplained reduction in body weight, often associated with illness." },
      { name: "Night Sweats", description: "Excessive sweating during the night, often related to fever or illness." },
      { name: "Chills", description: "Feeling of coldness often accompanied by shivering, usually with fever." }
    ],
    respiratory: [
      { name: "Cough", description: "A sudden, forceful expulsion of air from the lungs." },
      { name: "Shortness of Breath (Dyspnea)", description: "Difficulty or discomfort in breathing." },
      { name: "Wheezing", description: "A high-pitched whistling sound while breathing, often due to narrow airways." },
      { name: "Chest Tightness", description: "A feeling of pressure or tightness in the chest." }
    ],
    gastrointestinal: [
      { name: "Nausea", description: "A feeling of discomfort in the stomach that often leads to vomiting." },
      { name: "Vomiting", description: "The expulsion of stomach contents through the mouth." },
      { name: "Diarrhea", description: "Frequent, loose, or watery bowel movements." },
      { name: "Constipation", description: "Difficulty in passing stools, infrequent bowel movements." },
      { name: "Abdominal Pain", description: "Pain or discomfort in the abdominal region." },
      { name: "Bloating", description: "A feeling of fullness or swelling in the abdomen, often from gas." },
      { name: "Heartburn (Acid Reflux)", description: "A burning sensation in the chest caused by stomach acid moving up the esophagus." }
    ],
    neurological: [
      { name: "Headache", description: "Pain or discomfort in the head or neck region." },
      { name: "Dizziness", description: "A sensation of lightheadedness, often accompanied by imbalance." },
      { name: "Seizures", description: "Uncontrolled electrical activity in the brain causing convulsions or other symptoms." },
      { name: "Confusion", description: "A state of being disoriented or having difficulty thinking clearly." },
      { name: "Tremors", description: "Involuntary, rhythmic shaking of the body or limbs." },
      { name: "Numbness", description: "Loss of sensation in a part of the body." },
      { name: "Tingling (Paresthesia)", description: "A prickling or 'pins and needles' sensation, often caused by nerve issues." },
      { name: "Memory Loss", description: "Difficulty remembering information or events." }
    ],
    cardiovascular: [
      { name: "Chest Pain", description: "Pain or discomfort in the chest, possibly signaling heart or lung problems." },
      { name: "Palpitations", description: "Irregular or rapid heartbeats that are often noticeable by the patient." },
      { name: "Edema", description: "Swelling in body tissues, often in the legs, caused by fluid buildup." },
      { name: "Fainting (Syncope)", description: "A temporary loss of consciousness, usually due to lack of blood flow to the brain." }
    ],
    dermatological: [
      { name: "Rash", description: "Changes in the skin causing red, itchy, or swollen patches." },
      { name: "Itching (Pruritus)", description: "An irritating sensation that causes a desire to scratch." },
      { name: "Skin Discoloration", description: "Changes in skin color due to infection, injury, or other conditions." },
      { name: "Ulcers", description: "Open sores on the skin or mucous membranes." },
      { name: "Blisters", description: "Fluid-filled bumps on the skin, often caused by friction, burns, or infections." }
    ],
    musculoskeletal: [
      { name: "Joint Pain (Arthralgia)", description: "Pain or discomfort in the joints, often caused by arthritis or injury." },
      { name: "Muscle Pain (Myalgia)", description: "Pain or discomfort in the muscles, often due to overuse or injury." },
      { name: "Swelling of Joints", description: "Enlargement of joints, often due to inflammation or injury." },
      { name: "Stiffness", description: "Difficulty moving joints or muscles, often due to injury or arthritis." }
    ],
    psychiatric: [
      { name: "Anxiety", description: "Feelings of worry, nervousness, or fear that are strong enough to interfere with daily activities." },
      { name: "Depression", description: "Persistent feelings of sadness or loss of interest in activities, often accompanied by other emotional and physical symptoms." },
      { name: "Insomnia", description: "Difficulty falling or staying asleep." },
      { name: "Mood Swings", description: "Rapid changes in emotional state, often unpredictable." },
      { name: "Delusions", description: "Strong beliefs in something that is not based in reality." },
      { name: "Hallucinations", description: "Seeing, hearing, or sensing things that aren’t actually there." }
    ],
    genitourinary: [
      { name: "Frequent Urination", description: "Needing to urinate more often than usual." },
      { name: "Blood in Urine (Hematuria)", description: "Presence of blood in the urine, indicating a possible infection or injury." },
      { name: "Painful Urination (Dysuria)", description: "Discomfort or pain when urinating." },
      { name: "Incontinence", description: "Inability to control bladder or bowel movements." }
    ],
    eye: [
      { name: "Blurred Vision", description: "A lack of sharpness in vision, making objects appear out of focus." },
      { name: "Redness", description: "Inflammation or irritation in the eye, causing it to appear red." },
      { name: "Eye Pain", description: "Discomfort or pain in or around the eye." },
      { name: "Light Sensitivity (Photophobia)", description: "Discomfort or pain in the eyes due to exposure to bright light." }
    ],
    ent: [
      { name: "Ear Pain", description: "Discomfort or pain in the ear, often indicating an ear infection." },
      { name: "Hearing Loss", description: "Partial or total inability to hear sounds in one or both ears." },
      { name: "Nasal Congestion", description: "A blocked or stuffy nose, often caused by colds or allergies." },
      { name: "Sore Throat", description: "Pain or discomfort in the throat, usually worse when swallowing." },
      { name: "Hoarseness", description: "A raspy or strained voice, often due to irritation or inflammation of the vocal cords." }
    ]
  };
  
  export default symptomsData;
  