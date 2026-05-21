import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";
import { maybeFail } from "../apiSimulations/maybeFail";
import { posts } from "../db/posts";

export const deletePost = async(id: string ) => {
  await delay(jitter());
  console.log("delete")

  if (maybeFail()) {
    throw new Error("Save failed");
  }

  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
  }

  return;
};