export const queryKeys = {
  companies: ["companies"],
  company: (id: string | null) => ["company", id],
  posts: ["posts"],
  companyPosts: (id: string) => ["companyPosts", id]
};