import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>Toggle</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // console.log('init');
    let IntervalId = null;
    IntervalId = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(IntervalId);
      console.log('end');
    }
  }, [])
  
  useEffect(() => {
    console.log('updated');
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)

    return () => {
      console.log('update end');
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
