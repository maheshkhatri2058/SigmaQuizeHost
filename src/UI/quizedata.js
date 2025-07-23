const quizData = [
  // 🔸 Section A: General Computer Awareness
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Central Power Unit"],
    answer: "Central Processing Unit"
  },
  // {
  //   question: "Which type of software is MS Word?",
  //   options: ["System software", "Application software", "Utility software", "Compiler"],
  //   answer: "Application software"
  // },
  // {
  //   question: "Which of the following is a file extension for an Excel file?",
  //   options: [".docx", ".pptx", ".xlsx", ".html"],
  //   answer: ".xlsx"
  // },
  // {
  //   question: "Which device is used to convert digital signals to analog for internet connectivity?",
  //   options: ["Router", "Modem", "Switch", "Hub"],
  //   answer: "Modem"
  // },
  // {
  //   question: "Which of the following is used to boot the computer?",
  //   options: ["RAM", "Hard Disk", "Power Supply", "BIOS"],
  //   answer: "BIOS"
  // },

  // // 🔸 Section B: General Science & Chemistry
  // {
  //   question: "Which of the following does not conduct electricity?",
  //   options: ["NaCl in water", "Solid NaCl", "NaOH in water", "HCl in water"],
  //   answer: "Solid NaCl"
  // },
  // {
  //   question: "Which is the most electronegative element?",
  //   options: ["Oxygen", "Fluorine", "Nitrogen", "Chlorine"],
  //   answer: "Fluorine"
  // },
  // {
  //   question: "The chemical symbol for Sodium is:",
  //   options: ["So", "Sd", "Na", "S"],
  //   answer: "Na"
  // },
  // {
  //   question: "Which of the following is a noble gas?",
  //   options: ["Nitrogen", "Neon", "Oxygen", "Hydrogen"],
  //   answer: "Neon"
  // },
  // {
  //   question: "Which element is a liquid at room temperature?",
  //   options: ["Mercury", "Lead", "Copper", "Zinc"],
  //   answer: "Mercury"
  // },

  // // 🔸 Section C: GK & Current Affairs
  // {
  //   question: "Who is the President of India as of 2025?",
  //   options: ["Ram Nath Kovind", "Droupadi Murmu", "Pratibha Patil", "Narendra Modi"],
  //   answer: "Droupadi Murmu"
  // },
  // {
  //   question: "Where is the Statue of Unity located?",
  //   options: ["Gujarat", "Rajasthan", "Maharashtra", "Madhya Pradesh"],
  //   answer: "Gujarat"
  // },
  // {
  //   question: "Which is the largest desert in the world?",
  //   options: ["Gobi", "Thar", "Sahara", "Antarctica"],
  //   answer: "Antarctica"
  // },
  // {
  //   question: "Which planet is called the Red Planet?",
  //   options: ["Mars", "Venus", "Jupiter", "Saturn"],
  //   answer: "Mars"
  // },
  // {
  //   question: "Which Indian is known as the Missile Man of India?",
  //   options: ["C.V. Raman", "A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha"],
  //   answer: "A.P.J. Abdul Kalam"
  // },
  // {
  //   question: "Where is the ISRO headquarters located?",
  //   options: ["Hyderabad", "Mumbai", "Chennai", "Bengaluru"],
  //   answer: "Bengaluru"
  // },
  // {
  //   question: "The Nobel Peace Prize is awarded in:",
  //   options: ["Oslo", "Stockholm", "Geneva", "London"],
  //   answer: "Oslo"
  // },
  // {
  //   question: "A and B can complete work in 30 and 40 days respectively. Together?",
  //   options: ["16.5", "17.1", "17.14", "18"],
  //   answer: "17.14"
  // },
  // {
  //   question: "Marked ₹6000, sold at ₹5400. Discount %?",
  //   options: ["10%", "8%", "15%", "12%"],
  //   answer: "10%"
  // },
  // {
  //   question: "If MARKET → TKERAM, then TABLE → ?",
  //   options: ["ELBAT", "EBLTA", "EBALT", "EBATL"],
  //   answer: "ELBAT"
  // },

  // // 🔸 Section D: Business & Economy
  // {
  //   question: "Which of the following is a regulatory body for securities and capital markets in India?",
  //   options: ["RBI", "SEBI", "IRDAI", "NABARD"],
  //   answer: "SEBI"
  // },
  // {
  //   question: "The 'Startup India' initiative was launched in:",
  //   options: ["2014", "2015", "2016", "2017"],
  //   answer: "2016"
  // },
  // {
  //   question: "What is Net Worth in business terms?",
  //   options: ["Assets – Liabilities", "Revenue – Cost", "Income – Tax", "Sales – Marketing"],
  //   answer: "Assets – Liabilities"
  // },
  // {
  //   question: "Which of the following is a government e-commerce platform?",
  //   options: ["Flipkart", "Amazon", "GeM", "Myntra"],
  //   answer: "GeM"
  // },
  // {
  //   question: "Which country launched AI-powered digital currency?",
  //   options: ["China", "Sweden", "Nigeria", "Bahamas"],
  //   answer: "China"
  // },
  // {
  //   question: "Indian named in TIME’s 100 Innovators 2025?",
  //   options: ["Nikhil Kamath", "Gita Gopinath", "Kiran Mazumdar-Shaw", "Nandan Nilekani"],
  //   answer: "Nandan Nilekani"
  // },
  // {
  //   question: "Theme of World Health Day 2025?",
  //   options: ["Health for All", "Our Planet, Our Health", "Building a Fairer World", "My Health, My Right"],
  //   answer: "My Health, My Right"
  // },
  // {
  //   question: "Cleanest city in India (Swachh Survekshan 2024–25)?",
  //   options: ["Surat", "Navi Mumbai", "Indore", "Ahmedabad"],
  //   answer: "Indore"
  // },
  // {
  //   question: "Which city ranked third cleanest in Swachh Survekshan 2024–25?",
  //   options: ["Bhopal", "Navi Mumbai", "Ahmedabad", "Lucknow"],
  //   answer: "Navi Mumbai"
  // },
  // {
  //   question: "First 7-star Garbage Free City in UP?",
  //   options: ["Prayagraj", "Lucknow", "Agra", "Gorakhpur"],
  //   answer: "Lucknow"
  // },

  // // 🔸 Section E: Reasoning & Aptitude
  // {
  //   question: "Pointing to a man, Ramesh says, 'He is the son of my grandfather's only son.'",
  //   options: ["Brother", "Father", "Cousin", "Uncle"],
  //   answer: "Brother"
  // },
  // {
  //   question: "Pointing to a man, a woman said, 'He is my brother’s only son.'",
  //   options: ["Nephew", "Son", "Brother", "Cousin"],
  //   answer: "Nephew"
  // },
  // {
  //   question: "A person walks 4 km north, then 3 km east, and 2 km south. How far is he from his starting point?",
  //   options: ["5 km", "4 km", "3 km", "7 km"],
  //   answer: "4 km"
  // },
  // {
  //   question: "What is the angle between clock hands at 3:15?",
  //   options: ["30°", "37.5°", "45°", "52.5°"],
  //   answer: "52.5°"
  // },
  // {
  //   question: "How many times do hour & minute hands overlap in 24 hours?",
  //   options: ["22", "24", "44", "48"],
  //   answer: "44"
  // },
  // {
  //   question: "Clock shows 4:20. What’s the angle between the hands?",
  //   options: ["10°", "20°", "30°", "40°"],
  //   answer: "20°"
  // },
  // {
  //   question: "A is taller than B but shorter than C. D is shorter than E but taller than B. E is shorter than C but taller than A. Who is the tallest?",
  //   options: ["A", "B", "C", "E"],
  //   answer: "C"
  // },
  // {
  //   question: "Which key is used to refresh a webpage in most browsers?",
  //   options: ["F2", "F5", "F12", "Ctrl + R"],
  //   answer: "F5"
  // },
  // {
  //   question: "Oxidation number of sulfur in H₂SO₄?",
  //   options: ["+2", "+6", "+4", "+8"],
  //   answer: "+6"
  // },
  // {
  //   question: "Which gas turns lime water milky?",
  //   options: ["CO₂", "SO₂", "O₂", "N₂"],
  //   answer: "CO₂"
  // },

  // // 🔸 Section F: Chemistry & Miscellaneous
  // {
  //   question: "pH value of pure water at 25°C is:",
  //   options: ["6", "7", "8", "9"],
  //   answer: "7"
  // },
  // {
  //   question: "What type of bond is formed by sharing electrons?",
  //   options: ["Ionic bond", "Metallic bond", "Covalent bond", "Hydrogen bond"],
  //   answer: "Covalent bond"
  // },
  // {
  //   question: "The currency of South Korea is:",
  //   options: ["Yen", "Yuan", "Won", "Ringgit"],
  //   answer: "Won"
  // },
  // {
  //   question: "Sensex is related to which stock exchange?",
  //   options: ["NSE", "BSE", "NYSE", "LSE"],
  //   answer: "BSE"
  // },
  // {
  //   question: "The term inflation refers to:",
  //   options: ["Rise in unemployment", "Rise in general price levels", "Decrease in GDP", "Increase in foreign reserves"],
  //   answer: "Rise in general price levels"
  // },
  // {
  //   question: "Which country is India’s largest trading partner (as of 2025)?",
  //   options: ["USA", "UAE", "China", "Germany"],
  //   answer: "USA"
  // },
  // {
  //   question: "The abbreviation MSME stands for:",
  //   options: ["Medium Small Manufacturing Enterprises", "Ministry of Small and Medium Enterprises", "Micro, Small and Medium Enterprises", "Mega, Small and Micro Enterprises"],
  //   answer: "Micro, Small and Medium Enterprises"
  // },
  // {
  //   question: "Primary goal of Corporate Social Responsibility (CSR)?",
  //   options: ["Increase profit", "Marketing", "Social welfare and sustainability", "Tax saving"],
  //   answer: "Social welfare and sustainability"
  // },
  // {
  //   question: "Theme of ‘World Immunization Week 2025’?",
  //   options: ["Vaccines Save Lives", "Immunization for All is Humanly Possible", "Health is a Right", "Protect Every Child"],
  //   answer: "Immunization for All is Humanly Possible"
  // },
  // {
  //   question: "Theme for World Hypertension Day 2025?",
  //   options: ["Prevent Hypertension", "Measure Your Blood Pressure Accurately, Control It, Live Longer", "Health Check for All", "Cardiac Safety Now"],
  //   answer: "Measure Your Blood Pressure Accurately, Control It, Live Longer"
  // }
];

export default quizData;
