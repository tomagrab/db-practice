import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

async function main() {
  console.log("Database connected");
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await db.$disconnect();
    process.exit(1);
  });
