import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block rounded-xl bg-neutral-900/70 p-5 ring-1 ring-white/10 hover:ring-white/20 transition group"
    >
      <div className="text-sm text-gray-400">{post.date}</div>
      <h3 className="text-lg font-semibold group-hover:underline">{post.title}</h3>
      <p className="text-sm text-gray-400 mt-1 line-clamp-4">{post.excerpt}</p>
    </Link>
  );
}
