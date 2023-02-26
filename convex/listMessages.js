import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(async ({ db }) => {
  const id = new Id("messages", "3CzSDf2QdHc3P4N2XHdL1g");
  const messages = await db
    .query("messages")
    .filter((q) => q.eq(q.field("_id"), id))
    .collect();
  return messages.length;
});
