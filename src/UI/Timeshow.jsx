import React, { useEffect, useState } from 'react';

const Timeshow = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes = 1800 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-3xl font-bold text-red-600">
      Time Left: {formatTime()}
    </div>
  );
};

export default Timeshow;
