const Example = () => {
  // 練習用
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = 'Hello';
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);
};

export default Example;
