"use client";
import { useDarkMode } from "@/context/ThemeContext";

function DarkModeButton(){
    const {darkMode, setDarkMode} = useDarkMode();

    const DarkMode = () =>{
        setDarkMode(!darkMode)
    }
    
    return(
        <button onClick={DarkMode} className="px-6 py-2 bg-gray-200 dark:bg-dark dark:text-white cursor-pointer rounded-md transition-all">
            { darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
}

export {DarkModeButton};