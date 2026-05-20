import { Post } from "@/types/post";

const posts: Post[] = [
  {
    id: "p1",
    title: "Sustainability Report",
    resourceUid: "c1",
    dateTime: "2024-02",
    content: "Quarterly CO2 update"
  }
];

export let _posts = [...posts];