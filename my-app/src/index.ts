import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  signInInput,
  SignInInput,
  signUpInput,
} from "@robinsuthar/blog-website-100";
import { SignUpInput } from "@robinsuthar/blog-website-100";
import { blog } from "../routes/blog";
import { user } from "../routes/user";
export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    secert: string;
  };
}>();

app.route("/api/v1/blog", blog);

app.route("/api/v1/user", user);

app.post("/api/v1/signup", async (c) => {
  const { email, name, password } = await c.req.json();
  const body = await c.req.json();

  const { success } = signInInput.safeParse(body);

  if (!success) {
    return c.json({
      Error: "Incorrect Inputs ",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: password,
      },
    });
    const payLoad = { id: user.id };

    const token = await sign(payLoad, c.env.secert);

    return c.json({
      message: token,
    });
  } catch (err) {
    return c.json({
      Error: "Cannot Created User : " + err,
    });
  }
});

app.post("/api/v1/signin", async (c) => {
  const { name, password } = await c.req.json();
  const body = await c.req.json();

  const { success } = signInInput.safeParse(body);

  if (!success) {
    return c.json({
      Error: "Incorrect Inputs ",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        name: name,
        password: password,
      },
    });

    if (!user?.id) {
      return c.json({
        message: "Inccorect Creadiants",
      });
    }
    return c.json({
      message: "User Found SuccessFully",
    });
  } catch (err) {
    return c.json({
      Error: "Cannot Find User : " + err,
    });
  }
});

export default app;
