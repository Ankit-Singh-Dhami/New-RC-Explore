import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.optional(v.union(v.literal("admin"), v.literal("user"))),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
