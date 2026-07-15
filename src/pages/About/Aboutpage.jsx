// src/pages/About/Aboutpage.jsx
import React from "react";
import { Code2, Server, Smartphone, Cloud } from "lucide-react";
import assets from "../../assets/khenglogo.PNG";

const stack = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Laravel", "PHP", "Filament"],
  },
  {
    label: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart"],
  },
  {
    label: "Infra & Tools",
    icon: Cloud,
    items: ["AWS", "Network Admin", "Video Editing"],
  },
];

const Aboutpage = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900">
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + Heading */}
        <p className="font-mono text-sm text-blue-600 tracking-widest uppercase mb-3">
          // about
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-14">
          Hi, I'm Kheang Sokheng.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: photo */}
          <div className="lg:col-span-2 flex lg:justify-start justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-600 translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={assets}
                  alt="Kheang Sokheng"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: terminal bio card */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 shadow-lg overflow-hidden bg-slate-950">
              {/* window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-400">
                  about.sh
                </span>
              </div>

              {/* terminal body */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-slate-500">
                  <span className="text-green-400">kheang@rupp</span>
                  <span className="text-slate-500">:~$</span> whoami
                </p>
                <p className="text-slate-200 mt-1 mb-4">
                  Full-stack web & mobile developer, CS student at RUPP
                </p>

                <p className="text-slate-500">
                  <span className="text-green-400">kheang@rupp</span>
                  <span className="text-slate-500">:~$</span> cat bio.txt
                </p>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Building scalable, end-to-end digital solutions is what
                  drives me — from Laravel and Filament backends to
                  cross-platform Flutter apps. I manage AWS infrastructure
                  and network systems to keep everything running securely,
                  and edit video on the side when I want to build something
                  visual instead of logical.
                </p>

                <p className="mt-4 text-slate-500">
                  <span className="text-green-400">kheang@rupp</span>
                  <span className="text-slate-500">:~$</span>{" "}
                  <span className="text-slate-200">
                    open-to-work --role=fullstack
                  </span>
                  <span className="cursor-blink text-blue-400">▍</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stack layers */}
        <div className="mt-20">
          <h4 className="font-mono text-sm text-slate-500 tracking-widest uppercase mb-6">
            /* tech stack, by layer */
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map(({ label, icon: Icon, items }) => (
              <div
                key={label}
                className="group rounded-xl border border-slate-200 p-6 hover:border-blue-600 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h5 className="font-bold text-slate-900 mb-3">{label}</h5>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;