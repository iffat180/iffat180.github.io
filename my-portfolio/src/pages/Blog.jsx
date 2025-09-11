import PostCard from "../components/PostCard.jsx";
import { posts } from "../data/posts.js"; 

export default function Blog() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="space-y-3">
        {posts.map((p) => <PostCard key={p.slug} post={p} />)}
      </div>
    </section>
  );
}
