const Example = () => {
  // 練習用

  function sum1(x:number, y:number){
    return x + y;
  }

  const result1 = sum1(1,2);

  const sum2 = (x:number, y:number) => x + y;
  const result2 = sum2(10,20);
  console.log(result2);

};

export default Example;
