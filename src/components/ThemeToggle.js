import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all hover:scale-110"
    >
      {theme === "light" ? (
        <Moon size={22} className="text-gray-900" />
      ) : (
        <Sun size={22} className="text-yellow-300" />
      )}
    </button>
  );
}
