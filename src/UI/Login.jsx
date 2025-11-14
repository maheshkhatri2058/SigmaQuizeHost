import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import UserContext from "../userContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [Username, setUsername] = useState("");
  const [AUID, setAUID] = useState("");

  const getinfo = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, Username, AUID }));
    navigate("/quize");
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center">
          
          {/* Left Side - Instructions */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-700 mb-2">Welcome to Coding competititon 2025!</h2>
            <p className="text-xl font-semibold text-red-500 mb-4">Basic Rules</p>
            <ul className="text-base sm:text-lg text-gray-800 list-disc pl-5 space-y-2">
              <li>⏱ You have 25 minutes to complete 25 questions.</li>
              <li>🧭 Close all other browser tabs before starting.</li>
              <li>🚫 Switching tabs will result in auto-termination.</li>
              <li>📵 Do not open any external apps or tools.</li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 bg-white shadow-2xl rounded-2xl p-8">
            <h2 className="text-xl sm:text-2xl text-yellow-600 font-[cursive] font-semibold mb-4 text-center">
              Please enter your details carefully!
            </h2>
            <form onSubmit={getinfo} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Group Name:
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="e.g. TechTussleTeam"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College ID:
                </label>
                <input
                  type="text"
                  name="auid"
                  onChange={(e) => setAUID(e.target.value)}
                  required
                  placeholder="e.g. AU123456"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
              >
                Start The Quiz
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Login;
