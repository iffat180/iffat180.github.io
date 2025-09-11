export default function RepoCard({ repo }) {
  const {
    name,
    html_url,
    description,
    stargazers_count,
    forks_count,
    language,
  } = repo;

  return (
    <a
      href={html_url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl bg-neutral-900/70 p-5 ring-1 ring-white/10 hover:ring-white/20 transition"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-400 line-clamp-2">
          {description}
        </p>
      )}

      {/* Meta */}
      <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
        {language && (
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-[#f59e0b]" /> {/* dot; you can color-map by language if you want */}
            {language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193L12 .587z"/>
          </svg>
          {Intl.NumberFormat().format(stargazers_count)}
        </span>
        <span className="inline-flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M5 3a2 2 0 00-2 2v5c0 1.1.9 2 2 2h4v4l4-4h6a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>
          </svg>
          {Intl.NumberFormat().format(forks_count)}
        </span>
      </div>
    </a>
  );
}
