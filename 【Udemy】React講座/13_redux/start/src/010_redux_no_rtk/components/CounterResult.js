import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux";

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(state => state);
  return <h3>{state}</h3>;1
};1

export default CounterResult;