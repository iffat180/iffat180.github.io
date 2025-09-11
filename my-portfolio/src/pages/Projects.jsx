import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}
