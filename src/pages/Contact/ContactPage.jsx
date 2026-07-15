// src/pages/Contact/ContactPage.jsx
import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const GithubIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a2.99 2.99 0 00-2.105-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.393.524A2.99 2.99 0 00.502 6.186 31.26 31.26 0 000 12a31.26 31.26 0 00.502 5.814 2.99 2.99 0 002.105 2.117c1.888.524 9.393.524 9.393.524s7.505 0 9.393-.524a2.99 2.99 0 002.105-2.117A31.26 31.26 0 0024 12a31.26 31.26 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      // Response had no JSON body (e.g. route not found locally)
      console.error("No JSON body in response, status:", res.status);
    }

    if (!res.ok) {
      console.error("Server responded with error:", res.status, data);
      throw new Error(data.error || `Request failed (${res.status})`);
    }

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-blue-600 tracking-widest uppercase mb-3">
          // contact
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's Build <br className="hidden md:block" /> Something.
          </h2>
          <div className="flex flex-col gap-3 max-w-md">
            <p className="text-lg text-slate-600">
              Whether it's a full-stack portal, a bot integration, or just a
              collaboration — drop me a message.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-green-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              status: available for new projects
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">
                new-message.form
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-slate-500"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="ah seven"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-slate-500"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="ahseven@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="font-mono text-xs text-slate-500"
                >
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-xs text-slate-500"
                >
                  message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 text-white font-bold text-base py-3.5 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-600 font-mono">
                  <CheckCircle2 size={16} />
                  Message sent — I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-600 font-mono">
                  <XCircle size={16} />
                  Something went wrong. Try again, or email me directly.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href="mailto:sokhengofficial321@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Email
                </h4>
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  sokhengofficial321@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://t.me/chin111"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Send size={18} />
              </div>
              <div>
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Telegram
                </h4>
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  @chin111
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-200">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  Location
                </h4>
                <p className="text-sm font-bold text-slate-900">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="mt-2 pt-5 border-t border-slate-200 flex items-center justify-between">
              <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                Follow my work
              </h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
                >
                  <GithubIcon />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
