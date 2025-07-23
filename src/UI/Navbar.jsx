import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <h2 className="text-xl font-bold text-orange-400">TECHTUSSLE-2025</h2>
        <h2 className="text-base sm:text-lg text-white font-bold font-[cursive] text-center sm:text-right">
          MASTER OF COMPUTER APPLICATION
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
