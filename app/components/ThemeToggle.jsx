"use client"
import { useContext } from "react";
import { ThemeContext } from "@/app/components/context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 transition duration-300 text-slate-500 dark:text-white cursor-pointer">
            {theme === "light" ? <FaRegMoon /> : <FiSun />}
        </button>
    );
}

export default ThemeToggle
