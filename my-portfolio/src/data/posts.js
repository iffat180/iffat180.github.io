import p1 from "./posts/post1.js";
import p2 from "./posts/post2.js";
import p3 from "./posts/post3.js";
import p4 from "./posts/post4.js";
import p5 from "./posts/post5.js";
import p6 from "./posts/post6.js";
import p7 from "./posts/post7.js";

// Array for the list page
export const posts = [p1, p2, p3, p4, p5, p6, p7].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Map for O(1) lookup on the single page
export const postsBySlug = Object.fromEntries(posts.map(p => [p.slug, p]));
