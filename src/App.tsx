import { useMemo, useState } from "react";
import { MyExpensiveComponent } from "./MyExpensiveComponent.tsx";

function App() {
  const [count, setCount] = useState(0);

  const config = {
    appTitle: "foo",
    appColor: "red",
  };

  const badMemoConfig = useMemo(() => ({
    appTitle: "foo",
    appColor: "red",
  }));

  const memoConfig = useMemo(
    () => ({
      appTitle: "foo",
      appColor: "red",
    }),
    [],
  );

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <MyExpensiveComponent config={config} />
      <MyExpensiveComponent config={badMemoConfig} />
      <MyExpensiveComponent config={memoConfig} />
    </>
  );
}

export default App;
