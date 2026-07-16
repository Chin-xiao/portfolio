// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-5 py-1.5 cursor-pointer transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-black hover:text-white hover:bg-blue-400"
    }`;

  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 z-20">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 text-black rounded-full flex items-center justify-center font-bold">
          KS
        </div>
        <span className="font-bold text-xl tracking-wider">KHENG</span>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact Me
          </NavLink>
        </li>
      </ul>

      <NavLink
        to="/download-cv"
        className="hidden md:flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition group"
      >
        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition">
          &gt;
        </span>
        AI Services
      </NavLink>
    </nav>
  );
}