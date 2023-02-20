import Logo from "../assets/logo.png"
import React, { useEffect, useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium")

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme)
    }, [theme])
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate logo" />
                <span>TaskMate</span>
            </div>
            <div className="themeSelector">
                <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("gradientone")} className={theme === "gradientone" ? "gradientone activeTheme" : "gradientone"}></span>
                <span onClick={() => setTheme("gradienttwo")} className={theme === "gradienttwo" ? "gradienttwo activeTheme" : "gradienttwo"}></span>
                <span onClick={() => setTheme("gradientthree")} className={theme === "gradientthree" ? "gradientthree activeTheme" : "gradientthree"}></span>
            </div>
        </header>
    )
}