import { Post } from "@/types/post";
import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";
import { maybeFail } from "../apiSimulations/maybeFail";
import { posts } from "../db/posts";

export const createOrUpdatePost = async( post: Omit<Post, "id"> & { id?: string }) => {
  await delay(jitter());
  console.log("create")

  if (maybeFail()) {
    throw new Error("Save failed");
  }

  if (post.id) {
    const target = posts.find(x => x.id === post.id);
    if (target) {
      Object.assign(target, post);
    }
    return post as Post;
  }

  const created = { ...post, id: crypto.randomUUID() };

  posts.push(created);

  return created;
};