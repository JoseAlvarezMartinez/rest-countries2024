import { IoMoonOutline } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { useEffect, useState } from "react";
import "./Header.css"
const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 95.29411764705881%)"
    }, [darkMode])
    return (
        <header className="header-container">
            <h1 className={`header-h1 ${darkMode ? "dark-mode-text" : ""}`}>Where in the world?</h1>

            {darkMode ?
                <div onClick={() => setDarkMode(!darkMode)} className="mode-container">
                    <CiSun
                        color="#fff"
                        size={"2.3rem"} />
                    <p className="mode-paragraph dark-mode-text">Dark Mode</p>
                </div>
                :
                <div onClick={() => setDarkMode(!darkMode)} className="mode-container">
                    <IoMoonOutline size={"2rem"} />
                    <p className="mode-paragraph">Dark Mode</p>
                </div>}

        </header >
    )
}

export default Header