import { mutation } from "./_generated/server";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default mutation(async ({ db }, body, author) => {
  await Promise.all(
    [...Array(8000).keys()].map((i) => {
      return db.insert("messages", {
        body,
        author,
        randomNumber: getRandomInt(300),
      });
    })
  );
});
