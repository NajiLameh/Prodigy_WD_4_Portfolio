import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("theme"));
  };

  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setShowModal(true)}
      />
      <div />
      <nav>
        <menu className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </menu>
      </nav>
      <button className="theme flex" onClick={handleThemeChange}>
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <menu className="modal ">
            <li>
              <button
                className="icon-clear"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#about" onClick={() => setShowModal(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowModal(false)}>
                Contact
              </a>
            </li>
          </menu>
        </div>
      )}
    </header>
  );
}
