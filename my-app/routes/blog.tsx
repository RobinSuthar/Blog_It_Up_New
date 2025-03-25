import { Hono } from "hono";

export const blog = new Hono();

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

blog.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});
