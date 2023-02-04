import Logo from "../assets/logo.png"
import React from "react";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate logo" />
                <span>TaskMate</span>
            </div>
            <div className="themeSelector">
                <span className="light"></span>
                <span className="medium activeTheme"></span>
                <span className="dark"></span>
                <span className="gradientone"></span>
                <span className="gradienttwo"></span>
                <span className="gradientthree"></span>
            </div>
        </header>
    )
}