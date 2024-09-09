// POINT Reactでの差分検知
import { useState } from "react";
import "./Example.css";

const Example = () => {
  console.log("render");
  
  const [countA, setCountA] = useState({
    val: 0
  });

  const obj1 = {val:0};
  const obj3 = {val:0};
  const obj2 = {...obj1};
  
  const isSame1 = Object.is(obj1,obj3);
  const isSameEqual = "" === false;
  console.log("a: " + isSame1);
  console.log("b: " + isSameEqual);

  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            setCountA(prev => {
              const newState = {...prev};
              // prev.val = 1;
              return newState;
            });
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA.val}</p>
      </div>
    </div>
  );
};

export default Example;
