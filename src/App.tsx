import { ThemeProvider } from "./ThemeProvider.tsx";
import { ShowTheme } from "./ShowTheme.tsx";
import { ShowAndUpdateTheme } from "./ShowAndUpdateTheme.tsx";
import { PropsWithChildren } from "react";

function Wrapper({ children }: PropsWithChildren) {
  console.log("Wrapper Rendered");
  return children;
}

function App() {
  console.log("App render");
  return (
    <ThemeProvider>
      <Wrapper>
        Component 1:
        <ShowTheme />
        Component 2:
        <ShowAndUpdateTheme />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
