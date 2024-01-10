import { ThemeProvider } from "./ThemeProvider.tsx";
import { ShowTheme } from "./ShowTheme.tsx";
import { ShowAndUpdateTheme } from "./ShowAndUpdateTheme.tsx";
import { useEffect, useRef, useState } from "react";

function App() {
  // GOOD ✅has something that can be undone
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  // GOOD ✅ connecting to non-react code
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  // A little bad 🔴 = Fetching data with Effects
  // we have better ways of doing this => useSwr
  useEffect(() => {
    async function fn() {
      setState(await fetch(""));
    }

    fn();
  }, []);

  // Bad 🔴- Computing values based on props, or resetting state

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  // GOOD
  const setFullName = firstName + lastName;

  // Bad 🔴 - reactive effects

  // 🔴 Avoid: Event-specific logic inside an Effect
  const [jsonToSubmit, setJsonToSubmit] = useState(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  }

  // Good ✅

  function handleSubmit(e) {
    e.preventDefault();
    // ✅ Good: Event-specific logic is in the event handler
    post("/api/register", { firstName, lastName });
  }

  // A little BAD 🔴 - something that should only run once

  useEffect(() => {
    analytics.trigger("pageViewed");
  }, []);

  // Better ✅

  const ref = useRef(false);

  if (!ref.current) {
    analytics.trigger("pageViewed");
    ref.current = true;
  }

  // Best ✅

  useRunOnce(() => {
    analytics.trigger("pageViewed");
  });

  return (
    <ThemeProvider>
      Component 1:
      <ShowTheme />
      Component 2:
      <ShowAndUpdateTheme />
    </ThemeProvider>
  );
}

export default App;
