import { Hono } from "hono";

export const user = new Hono();

user.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

user.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

user.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});

user.get("/", (c) => {
  return c.json({
    message: "Hello",
  });
});
