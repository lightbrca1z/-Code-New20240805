import { useReducer, useState } from "react";

const Example = () => {
  
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev,action) => {
    if(action === '+'){
      return ++prev;
  }else if(action === '-'){
      return --prev;
  }
  },0);

  const countUp = () => {
    setState((prev) => ++prev);
  }

  const rcountUp = () => {
    dispatch('+');
  }
  
  const rcountDown = () => {
    dispatch('-');
  }

  return (
    <>
      <h3>useState</h3>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>

      <h3>useReducer</h3>
      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
