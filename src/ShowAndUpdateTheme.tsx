import { useTheme } from "./ThemeProvider.tsx";

export function ShowAndUpdateTheme() {
  const theme = useTheme();

  return (
    <div>
      <div>Is Dark Mode: {theme.darkMode}</div>
      <button onClick={theme.toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
