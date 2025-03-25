import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    secert: string;
  };
}>();

blog.use("/*", async (c, next) => {
  const authUser = c.req.header("authorization") || "";
  const user = await verify(authUser, c.env.secert);

  if (user) {
    //@ts-ignore
    c.set("userId", user.id);
    next();
  } else {
    c.status(403);
    return c.json({
      message: "You are not loggged in!",
    });
  }
});

blog.post("/", async (c) => {
  const { title, content, authoreId } = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.create({
      data: {
        title: title,
        content: content,
        published: true,

        authorId: authoreId,
      },
    });

    if (!blog.id) {
      c.status(403);
      return c.json({
        message: "Could not Added Blog ",
      });
    }

    return c.json({ message: blog.id });
  } catch (err) {
    return c.json({ message: "Error Occured : " + err });
  }
});

blog.put("/", async (c) => {
  const { id, title, content, authoreId } = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.update({
      where: {
        id: id,
      },

      data: {
        title: title,
        content: content,
        published: true,

        authorId: authoreId,
      },
    });

    if (!blog.id) {
      c.status(403);
      return c.json({
        message: "Could not Added Blog ",
      });
    }

    return c.json({ message: blog.id });
  } catch (err) {
    return c.json({ message: "Error Occured : " + err });
  }
});

blog.get("/", async (c) => {
  const { id } = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!blog?.id) {
      c.status(403);
      return c.json({
        message: "Could not Added Blog ",
      });
    }

    return c.json({ message: blog });
  } catch (err) {
    return c.json({ message: "Error Occured : " + err });
  }
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = prisma.post.findMany();

    return c.json({ message: blogs });
  } catch (err) {
    return c.json({ message: "Error Occured : " + err });
  }
});
