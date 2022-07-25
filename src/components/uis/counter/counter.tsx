import React from "react";

const Counter: React.FC = () => {
  return (
    <div>
      <div className="border-grey-300 border rounded w-fit flex">
        <button className="w-9 h-9 flex items-center justify-center text-grey-400">
          -
        </button>
        <div className="w-9 h-9 flex items-center justify-center text-grey-400">
          1
        </div>
        <button className="w-9 h-9 flex items-center justify-center text-grey-400">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
