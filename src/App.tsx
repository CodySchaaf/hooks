import { useCallback, useState } from "react";
import { MyExpensiveComponent } from "./MyExpensiveComponent.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Tradition callback
  const callback = () => {
    console.log("veryBadUseCallback", count);
  };

  // Not doing anything
  const badUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  });

  // Missing its dependency array
  const veryBadUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  }, []);

  const goodUseCallback = useCallback(() => {
    console.log("veryBadUseCallback", count);
  }, [count]);

  // Note MyExpensiveComponent utilizes React.memo
  return (
    <>
      <h5>Dependant Variable</h5>
      Count1: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h5>Non-dependant Variable</h5>
      Count2: {count2}
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Increment Count</button>
      <h5>Tradition callback</h5>
      <MyExpensiveComponent onClick={callback} />
      <h5>UseCallback not doing anything</h5>
      <MyExpensiveComponent onClick={badUseCallback} />
      <h5>Missing its dependency array</h5>
      <MyExpensiveComponent onClick={veryBadUseCallback} />
      <h5>Good!!</h5>
      <MyExpensiveComponent onClick={goodUseCallback} />
    </>
  );
}

export default App;
