const quizData = [
  // 🔸 Section A: Python Programming (10 Questions)
  {
    question: "Who created the Python programming language?",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "Guido van Rossum"
  },
  {
    question: "What will be the output of print(2 ** 3 ** 2)?",
    options: ["512", "64", "256", "36"],
    answer: "512"
  },
  {
    question: "Which of the following is a correct way to create a list in Python?",
    options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
    answer: "list = [1, 2, 3]"
  },
  {
    question: "What is the output of this code?\na = [1, 2, 3]\nprint(a[3:])",
    options: ["[3]", "[]", "Error", "[1, 2, 3]"],
    answer: "[]"
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["def", "function", "define", "fun"],
    answer: "def"
  },
  {
    question: "What is the output of this Python code?\nx = 10\nx += x - 5\nprint(x)",
    options: ["5", "10", "15", "20"],
    answer: "15"
  },
  {
    question: "What is the output of this code?\nprint(bool('False'))",
    options: ["False", "True", "None", "Error"],
    answer: "True"
  },
  {
    question: "Which of these is a mutable data type in Python?",
    options: ["tuple", "str", "list", "int"],
    answer: "list"
  },
  {
    question: "What does len('Python') return?",
    options: ["5", "6", "7", "Error"],
    answer: "6"
  },
  {
    question: "Which of the following is used to handle exceptions in Python?",
    options: ["try/except", "do/catch", "if/else", "check/handle"],
    answer: "try/except"
  },

  // 🔸 Section B: Indian Cricket & IPL (10 Questions)
  {
    question: "Who hit 6 sixes in an over in T20I for India?",
    options: ["MS Dhoni", "Yuvraj Singh", "Rohit Sharma", "Virat Kohli"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which Indian cricketer is nicknamed 'Hitman'?",
    options: ["Rishabh Pant", "Virat Kohli", "Rohit Sharma", "Shikhar Dhawan"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which IPL team has won the most titles (as of 2025)?",
    options: ["Mumbai Indians", "Chennai Super Kings", "Gujarat Titans", "Kolkata Knight Riders"],
    answer: "Mumbai Indians"
  },
  {
    question: "Who won the Purple Cap in IPL 2023?",
    options: ["Mohammed Shami", "Arshdeep Singh", "Yuzvendra Chahal", "Rashid Khan"],
    answer: "Mohammed Shami"
  },
  {
    question: "What is the maximum number of overs a bowler can bowl in a T20 match?",
    options: ["4", "5", "10", "6"],
    answer: "4"
  },
  {
    question: "Which Indian cricketer has a double century in T20 cricket?",
    options: ["Shubman Gill", "KL Rahul", "No Indian has", "Rohit Sharma"],
    answer: "No Indian has"
  },
  {
    question: "In which year was the first IPL played?",
    options: ["2006", "2007", "2008", "2009"],
    answer: "2008"
  },
  {
    question: "Which stadium is known as the 'Home of Indian Cricket'?",
    options: ["Eden Gardens", "Wankhede Stadium", "Arun Jaitley Stadium", "M. A. Chidambaram Stadium"],
    answer: "Eden Gardens"
  },
  {
    question: "Which cricketer is famous for the helicopter shot?",
    options: ["Rishabh Pant", "MS Dhoni", "Hardik Pandya", "Sanju Samson"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the current BCCI president (as of 2025)?",
    options: ["Jay Shah", "Roger Binny", "Sourav Ganguly", "Anurag Thakur"],
    answer: "Roger Binny"
  },

  // 🔸 Section C: IQ & Logical Reasoning (10 Questions)
  {
    question: "Which number comes next: 3, 6, 12, 24, ?",
    options: ["36", "48", "46", "50"],
    answer: "48"
  },
  {
    question: "Find the odd one out:",
    options: ["2", "4", "8", "9"],
    answer: "9"
  },
  {
    question: "Which direction is opposite to North-East?",
    options: ["South-West", "North-West", "South-East", "East"],
    answer: "South-West"
  },
  {
    question: "If DOG = 26, what is CAT = ?",
    options: ["24", "27", "25", "23"],
    answer: "24"
  },
  {
    question: "If it takes 3 people 3 days to complete a task, how long will 6 people take?",
    options: ["1.5 days", "3 days", "6 days", "2 days"],
    answer: "1.5 days"
  },
  {
    question: "What is the next letter in this pattern? A, C, F, J, O, ?",
    options: ["R", "U", "T", "S"],
    answer: "U"
  },
  {
    question: "What comes next: 1, 4, 9, 16, ?",
    options: ["20", "23", "25", "36"],
    answer: "25"
  },
  {
    question: "If 1 = 5, 2 = 25, 3 = 125, then 4 = ?",
    options: ["625", "100", "105", "225"],
    answer: "625"
  },
  {
    question: "Which shape has the most number of sides?",
    options: ["Hexagon", "Pentagon", "Octagon", "Decagon"],
    answer: "Decagon"
  },
  {
    question: "If in a code: CAR = DBS, then BAT = ?",
    options: ["CBV", "CBW", "CAU", "DBU"],
    answer: "CBW"
  }
];

export default quizData;
