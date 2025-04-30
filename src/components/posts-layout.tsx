"use client";

import { usePosts } from "@/hooks/use-posts";

export default function PostsLayout() {
  const query = usePosts();

  console.log(query.data);
  return (
    <div>
      <h1>Posts</h1>

      {query.data && (
        <ul>
          {query.data.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
