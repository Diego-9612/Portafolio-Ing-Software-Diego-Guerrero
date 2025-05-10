"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        setDarkMode(theme === "dark");
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, isMounted]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useDarkMode = () => useContext(ThemeContext);
