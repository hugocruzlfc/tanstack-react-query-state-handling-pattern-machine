"use client";

import { usePosts } from "@/hooks/use-posts";
import { matchQueryStatus } from "@/lib/match-query-status";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader2 } from "lucide-react";
import { Badge } from "./ui/badge";
import Posts from "./posts";

function ErrorMessage({ error }: { error: string }) {
  return (
    <Badge
      className="mx-auto my-3"
      variant="destructive"
    >
      {error}
    </Badge>
  );
}

function EmptyMessage({ message }: { message: string }) {
  return <Badge className="mx-auto my-3">{message}</Badge>;
}

export default function PostsLayout() {
  const query = usePosts();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts</CardTitle>
      </CardHeader>
      <CardContent>
        {matchQueryStatus(query, {
          Loading: <Loader2 className="mx-auto my-3 animate-spin" />,
          Errored: (error) => <ErrorMessage error={error.message} />,
          Empty: <EmptyMessage message="No posts found." />,
          Success: ({ data }) => (
            <Posts
              posts={data.posts}
              total={data.total}
            />
          ),
        })}
      </CardContent>
    </Card>
  );
}
