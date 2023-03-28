import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: {
      email: "god@gmail.com",
    },
    data: { email: "god1@gmail.com" },
  });

  await prisma.post.create({
    data: {
      body: "god suraj",
      title: " tale of the wise",
      slug: "random-1234",
      author: {
        connect: {
          email: "god1@gmail.com",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
