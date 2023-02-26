import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  messages: defineTable({
    body: s.string(),
    author: s.string(),
    randomNumber: s.number(),
  }).index("by_randomNumber", ["randomNumber"]),
});
