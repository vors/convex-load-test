import { mutation } from "./_generated/server";

export default mutation(async ({ db }, body, author) => {
  const message = { body, author };
  await Promise.all(
    [...Array(8000).keys()].map((i) => {
      return db.insert("messages", message);
    })
  );
});
