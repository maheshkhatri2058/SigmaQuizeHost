import React, { useState ,useEffect ,useRef} from 'react';
import quizData from './quizedata';

const Quize = () => {
  const [sec, setSec] = useState(60); // Start from 60 seconds

  const [min, setMin] = useState(30);

  useEffect(() => {
    const min=30;
    const interval = setInterval(() => {
      setSec((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the timer
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Tick every second
    if(sec==60)
    {
      setMin(min-1);
    }

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
   const formRef = useRef(null);
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
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Time's up! Auto-submitting...");
      if (formRef.current) {
        formRef.current.requestSubmit();  // Auto-submit the form
      }
    },180000); // 60 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
        <div className="text-2xl font-bold text-red-600 text-center">
      ⏳ Time Left: {min}:{sec}s
    </div>

    <form ref={formRef} onSubmit={handleSubmit}>
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

    </form>
      

      {score !== null && (
        <div className="mt-6 text-xl font-bold text-green-700">
          Your Score: {score} / {quizData.length}
        </div>
      )}
    </div>
  );
};

export default Quize;
