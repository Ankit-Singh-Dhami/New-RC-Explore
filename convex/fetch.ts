import { v } from "convex/values";
import { query } from "./_generated/server";

/* CLUBS */
export const getClubs = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("clubs").collect();
  },
});

/* EVENTS */
export const getEvents = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("events").collect();
  },
});

/* FEEDBACKS */
export const getFeedbacks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("feedbacks").collect();
  },
});

/* FOUND ITEMS */
export const getLostItems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("lostItems").collect();
  },
});

/* FOUND ITEMS */
export const getFoundItems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("foundItems").collect();
  },
});

/* IDEAS */
export const getIdeas = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("ideas").collect();
  },
});

/* JOBS */
export const getJobs = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("jobs").collect();
  },
});

/* MENTORS */
export const getMentors = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("mentors").collect();
  },
});

/* NOTICES */
export const getNotices = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notices").collect();
  },
});

/* NOTIFICATIONS */
export const getNotifications = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notifications").collect();
  },
});

/* STUDENTS */
export const getStudents = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("students").collect();
  },
});

export const getStudentByRollNo = query({
  args: {
    rollNo: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("students")
      .filter((q) => q.eq(q.field("rollNo"), args.rollNo))
      .first();
  },
});

/* STUDY MATERIALS */
export const getStudyMaterials = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("studyMaterials").collect();
  },
});
