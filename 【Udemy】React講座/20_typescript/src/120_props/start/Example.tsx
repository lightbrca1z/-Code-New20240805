import Hello, {Btn} from "./Hello"

const Example = () => {
  // 練習用
  return(
  <>
  <Btn fn={(text) => console.log('Hello ${text}')}></Btn>
  <Hello text="TypeScript">Children</Hello>
  </>
  )
};

export default Example;
