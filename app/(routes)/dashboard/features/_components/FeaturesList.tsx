import {
  Briefcase,
  MessageSquare,
  Calendar,
  MapPin,
  Bot,
  Wrench,
  Link as LinkIcon,
  Users,
  BarChart,
  GraduationCap,
  BookOpen,
  Clock,
  Trophy,
  FileText,
  IdCard,
  Globe,
  Home,
  Lightbulb,
  Bell,
  Map,
  ClipboardList,
  Layers,
  Factory,
  FunctionSquare,
  Building,
  GraduationCap as GraduationCapIcon,
  Book,
  Search,
  Heart,
  Mail,
  Shield,
  Database,
} from "lucide-react";

export const features = [
  // Information & Directory
  {
    title: "Student Info System",
    subtitle: "View student details and profiles",
    icon: IdCard,
    link: "/dashboard/features/student-info",
    category: "Information",
    color: "blue",
    badge: "Essential",
  },
  {
    title: "Faculty Directory",
    subtitle: "Search faculty by department and contact info",
    icon: Building,
    link: "/dashboard/features/faculty-directory",
    category: "Information",
    color: "blue",
    badge: "Updated",
  },
  {
    title: "College Clubs",
    subtitle: "Browse and join campus clubs & societies",
    icon: Users,
    link: "/dashboard/features/college-clubs",
    category: "Information",
    color: "blue",
  },

  // Academic Resources
  {
    title: "Notes & Study Material",
    subtitle: "Access PDFs, PPTs, and study resources",
    icon: FileText,
    link: "/dashboard/features/notes-study-material",
    category: "Academic",
    color: "green",
    badge: "Popular",
  },
  {
    title: "Mentorship System",
    subtitle: "Connect with academic and career mentors",
    icon: GraduationCap,
    link: "/dashboard/features/mentorship-system",
    category: "Academic",
    color: "green",
  },

  // Campus Services
  {
    title: "Lost Item",
    subtitle: "Report and track lost belongings",
    icon: MapPin,
    link: "/dashboard/features/lost-item",
    category: "Services",
    color: "purple",
  },
  {
    title: "Found Item",
    subtitle: "Post found items and return to owners",
    icon: Heart,
    link: "/dashboard/features/found-item",
    category: "Services",
    color: "purple",
  },
  {
    title: "Campus Map",
    subtitle: "Interactive campus navigation guide",
    icon: Map,
    link: "/dashboard/features/campus-map",
    category: "Services",
    color: "purple",
  },

  // Career & Placement
  {
    title: "Internship & Jobs",
    subtitle: "Browse opportunities and apply",
    icon: Briefcase,
    link: "/dashboard/features/internship-jobs",
    category: "Career",
    color: "orange",
    badge: "Hot",
  },

  // Campus Life
  {
    title: "Events Calendar",
    subtitle: "View and register for campus events",
    icon: Calendar,
    link: "/dashboard/features/events",
    category: "Campus Life",
    color: "pink",
    badge: "New",
  },
  {
    title: "Achievement Gallery",
    subtitle: "Student achievements and awards",
    icon: Trophy,
    link: "/dashboard/features/achievement-gallery",
    category: "Campus Life",
    color: "pink",
  },

  // Innovation & Feedback
  {
    title: "Innovation Idea Box",
    subtitle: "Submit and vote on innovative ideas",
    icon: Lightbulb,
    link: "/dashboard/features/innovation-idea-box",
    category: "Innovation",
    color: "indigo",
  },
  {
    title: "Feedback Box",
    subtitle: "Submit suggestions and feedback",
    icon: MessageSquare,
    link: "/dashboard/features/feedback-box",
    category: "Innovation",
    color: "indigo",
  },

  {
    title: "Useful Links",
    subtitle: "Important websites and resources",
    icon: LinkIcon,
    link: "/dashboard/features/useful-links",
    category: "Technology",
    color: "cyan",
  },

  // Communication
  {
    title: "Push Notifications",
    subtitle: "Instant alerts and announcements",
    icon: Bell,
    link: "/dashboard/features/push-notifications",
    category: "Communication",
    color: "red",
  },
  {
    title: "Notice Board",
    subtitle: "Official announcements and notices",
    icon: ClipboardList,
    link: "/dashboard/features/notice-board",
    category: "Communication",
    color: "red",
  },

  // Analytics & Insights
  {
    title: "User Analytics",
    subtitle: "Usage statistics and engagement",
    icon: BarChart,
    link: "/dashboard/features/user-analytics",
    category: "Analytics",
    color: "teal",
  },
];

// Define all categories for filtering
export const categories = [
  { id: "all", label: "All Features", count: features.length },
  {
    id: "Information",
    label: "Information",
    count: features.filter((f) => f.category === "Information").length,
    color: "blue",
  },
  {
    id: "Academic",
    label: "Academic",
    count: features.filter((f) => f.category === "Academic").length,
    color: "green",
  },
  {
    id: "Services",
    label: "Campus Services",
    count: features.filter((f) => f.category === "Services").length,
    color: "purple",
  },
  {
    id: "Career",
    label: "Career",
    count: features.filter((f) => f.category === "Career").length,
    color: "orange",
  },
  {
    id: "Campus Life",
    label: "Campus Life",
    count: features.filter((f) => f.category === "Campus Life").length,
    color: "pink",
  },
  {
    id: "Innovation",
    label: "Innovation",
    count: features.filter((f) => f.category === "Innovation").length,
    color: "indigo",
  },
  {
    id: "Technology",
    label: "Technology",
    count: features.filter((f) => f.category === "Technology").length,
    color: "cyan",
  },
  {
    id: "Administration",
    label: "Administration",
    count: features.filter((f) => f.category === "Administration").length,
    color: "gray",
  },
  {
    id: "Communication",
    label: "Communication",
    count: features.filter((f) => f.category === "Communication").length,
    color: "red",
  },
  {
    id: "Analytics",
    label: "Analytics",
    count: features.filter((f) => f.category === "Analytics").length,
    color: "teal",
  },
];

// Color mapping for badges and highlights
export const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    icon: "text-blue-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    icon: "text-green-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    icon: "text-purple-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    icon: "text-orange-600",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    border: "border-pink-200",
    icon: "text-pink-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
    icon: "text-indigo-600",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
    icon: "text-cyan-600",
  },
  gray: {
    bg: "bg-gray-50",
    text: "text-gray-700",
    border: "border-gray-200",
    icon: "text-gray-600",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    icon: "text-red-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    border: "border-teal-200",
    icon: "text-teal-600",
  },
};

// Import missing icons
import { CreditCard } from "lucide-react";
