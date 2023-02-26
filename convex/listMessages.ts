import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(async ({ db }) => {
  const messages = await db
    .query("messages")
    .withIndex("by_randomNumber")
    .filter((q) => q.eq(q.field("randomNumber"), 123))
    .collect();
  return messages.length;
});
