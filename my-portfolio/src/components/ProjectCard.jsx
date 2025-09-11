export default function ProjectCard({ p }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl bg-neutral-900/70 overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition group"
    >
      {/* Project image */}
      {p.img && (
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-55 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}

      {/* Text content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:underline">{p.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
        <div className="text-xs text-gray-400 mt-3">{p.stack.join(" · ")}</div>
      </div>
    </a>
  );
}
