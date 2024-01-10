import { useTheme } from "./ThemeProvider.tsx";

export function ShowTheme() {
  const theme = useTheme();
  console.log("ShowTheme Rendered");

  return <div>Is Dark Mode: {theme.darkMode}</div>;
}
