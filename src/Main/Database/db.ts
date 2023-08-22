import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

async function main() {
  const note = await db.note.create({
    data: {
      title: "My first note",
      actions: "This is my first action",
      content: "This is my first note",
      summary: "This is my first summary",
    },
  });
  console.log(note);
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
