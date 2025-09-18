import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Team from "./pages/Team.jsx";
import Service from "./pages/Service.jsx";
import Projects from "./pages/Projects.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
