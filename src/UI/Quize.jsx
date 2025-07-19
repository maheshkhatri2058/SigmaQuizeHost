import React, { useState } from 'react';
import quizData from './quizedata';
const Quize = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const handleOptionChange = (questionIndex, option) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: option
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    if(score>=20)
    {
      alert("Congratulations, you have passed the quiz with a score of "+newScore);
    }
    else if(score<20&&score>=10)
    {
      alert("You have passed the quiz with a score of "+newScore);
    
  }
  else
  {
    alert("Sorry, you have failed the quiz with a score of "+newScore);
  }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {quizData.map((q, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            {index + 1}. {q.question}
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`q${index}`}
                  value={opt}
                  checked={userAnswers[index] === opt}
                  onChange={() => handleOptionChange(index, opt)}
                  className="accent-blue-600"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {score !== null && (
        <div className="mt-6 text-xl font-bold text-green-700">
          Your Score: {score} / {quizData.length}
        </div>
      )}
    </div>
  );
};

export default Quize;
