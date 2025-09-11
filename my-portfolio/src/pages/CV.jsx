// src/pages/CV.jsx
// import resume from "../assets/resume.pdf"; // optional PDF

import { cv } from "../data/cv.js";  // <-- add this

export default function CV() {
  // pull data from cv.js
  const { basics, work, education, projects, skills } = cv;

  // ---- UI helpers (inline) ----
  const Card = ({ title, children, id }) => (
    <section id={id} className="bg-neutral-900/70 ring-1 ring-white/10 p-5">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );

  const KV = ({ k, v, href }) => (
    <div className="grid grid-cols-[120px_1fr] gap-3 py-1">
      <div className="font-semibold">{k}</div>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="underline">
          {v}
        </a>
      ) : (
        <div>{v}</div>
      )}
    </div>
  );

  const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-md bg-white/10 ring-1 ring-white/10 px-2 py-0.5 text-xs">
      {children}
    </span>
  );

  return (
    <section className="space-y-6">
      {/* header + (optional) PDF button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">CV</h1>

        {/* Uncomment when resume.pdf exists */}
        {/* <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/15 px-3 py-2 text-sm"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm7 1.5V8h4.5L13 3.5z"/>
          </svg>
          PDF
        </a> */}
      </div>

      {/* optional narrow left nav; super light to keep your theme */}
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
        <nav className="md:sticky md:top-20 text-sm text-gray-400">
          <ul className="space-y-2">
            <li><a href="#basics" className="hover:text-white">Basics</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#education" className="hover:text-white">Education</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
          </ul>
        </nav>

        <div className="space-y-6">
          {/* Basics */}
          <Card id="basics" title="Basics">
            <KV k="Name" v={basics.name} />
            <KV k="Label" v={basics.label} />
            <KV k="Email" v={basics.email} href={`mailto:${basics.email}`} />
            <KV k="GitHub" v={basics.github} href={basics.github} />
            <KV k="LinkedIn" v={basics.linkedin} href={basics.linkedin} />
            <div className="grid grid-cols-[120px_1fr] gap-3 py-1">
              <div className="font-semibold">Summary</div>
              <p className="text-gray-300">{basics.summary}</p>
            </div>
          </Card>

          {/* Work */}
          <Card id="work" title="Work">
            {work.map((w, i) => (
              <div key={i} className={i ? "pt-5 border-t border-white/10 mt-5" : ""}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <Badge>{w.period}</Badge>
                </div>
                <div className="text-sm text-gray-400">{w.org}</div>
                <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
                  {w.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </Card>

          {/* Education */}
          <Card id="education" title="Education">
            {education.map((e, i) => (
              <div key={i} className={i ? "pt-5 border-t border-white/10 mt-5" : ""}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <Badge>{e.period}</Badge>
                </div>
                <div className="text-sm text-gray-400">{e.school}</div>
                {e.notes?.length ? (
                  <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
                    {e.notes.map((n, j) => <li key={j}>{n}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </Card>

          {/* Projects */}
          <Card id="projects" title="Projects">
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((p, i) => (
                <a
                  key={i}
                  href={p.link || "#"}
                  target={p.link ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="block rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 p-4 transition"
                >
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/10 ring-1 ring-white/10 px-2 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card id="skills" title="Skills">
            <div className="space-y-3 text-sm">
              <div><span className="font-semibold">Programming:</span> {skills.programming.join(" · ")}</div>
              <div><span className="font-semibold">Frontend:</span> {skills.frontend.join(" · ")}</div>
              <div><span className="font-semibold">Backend:</span> {skills.backend.join(" · ")}</div>
              <div><span className="font-semibold">Databases:</span> {skills.db.join(" · ")}</div>
              <div><span className="font-semibold">Tools:</span> {skills.tools.join(" · ")}</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
