import React from "react";
import { useCounter } from "../redux";

export const Counter: React.FC = () => {
  const { count, increment, decrement, clear } = useCounter();
  return (
    <div>
      Counter with slice
      <button onClick={decrement}>Decrement</button>
      {count}
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={clear}>Clear / Reset</button>
    </div>
  );
};
