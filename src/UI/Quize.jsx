import { React, useState, useEffect, useRef, useContext } from 'react';
import quizData from './quizedata';
import UserContext from '../userContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Timeshow from './Timeshow';

const Quize = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const formRef = useRef(null);

  const handleOptionChange = (questionIndex, option) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: option
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setUser([]);

    const userData = {
      Username: user.Username,
      AUID: user.AUID,
      Score: newScore,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/sendinfo`, userData);
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
    }, 50 * 60 * 1000); // 50 minutes

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleBlur = () => {
      alert("You switched tabs or minimized the window!");
    };
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        alert("You exited fullscreen. Please return immediately.");
      }
    };
    const disableRightClick = (e) => e.preventDefault();
    const disableKeys = (e) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
        alert("Dev tools are disabled.");
      }
    };

    window.addEventListener('blur', handleBlur);
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeys);

    return () => {
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);

  return (
    <div className="quize max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Timeshow />

      <form ref={formRef} onSubmit={handleSubmit}>
        {quizData.map((q, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-base sm:text-lg font-semibold mb-3">
              {index + 1}. {q.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((opt, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={opt}
                    checked={userAnswers[index] === opt}
                    onChange={() => handleOptionChange(index, opt)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quize;
