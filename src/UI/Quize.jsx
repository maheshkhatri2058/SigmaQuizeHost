import {React, useState ,useEffect ,useRef,useContext} from 'react';
import quizData from './quizedata';
import UserContext from '../userContext';
import { useNavigate ,} from 'react-router-dom';
import axios from "axios";


const Quize = () => {
    const navigate = useNavigate();
  
  const { user, setUser } = useContext(UserContext);
  const [score, setScore] = useState(0);
  const [sec, setSec] = useState(60); 
  const [min, setMin] = useState(30);

  useEffect(() => {
    const min=30;
    const interval = setInterval(() => {
      setSec((prev) => {
        if (prev <= 1) {
          clearInterval(interval); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000); 
    if(sec==0)
    {
      setMin(min-1);
    }

    return () => clearInterval(interval);
  }, []);
  const [userAnswers, setUserAnswers] = useState({});
   const formRef = useRef(null);
  const handleOptionChange = (questionIndex, option) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: option
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setUser([])
    const userData = {
      Username: user.Username,
      AUID: user.AUID,
      Score: newScore,
    };
     try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/sendinfo`, userData);
      alert("Score submitted!");
    } catch (err) {
      console.error(err);
      alert("Error submitting score");
    }
  console.log(userData);
  navigate('/');

  };
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Time's up! Auto-submitting...");
      if (formRef.current) {
        formRef.current.requestSubmit(); 
      }
    },180000);

    return () => clearTimeout(timer);
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
  
    </div>
  );
};

export default Quize;
