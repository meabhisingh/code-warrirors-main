"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

const switchTheme = (theme: ThemeType) => {
  return theme === "light" ? "dark" : "light";
};

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(switchTheme(theme)),
  };
};

export { ThemeProvider, useTheme };
