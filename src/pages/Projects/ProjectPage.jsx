// src/pages/Projects/ProjectPage.jsx
import React, { useState } from "react";
import { ArrowUpRight, Link2, Star } from "lucide-react";

const ProjectPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Web Apps",
    "Mobile",
    "Cloud & DevOps",
    "Bots & Automation",
  ];

  const projects = [
    {
      title: "Neaktep Enterprise Suite & Booking Portal",
      category: "Web Apps",
      description:
        "A comprehensive enterprise management suite and booking portal built for high scalability and seamless user experiences.",
      techStack: ["Laravel", "PHP", "Filament", "MySQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Phumyerng Telegram Business Bot",
      category: "Bots & Automation",
      description:
        "An automated Telegram bot designed to help local business owners streamline order tracking, manage product categories, and automate daily operations.",
      techStack: ["PHP", "Telegram API", "Laravel", "Webhook Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Cross-Platform Hotel Booking App",
      category: "Mobile",
      description:
        "A native-feeling mobile application featuring real-time room availability, user authentication, and responsive UI layouts for both iOS and Android.",
      techStack: ["Flutter", "Dart", "REST API", "State Management"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "CheckinMe Field Sales Tracking System",
      category: "Web Apps",
      description:
        "A digital tracking and management solution tailored for Cambodian field sales teams to monitor active check-ins and operational metrics.",
      techStack: ["Laravel", "Filament", "Database Architecture", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "High-Availability Load Balancing Architecture",
      category: "Cloud & DevOps",
      description:
        "Designed and deployed a local three-machine load balancing cluster utilizing CentOS Stream 9 and HAProxy to ensure zero-downtime traffic distribution.",
      techStack: ["CentOS", "HAProxy", "Linux Admin", "VMware", "Networking"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "AWS Cloud Infrastructure Deployment",
      category: "Cloud & DevOps",
      description:
        "Configured secure, highly available cloud environments using custom VPCs, IAM policies, EC2 instances, and S3 storage buckets.",
      techStack: ["AWS EC2", "AWS VPC", "IAM", "S3", "Cloud Security"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — matches About / Services eyebrow style */}
        <p className="font-mono text-sm text-blue-600 tracking-widest uppercase mb-3">
          // projects
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Things I've <br className="hidden md:block" /> Shipped.
          </h2>
          <p className="text-lg text-slate-600 max-w-md">
            A showcase of recent work across full-stack development, mobile
            apps, bot automation, and cloud infrastructure.
          </p>
        </div>

        {/* Filter Tabs — terminal-style, echoes $ tag motif */}
        <div className="flex flex-wrap gap-2 mb-12 font-mono text-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {activeFilter === category ? "> " : ""}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              {/* Card body */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                      <Star size={12} fill="currentColor" strokeWidth={0} />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack as a terminal-style tag line */}
                <p className="font-mono text-xs text-slate-400 leading-relaxed">
                  <span className="text-blue-600">$</span>{" "}
                  {project.techStack.join(" · ")}
                </p>
              </div>

              {/* Card footer actions */}
              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  Source
                  <Link2 size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state — shown if a filter has no matches */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-slate-400">
            <span className="text-blue-600">$</span> no projects found in this
            category yet
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
