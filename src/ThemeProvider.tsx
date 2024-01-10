import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type ThemeType = {
  darkMode: "on" | "off";
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a theme provider");
  }

  return theme;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState("off" as ThemeType["darkMode"]);

  const theme = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => {
        setDarkMode(darkMode === "on" ? "off" : "on"); // could be optimized by using internal function
      },
    }),
    [darkMode],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
