import Container from "../components/Container.jsx";
import iffat from "../assets/iffat-1.png";

export default function About() {
  return (
    <section className="space-y-8">
<div>
        <h1 className="text-3xl font-bold tracking-tight">Iffat Mohamed Ayub</h1>
        <p className="text-sm text-gray-400 mt-1">
          M.Sc. Software Engineering | Cleveland State University | Full-Stack Developer
        </p>
      </div>
      
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="leading-7 text-gray-300">
              Hi! I’m Iffat Mohamed Ayub, a <strong>full-stack web developer</strong> focused on the
              <strong> MERN stack</strong> — React, Node.js, Express, Tailwind CSS, and MongoDB. I like
              building clean, responsive UIs and pairing them with simple, well-structured REST APIs.
            </p>

            <p className="leading-7 text-gray-300 mt-3">
              I enjoy taking projects end-to-end: React + Tailwind on the front-end, Express routes and
              controllers on the back-end, and MongoDB for data models. My goals are maintainable code,
              fast feedback, and a smooth user experience.
            </p>

            <p className="leading-7 text-gray-300 mt-3">
              Outside of coding, I explore 3D modeling in <strong>Blender</strong>.
            </p>

            <ul className="mt-4 list-disc pl-5 text-gray-400 space-y-1">
              <li>Frontend: React (Vite) + Tailwind CSS</li>
              <li>Backend: Node.js + Express (REST)</li>
              <li>Database: MongoDB (Mongoose)</li>
            </ul>
          </div>

          <img
            src={iffat}
            alt="Iffat Mohamed Ayub"
            className="w-50 h-50 rounded-sm object-cover ring-1 ring-white/10 hidden md:block"
          />
        </div>
      

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Latest posts</h2>
        <p className="text-sm text-gray-400">Head to the Blog page to read more.</p>
      </div>
    </section>
  );
}
