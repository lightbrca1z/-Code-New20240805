import { memo } from "react";

function areEqual(prevProps, nextProps){
  if(prevProps.countB !== nextProps.countB){
    return false;
  }else{
    return true;
  }
}

const Child = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");
  return (
    <div className="child">
      <h3>子コンポーネント領域</h3>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
}, areEqual);

export default Child;
