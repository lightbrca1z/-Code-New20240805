const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
      return new Array(times).fill(value);
  } 
  
  const repeat = <T>(value:T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  const numArry = repeat<number>(10,3);
  console.log(numArry);
  
  const strArry = repeat<string>("hello",3);
  console.log(strArry);
  
  const boolArry = repeat<boolean>(true,3);
  console.log(numArry);
  

  // strArry = repeatStr("hello", 3);
  // console.log(strArry);

  
};

export default Example;
