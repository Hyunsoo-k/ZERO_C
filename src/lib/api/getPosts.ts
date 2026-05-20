import { delay } from "../apiSimulations/delay";
import { jitter } from "../apiSimulations/jitter";
import { posts } from "../db/posts";

export const getPosts = async() => {
  await delay(jitter());
  return posts;
};
