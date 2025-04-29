import { PostResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";

export function usePosts() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () => ky.get("https://dummyjson.com/posts").json<PostResponse>(),
    staleTime: Infinity,
  });

  return query;
}
