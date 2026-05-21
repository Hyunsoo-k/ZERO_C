import { Post } from "@/types/post";
import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";
import { posts } from "../db/posts";

export const getPosts = async(id: string) => {
  await delay(jitter());

  const myPosts = posts.filter((post: Post) => post.resourceUid === id);
  console.log(myPosts)
  return myPosts;
};
