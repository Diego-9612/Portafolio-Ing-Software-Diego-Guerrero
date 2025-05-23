"use client";
import { useDarkMode } from "@/context/ThemeContext";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

function DarkModeButton() {
    const { darkMode, setDarkMode } = useDarkMode();

    const DarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={DarkMode} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-white to-blue-medium rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
            <div className="cursor-pointer relative rounded-xl bg-bg-dark/60 backdrop-blur-xl p-2 border border-blue-medium/20 group-hover:border-white/20 transition-all duration-300">
                {darkMode ? (
                    <GoSun className="w-4 h-4 text-blue-medium/60 group-hover:text-white transition-colors" />
                ) : (
                    <IoMoonOutline className="w-4 h-4 text-blue-medium/60 group-hover:text-white transition-colors" />
                )}
            </div>
        </button>

    );
}

export { DarkModeButton };