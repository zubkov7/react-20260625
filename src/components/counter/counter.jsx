import { Button } from "../button/button";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button title='+' onClick={increment} size='400' />
      <span>{value}</span>
      <Button title='-' onClick={decrement} size='400' />
    </div>
  );
};
