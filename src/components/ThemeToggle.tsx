import React from "react";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
      onClick={toggleDarkMode}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
