import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
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
      <p>Developed With Love❤️</p>
    </footer>
  );
}
