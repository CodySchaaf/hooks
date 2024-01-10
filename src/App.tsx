import { useCallback, useState } from "react";
import { MyExpensiveComponent } from "./MyExpensiveComponent.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const callback = () => {
    console.log("veryBadUseCallback", count);
  };

  const badUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  });

  const veryBadUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  }, []);

  const goodUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  }, [count]);

  return (
    <>
      Count1: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      Count2: {count2}
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Increment Count</button>
      <MyExpensiveComponent onClick={callback} />
      <MyExpensiveComponent onClick={badUseCallback} />
      <MyExpensiveComponent onClick={veryBadUseCallback} />
      <MyExpensiveComponent onClick={goodUseCallback} />
    </>
  );
}

export default App;
