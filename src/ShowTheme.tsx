import { useTheme } from "./ThemeProvider.tsx";

export function ShowTheme() {
  const theme = useTheme();

  return <div>Is Dark Mode: {theme.darkMode}</div>;
}
