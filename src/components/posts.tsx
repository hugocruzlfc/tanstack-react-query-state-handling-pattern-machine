import { Post } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PostsProps {
  posts: Post[];
  total: number;
}

export default function Posts({ posts, total }: PostsProps) {
  return (
    <>
      {/* Render posts here */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>{post.body}</CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">Total Posts: {total}</span>
      </div>
    </>
  );
}
