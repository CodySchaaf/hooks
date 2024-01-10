import { useMemo, useState } from "react";
import { MyExpensiveComponent } from "./MyExpensiveComponent.tsx";

function App() {
  const [count, setCount] = useState(0);

  // Config that is a dependency of large portion of the application
  // Your function is creating a new object every render. So every render you
  // get a new prop
  const config = {
    appTitle: "foo",
    appColor: "red",
  };

  // Not saying everything needs this, but if your component is a top level component you should consider it
  // A worse version of this would be to have a dependency array that is missing dependencies
  const badMemoConfig = useMemo(() => ({
    appTitle: "foo",
    appColor: "red",
  }));

  // Also good for complex calculations, filtering, ect
  const memoConfig = useMemo(
    () => ({
      appTitle: "foo",
      appColor: "red",
    }),
    [],
  );

  // NOTE MyExpensiveComponent utilizes React.memo
  // Remember React is very good at what it does. You don't need to do this constantly, but the higher up
  // the tree the more important it is to consider
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h5>No useMemo</h5>
      <MyExpensiveComponent config={config} />
      <h5>Bad useMemo</h5>
      <MyExpensiveComponent config={badMemoConfig} />
      <h5>Good useMemo</h5>
      <MyExpensiveComponent config={memoConfig} />
    </>
  );
}

export default App;
