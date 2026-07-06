import { useEffect } from "react";
import { useCount } from "./use-counter";

const ANALYTICS_URL = "";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  // useEffect(() => {
  //   console.log("mount");
  // }, []);

  // console.log("before effect");

  // useEffect(() => {
  //   console.log("effect: ", value);

  //   return () => {
  //     console.log("cleanup: ", value);
  //   };
  // }, [value]);

  // useEffect(() => {
  //   fetch(ANALYTICS_URL);
  // }, []);

  // console.log("after effect");

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
