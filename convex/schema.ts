import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  students: defineTable({
    name: v.string(),
    rollNo: v.string(),
    branch: v.string(),
    year: v.string(),
    email: v.string(),
    phone: v.string(),
    location: v.string(),
    bio: v.string(),
    education: v.string(),
    experience: v.string(),
    skills: v.array(v.string()),
    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    portfolio: v.optional(v.string()),
    isActive: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_email", ["email"]),

  clubs: defineTable({
    name: v.string(),
    description: v.string(),
    longDescription: v.string(),

    icon: v.string(), // e.g. "Zap", "Trophy"
    color: v.string(), // e.g. "orange", "green"

    members: v.string(), // "150+"
    events: v.string(), // "Monthly", "Weekly"

    contact: v.string(),
    location: v.string(),

    category: v.string(), // Entrepreneurship, Sports, etc.
    established: v.string(), // year as string

    president: v.optional(v.string()),
    vicePresident: v.optional(v.string()),
    facultyCoordinator: v.optional(v.string()),

    social: v.optional(
      v.object({
        instagram: v.optional(v.string()),
        linkedin: v.optional(v.string()),
        website: v.optional(v.string()),
        facebook: v.optional(v.string()),
        youtube: v.optional(v.string()),
      }),
    ),

    upcomingEvents: v.optional(
      v.array(
        v.object({
          name: v.string(),
          date: v.string(),
          time: v.optional(v.string()),
          description: v.optional(v.string()),
        }),
      ),
    ),

    achievements: v.optional(v.array(v.string())),

    committee: v.optional(
      v.array(
        v.object({
          role: v.string(),
          name: v.string(),
        }),
      ),
    ),

    requirements: v.optional(v.array(v.string())),

    active: v.boolean(),

    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  studyMaterials: defineTable({
    title: v.string(),
    subject: v.string(), // Mathematics, CS, Physics
    type: v.string(), // Lecture Notes, Textbooks, Videos
    description: v.string(),

    icon: v.string(), // "FileText", "Book", "Video"
    color: v.string(), // blue, purple, red

    uploadedBy: v.string(), // Prof / Office name
    uploadDate: v.string(), // "2024-01-15"

    downloads: v.number(), // store as number → 1200 instead of "1.2k"
    rating: v.number(), // 4.8

    fileSize: v.string(), // "15.2 MB"
    format: v.string(), // PDF, ZIP, MP4
    semester: v.string(), // Semester 1, 2, 3

    tags: v.array(v.string()),
    featured: v.boolean(),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_subject", ["subject"])
    .index("by_type", ["type"])
    .index("by_semester", ["semester"])
    .index("by_featured", ["featured"]),

  lostItems: defineTable({
    title: v.string(),
    description: v.string(),
    location: v.string(),
    date: v.string(),
    time: v.string(),
    contact: v.string(),
    reward: v.optional(v.string()),
    urgent: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_location", ["location"])
    .index("by_date", ["date"])
    .index("by_urgent", ["urgent"]),

  foundItems: defineTable({
    title: v.string(),
    description: v.string(),
    location: v.string(),
    date: v.string(), // ISO date string
    time: v.string(), // "HH:mm" or full ISO timestamp
    contact: v.string(),
    status: v.union(v.literal("claimed"), v.literal("unclaimed")), // ✅ correc
    urgent: v.boolean(),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_location", ["location"])
    .index("by_date", ["date"])
    .index("by_status", ["status"])
    .index("by_urgent", ["urgent"]),

  jobs: defineTable({
    title: v.string(),
    company: v.string(),
    logo: v.string(),
    companyColor: v.string(),
    rating: v.number(),
    type: v.union(
      v.literal("Internship"),
      v.literal("Full-time"),
      v.literal("Part-time"),
      v.literal("Contract"),
    ),
    category: v.string(),
    location: v.string(),
    salary: v.string(),
    duration: v.string(),
    posted: v.string(),
    deadline: v.string(),
    startDate: v.string(),
    description: v.string(),
    responsibilities: v.array(v.string()),
    requirements: v.array(v.string()),
    skills: v.array(v.string()),
    benefits: v.array(v.string()),
    applicants: v.number(),
    views: v.number(),
    urgent: v.boolean(),
    companyInfo: v.object({
      description: v.string(),
      website: v.string(),
      founded: v.number(),
      employees: v.string(),
      headquarters: v.string(),
      contact: v.string(),
    }),
    applicationProcess: v.array(v.string()),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_type", ["type"])
    .index("by_category", ["category"])
    .index("by_location", ["location"])
    .index("by_urgent", ["urgent"]),

  events: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.string(), // Could be ISO string for easier sorting
    startTime: v.string(),
    endTime: v.string(),
    location: v.string(),
    category: v.union(
      v.literal("academic"),
      v.literal("sports"),
      v.literal("cultural"),
      v.literal("entrepreneurship"),
      v.literal("career"),
      v.literal("social"),
      v.literal("technical"),
    ),
    organizer: v.string(),
    attendees: v.number(),
    maxAttendees: v.number(),
    status: v.union(
      v.literal("upcoming"),
      v.literal("past"),
      v.literal("cancelled"),
    ),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_date", ["date"])
    .index("by_category", ["category"])
    .index("by_priority", ["priority"])
    .index("by_status", ["status"]),

  ideas: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(), // Technology, Sustainability, Academic, Community, etc.
    author: v.string(),
    date: v.string(), // e.g., "2 days ago"
    upvotes: v.number(),
    comments: v.number(),
    status: v.union(
      v.literal("new"),
      v.literal("under-review"),
      v.literal("approved"),
      v.literal("implemented"),
    ),
    tags: v.array(v.string()), // ✅ Correct validator

    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  feedbacks: defineTable({
    // Core feedback info
    type: v.union(
      v.literal("general"),
      v.literal("suggestion"),
      v.literal("bug"),
      v.literal("complaint"),
      v.literal("praise"),
    ),

    title: v.string(),
    description: v.string(),

    urgency: v.union(
      v.literal("low"),
      v.literal("medium"),
      v.literal("high"),
      v.literal("critical"),
    ),

    sentiment: v.union(
      v.literal("positive"),
      v.literal("neutral"),
      v.literal("negative"),
    ),

    rating: v.number(), // 1–5 stars

    // User info
    name: v.string(),
    email: v.string(),
    department: v.string(),
    allowContact: v.boolean(),

    // Attachments (store file IDs or URLs)
    attachments: v.array(v.string()),

    // Admin workflow
    status: v.union(
      v.literal("new"),
      v.literal("under-review"),
      v.literal("resolved"),
      v.literal("closed"),
    ),

    // Metadata
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  notifications: defineTable({
    // Core content
    title: v.string(),
    message: v.string(),

    // Channel
    channel: v.union(v.literal("push"), v.literal("email"), v.literal("sms")),

    // Status lifecycle
    status: v.union(
      v.literal("sent"),
      v.literal("scheduled"),
      v.literal("draft"),
      v.literal("failed"),
    ),

    // Category & priority
    category: v.union(
      v.literal("academic"),
      v.literal("placement"),
      v.literal("workshop"),
      v.literal("scholarship"),
      v.literal("cultural"),
      v.literal("sports"),
      v.literal("administration"),
      v.literal("emergency"),
      v.literal("general"),
    ),

    priority: v.union(v.literal("high"), v.literal("medium"), v.literal("low")),

    // Audience targeting
    audience: v.union(
      v.literal("all_users"),
      v.literal("all_students"),
      v.literal("faculty"),
      v.literal("staff"),
      v.literal("final_year"),
      v.literal("first_year"),
      v.literal("hostel_students"),
      v.literal("cs_it_students"),
      v.literal("research_scholars"),
    ),

    sentTo: v.number(), // total users
    openedBy: v.optional(v.number()),

    // Performance metrics
    deliveryRate: v.optional(v.number()),
    openRate: v.optional(v.number()),

    // Scheduling
    scheduleType: v.union(v.literal("immediate"), v.literal("scheduled")),
    sentAt: v.optional(v.string()),
    scheduledFor: v.optional(v.string()),

    // Advanced options
    includeLink: v.boolean(),
    linkUrl: v.optional(v.string()),

    includeImage: v.boolean(),
    imageUrl: v.optional(v.string()),

    customSound: v.boolean(),
    soundUrl: v.optional(v.string()),

    deepLink: v.boolean(),
    deepLinkUrl: v.optional(v.string()),

    // Metadata
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_channel", ["channel"])
    .index("by_category", ["category"])
    .index("by_audience", ["audience"]),

  notices: defineTable({
    // =========================
    // Core Notice Content
    // =========================
    title: v.string(),
    description: v.string(),
    content: v.string(),

    // =========================
    // Scheduling
    // =========================
    publishDate: v.string(), // YYYY-MM-DD
    publishTime: v.string(), // HH:mm
    expiresOn: v.optional(v.string()),

    // =========================
    // Classification
    // =========================
    category: v.union(
      v.literal("academic"),
      v.literal("placement"),
      v.literal("workshop"),
      v.literal("scholarship"),
      v.literal("cultural"),
      v.literal("sports"),
      v.literal("administration"),
      v.literal("general"),
    ),

    priority: v.union(v.literal("high"), v.literal("medium"), v.literal("low")),

    // =========================
    // Audience Targeting
    // =========================
    departments: v.array(
      v.union(
        v.literal("all"),
        v.literal("cse"),
        v.literal("it"),
        v.literal("ece"),
        v.literal("eee"),
        v.literal("mech"),
        v.literal("civil"),
        v.literal("mba"),
        v.literal("mca"),
      ),
    ),

    targetAudience: v.union(
      v.literal("all"),
      v.literal("students"),
      v.literal("faculty"),
      v.literal("staff"),
      v.literal("research"),
      v.literal("final-year"),
      v.literal("first-year"),
    ),

    visibility: v.union(
      v.literal("public"),
      v.literal("college"),
      v.literal("department"),
    ),

    // =========================
    // Author & Meta Info
    // =========================
    author: v.string(),
    authorDepartment: v.optional(v.string()),
    venue: v.optional(v.string()),
    registrationLink: v.optional(v.string()),

    // =========================
    // Tags & Attachments
    // =========================
    tags: v.array(v.string()),
    attachments: v.array(v.string()), // fileId or URL

    // =========================
    // Publish Controls
    // =========================
    isPinned: v.boolean(),
    isPublished: v.boolean(),

    // =========================
    // System Metadata
    // =========================
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    // =========================
    // Indexes for performance
    // =========================
    .index("by_category", ["category"])
    .index("by_priority", ["priority"])
    .index("by_visibility", ["visibility"])
    .index("by_published", ["isPublished"])
    .index("by_pinned", ["isPinned"])
    .index("by_publishDate", ["publishDate"]),

  support: defineTable({
    // =========================
    // User Submitted Data
    // =========================
    name: v.string(),
    email: v.string(),

    category: v.union(
      v.literal("Technical Issue"),
      v.literal("Account Problem"),
      v.literal("Feature Request"),
      v.literal("Bug Report"),
      v.literal("General Inquiry"),
      v.literal("Feedback"),
      v.literal("Other"),
    ),

    subject: v.string(),
    message: v.string(),

    // =========================
    // Ticket Lifecycle (Admin)
    // =========================
    status: v.union(
      v.literal("new"),
      v.literal("in-progress"),
      v.literal("resolved"),
      v.literal("closed"),
    ),

    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),

    assignedTo: v.optional(v.string()), // admin/support staff email or ID
    internalNotes: v.optional(v.string()),

    // =========================
    // Response Tracking
    // =========================
    respondedAt: v.optional(v.number()),
    resolvedAt: v.optional(v.number()),

    // =========================
    // System Metadata
    // =========================
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    // =========================
    // Indexes (important)
    // =========================
    .index("by_status", ["status"])
    .index("by_category", ["category"])
    .index("by_priority", ["priority"])
    .index("by_createdAt", ["createdAt"]),

  profiles: defineTable({
    // =========================
    // Core Identity
    // =========================
    name: v.string(),
    title: v.string(),

    userType: v.union(
      v.literal("student"),
      v.literal("teacher"),
      v.literal("guest"),
    ),

    email: v.string(),
    phone: v.string(),
    location: v.string(),

    // =========================
    // About & Professional Info
    // =========================
    bio: v.string(),
    education: v.string(),
    experience: v.string(),

    // =========================
    // Skills & Expertise
    // =========================
    skills: v.array(v.string()),

    // =========================
    // Social & Web Presence
    // =========================
    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    twitter: v.optional(v.string()),
    portfolio: v.optional(v.string()),

    // =========================
    // Media
    // =========================
    avatarUrl: v.optional(v.string()),
    bannerUrl: v.optional(v.string()),

    // =========================
    // Profile Settings
    // =========================
    isPublic: v.boolean(),
    isVerified: v.boolean(),

    // =========================
    // System Metadata
    // =========================
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_userType", ["userType"])
    .index("by_email", ["email"])
    .index("by_public", ["isPublic"]),

  faculty: defineTable({
    name: v.string(),
    title: v.string(),
    email: v.string(),
    phone: v.string(),
    location: v.string(),
    bio: v.string(),

    education: v.string(),
    experience: v.string(),
    department: v.string(),

    rating: v.number(),
    reviewsCount: v.number(),
    availability: v.string(),
    officeHours: v.string(),

    researchAreas: v.array(v.string()),

    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    portfolio: v.optional(v.string()),

    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_department", ["department"])
    .index("by_rating", ["rating"]),

  mentors: defineTable({
    // Personal
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    gender: v.optional(v.string()),
    dateOfBirth: v.optional(v.string()),
    profileImage: v.optional(v.string()),

    // Professional
    designation: v.optional(v.string()),
    department: v.string(),
    qualification: v.string(),
    specialization: v.optional(v.string()),
    experience: v.optional(v.number()),
    currentOrganization: v.optional(v.string()),

    // Academic
    areasOfExpertise: v.array(v.string()),
    researchInterests: v.array(v.string()),

    // Mentor Profile
    mentorType: v.string(),
    maxStudents: v.optional(v.number()),
    availability: v.optional(v.string()),
    consultationHours: v.optional(v.string()),
    consultationMode: v.optional(v.string()),
    feeType: v.optional(v.string()),
    feeAmount: v.optional(v.number()),

    // Contact & Social
    officeLocation: v.optional(v.string()),
    personalWebsite: v.optional(v.string()),
    linkedinProfile: v.optional(v.string()),

    isActive: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_department", ["department"])
    .index("by_mentorType", ["mentorType"])
    .index("by_availability", ["availability"])
    .index("by_feeType", ["feeType"]),
});
