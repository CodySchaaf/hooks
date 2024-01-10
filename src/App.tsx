import { ThemeProvider } from "./ThemeProvider.tsx";
import { ShowTheme } from "./ShowTheme.tsx";
import { ShowAndUpdateTheme } from "./ShowAndUpdateTheme.tsx";

function App() {
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
