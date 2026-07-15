// src/pages/Service/ServicePage.jsx
import React from "react";
import {
  Globe,
  Smartphone,
  Cloud,
  Router,
  Bot,
  Clapperboard,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building robust, scalable web applications and enterprise portals from the ground up using frameworks like Laravel and Filament.",
    icon: Globe,
    tag: "laravel · filament · react",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Developing high-performance, native-feeling mobile applications for both iOS and Android using Flutter and Dart.",
    icon: Smartphone,
    tag: "flutter · dart",
  },
  {
    title: "Cloud & System Administration",
    description:
      "Managing and deploying cloud infrastructure on AWS, configuring secure Linux servers, and implementing load-balancing solutions.",
    icon: Cloud,
    tag: "aws · linux",
  },
  {
    title: "Network Configuration",
    description:
      "Setting up and troubleshooting complex network environments, including MikroTik routers, VPNs, and secure port forwarding.",
    icon: Router,
    tag: "mikrotik · vpn",
  },
  {
    title: "Bot Automation",
    description:
      "Designing and building automated Telegram bots with API integrations to streamline business operations and user management.",
    icon: Bot,
    tag: "telegram api",
  },
  {
    title: "Video Editing & Multimedia",
    description:
      "Crafting engaging video content and thumbnails for digital platforms and promotional marketing materials.",
    icon: Clapperboard,
    tag: "premiere · thumbnails",
  },
];

const ServicePage = () => {
  return (
    <section id="services" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — matches About page's eyebrow style */}
        <p className="font-mono text-sm text-blue-600 tracking-widest uppercase mb-3">
          // services
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            What I Can Build <br className="hidden md:block" /> For You.
          </h2>
          <p className="text-lg text-slate-600 max-w-md">
            From a custom app built from scratch to cloud infrastructure and
            network setup — here's the full range of what I work on.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, icon: Icon, tag }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-slate-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon size={22} strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {description}
              </p>

              {/* Terminal-style tag, echoes the About page's monospace motif */}
              <div className="pt-4 border-t border-slate-100">
                <span className="font-mono text-xs text-slate-400">
                  <span className="text-blue-600">$</span> {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;