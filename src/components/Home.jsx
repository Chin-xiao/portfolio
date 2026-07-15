// src/components/Home.jsx
import React from "react";
import assets from "../assets/ahseven.jpg";
import {NavLink}  from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue font-sans flex flex-col relative overflow-hidden">
      {/* Main Hero Section */}
      <main className="flex-grow flex items-center px-8 md:px-16 relative z-10 mt-10 md:mt-0">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
          <div className="w-72 h-[500px] bg-blue-900 rounded-[100px] blur-[100px]"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
          <div className="max-w-4xl z-10">
            <p className="text-blue-600 font-semibold tracking-[0.2em] text-sm md:text-base mb-6 uppercase">
              Modern Web & Mobile Solutions
            </p>
            <h1 className="text-6xl md:text-[120px] font-extrabold leading-none tracking-tighter mb-8">
              FULL-STACK <br /> DEVELOPER
            </h1>
            <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed">
              Computer Science student at RUPP specializing in building
              cross-platform mobile apps with Flutter and robust web
              architectures using Laravel and React.
            </p>
            <NavLink to="/contact">
              <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-3 hover:bg-blue-500 transition" >
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                  &gt;
                </span>
                Contact Me
              </button>
            </NavLink>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img
              className="w-110 h-110 md:w-110 md:h-110 rounded-full border-2 border-blue-600 object-cover shadow-lg"
              src={assets}
              alt="Profile"
            />
          </div>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-5">
          <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition">X</a>
          <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold transition shadow-[0_0_15px_rgba(52,211,153,0.5)]">in</a>
          <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition">Be</a>
          <a href="#" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition">P</a>
        </div>
      </main>

      <div className="border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-16 py-10 bg-white/50 backdrop-blur-sm z-20">
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bold text-2xl">100%</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bold text-2xl">AWS</div>
            <div className="text-gray-400 text-sm">Cloud Ready</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bold text-2xl">15+</div>
            <div className="text-gray-400 text-sm">Successful Projects</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bold text-2xl">99%</div>
            <div className="text-gray-400 text-sm">Uptime Target</div>
          </div>
        </div>
      </div>
    </div>
  );
}