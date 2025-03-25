import zod from "zod";

export const signUpInput = zod.object({
  email: zod.string(),
  name: zod.string(),
  password: zod.string(),
});

export const signInInput = zod.object({
  email: zod.string(),
  name: zod.string(),
});

export const blogPostInput = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export const blogUpdateInput = zod.object({
  id: zod.string() || zod.number(),
  email: zod.string(),
  name: zod.string(),
});

export type SignUpInput = zod.infer<typeof signUpInput>;

export type SignInInput = zod.infer<typeof signInInput>;

export type BlogPostInput = zod.infer<typeof blogPostInput>;
export type BlogUpdateInput = zod.infer<typeof blogUpdateInput>;
