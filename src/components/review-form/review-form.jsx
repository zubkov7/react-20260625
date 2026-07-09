import { useEffect, useRef } from "react";
import { Button } from "../button/button";
import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = ({ addReview }) => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();

  const { text, rating } = form;

  // { current: null }
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  // useEffect(() => {
  //   intervalRef.current = setInterval(incrementRating, 1000);

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [incrementRating]);

  return (
    <>
      <h3>Review Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>Text</span>
          <input
            // ref={(element) => {
            //   console.log(element);
            //   element.focus();
            // }}
            ref={inputRef}
            type='text'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={() => inputRef.current?.focus()}>focus</button>
        </div>

        <Counter
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />
        <button onClick={() => clearInterval(intervalRef.current)}>
          stop interval
        </button>

        <Button title='Clear' onClick={clear} />
      </form>
    </>
  );
};
