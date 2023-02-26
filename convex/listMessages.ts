import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(async ({ db }) => {
  const messages = await db
    .query("messages")
    .filter((q) => q.eq(q.field("randomNumber"), 1))
    .collect();
  return messages.length;
});
