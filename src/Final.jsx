import React, { useState } from 'react';

const Final = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-xs mx-auto my-10 bg-white border border-gray-200 rounded-xl shadow-md font-sans">
      <h2 className="text-xl font-semibold text-gray-700">Counter</h2>
      
      <div className="text-5xl font-bold text-gray-900 my-2">
        {count}
      </div>
         <button 
          onClick={handleIncrease} 
          className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 active:scale-95 transition cursor-pointer"
        >
          Increase
        </button>
      
      
        
      
        
     


        <div className="flex gap-2.5">
        <button 
          onClick={handleDecrease} 
          className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 active:scale-95 transition cursor-pointer"
        >
          Decrease
        </button>




          <button 
          onClick={handleReset} 
          className="px-4 py-2 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600 active:scale-95 transition cursor-pointer"
        >
          Reset
        </button>
      </div>
      
    </div>
  );
};

export default Final;