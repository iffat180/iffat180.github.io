import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import GitHub from "./pages/GitHub.jsx";
import CV from "./pages/CV.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/cv" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
