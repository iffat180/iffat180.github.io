import { useParams, Link } from "react-router-dom";
import { postsBySlug } from "../data/posts.js";

export default function Post() {
  const { slug } = useParams();
  const post = postsBySlug[slug];

  if (!post) {
    return (
      <section className="space-y-3">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-400">That post doesn’t exist.</p>
        <Link to="/blog" className="underline">← Back to Blog</Link>
      </section>
    );
  }

  return (
    <article className="space-y-3">
      <Link to="/blog" className="text-sm text-gray-400 no-underline">← Back</Link>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-400">{post.date}</p>

      <div
        className="leading-7 text-gray-200
                   [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6
                   [&_p]:my-3
                   [&_ul]:list-disc [&_ul]:pl-5
                   [&_pre]:bg-neutral-900 [&_pre]:p-4 [&_pre]:rounded-xl
                   [&_code]:bg-neutral-900 [&_code]:px-1.5 [&_code]:py-0.5
                   [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
