import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { Env } from "hono";
import { env } from "hono/adapter";
import { user } from "../routes/user";

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    secert: string;
  };
}>();

blog.post("/", async (c) => {
  const { title, content, author, authoreId } = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.create({
      data: {
        title: title,
        content: content,
        published: true,
        author: author,
        authorId: authoreId,
      },
    });

    if (!blog.id) {
      c.status(403);
      return c.json({
        message: "Could not Added Blog ",
      });
    }

    return c.json({ message: "Blog Created Successfully" });
  } catch (err) {
    return c.json({ message: "Error Occured : " + err });
  }
});

blog.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

blog.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

blog.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});
