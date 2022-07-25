import React, { memo, useCallback } from "react";

type TCounterProps = {
  counter: number;
  setCounter: (counter: number) => void;
};

const Counter: React.FC<TCounterProps> = ({ counter, setCounter }) => {
  const onClickCounter = useCallback(
    (count: number) => {
      if (count === 0) {
        return;
      }

      setCounter(count);
    },
    [setCounter]
  );

  return (
    <div>
      <div className="border-grey-300 border rounded w-fit flex">
        <button
          className="w-9 h-9 flex items-center justify-center text-grey-400"
          onClick={() => onClickCounter(counter - 1)}
        >
          -
        </button>
        <div className="w-9 h-9 flex items-center justify-center text-grey-400">
          {counter}
        </div>
        <button
          className="w-9 h-9 flex items-center justify-center text-grey-400"
          onClick={() => onClickCounter(counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default memo(Counter);
