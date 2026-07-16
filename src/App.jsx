// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutpage from "./pages/About/Aboutpage";
import ContactPage from "./pages/Contact/ContactPage";
import ServicePage from "./pages/Service/ServicePage";
import ProjectPage from "./pages/Projects/ProjectPage";
import Navbar from "./components/Navbar";
import Aiservices from "./pages/Aiservices/Aiservices";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/ai-services" element={<Aiservices />} />
      </Routes>
    </BrowserRouter>
  );
}