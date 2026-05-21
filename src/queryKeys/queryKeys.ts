export const queryKeys = {
  companies: ["companies"],
  company: (id: string | null) => ["company", id],
  posts: (id: string | null) => ["posts", id],
  companyPosts: (id: string) => ["companyPosts", id]
};