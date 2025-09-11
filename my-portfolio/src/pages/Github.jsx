import { useEffect, useMemo, useState } from "react";
import RepoCard from "../components/RepoCard.jsx";

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "iffat180";
const PER_PAGE = 30; // fetch up to 30, then we sort/filter client-side

export default function GitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ignore = false;
    async function load() {
      setLoading(true);
      setErr("");
      try {
        const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=${PER_PAGE}&sort=updated`);
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        const data = await res.json();
        if (!ignore) setRepos(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!ignore) setErr(e.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  // Example: filter out forks and sort by stars desc, then by recent push
  const visible = useMemo(() => {
    return repos
      .filter(r => !r.fork)
      .sort((a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.pushed_at) - new Date(a.pushed_at)
      )
      .slice(0, 12); // show top 12
  }, [repos]);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">GitHub</h1>

      {/* Status */}
      {loading && (
        <div className="text-gray-400">Loading repositories…</div>
      )}
      {err && (
        <div className="text-red-400">Failed to load repos: {err}</div>
      )}

      {/* Grid */}
      {!loading && !err && (
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((r) => <RepoCard key={r.id} repo={r} />)}
        </div>
      )}

      {/* Fallback link */}
      <div className="pt-2 text-sm text-gray-400">
        <a
          className="underline"
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          View all on GitHub →
        </a>
      </div>
    </section>
  );
}
