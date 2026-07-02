import { useState } from "react";

export const Counter = () => {
  //   console.log("render");
  //   const [count, setCount] = useState(0);
  const [count, setCount] = useState({ value: 0 });

  //   const doubledCount = count * 2;

  return (
    <div>
      <button
        onClick={() => {
          //   setCount(count + 1);
          setCount({ ...count, value: count.value + 1 });
        }}
      >
        increment
      </button>
      <div>{count.value}</div>
      <button
        onClick={() => {
          //   setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};
