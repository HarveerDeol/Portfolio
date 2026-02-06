import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);

    setIsDarkMode(shouldUseDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);

    if (!storedTheme) {
      localStorage.setItem("theme", shouldUseDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setIsDarkMode(nextTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-black-300" />
      ) : (
        <Moon className="h-6 w-6 text-white-900" />
      )}
    </button>
  );
};
