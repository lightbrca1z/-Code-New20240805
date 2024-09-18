import { useState, lazy, Suspense, startTransition } from "react";

const LazyComponentA = lazy(() => import('./components/ComponentA'))
const LazyComponentB = lazy(() => import('./components/ComponentB'))
const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>ComponentA</button>
      {compA ? <LazyComponentA/> : <LazyComponentB/>}
      <Suspense fallback={<div>Loading!!!!</div>}></Suspense>
    </>
  );
};

export default Example;
