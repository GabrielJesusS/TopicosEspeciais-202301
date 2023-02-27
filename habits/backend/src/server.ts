import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/hello", () => {
  return "Hello World";
});

app.get("/hello2", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber",
      },
    },
  });
  return habits
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("HTTP server running");
  });
