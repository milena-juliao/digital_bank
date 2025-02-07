"use client";
import { useAtom } from "jotai";
import { themeAtom } from "../state/themeAtom";
import { LightTheme, DarkTheme } from "../themes";

const BtnSwitcherTheme: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>{theme === LightTheme ? "🌙" : "☀️"}</button>
  );
};

export default BtnSwitcherTheme;
