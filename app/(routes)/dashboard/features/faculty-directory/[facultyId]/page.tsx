"use client";

import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Briefcase,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Award,
  Users,
  FileText,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Sparkles,
  Download,
  Share2,
  Book,
  Building,
  School,
  MessageCircle,
  ExternalLink,
  Clock,
  ThumbsUp,
  Star as StarIcon,
  Filter,
  Search,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";

import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const params = useParams();
  const id =
    typeof params.facultyId === "string" ? params.facultyId : undefined;

  console.log(id);

  const profile = useQuery(api.fetch.getFacultyById, id ? { id } : "skip");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (profile === undefined) {
    return <>loading ....</>;
  }

  if (profile === null) {
    return <div>Faculty not found</div>;
  }

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "#",
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "#",
      color: "bg-gray-50 text-gray-700 hover:bg-gray-100",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "#",
      color: "bg-sky-50 text-sky-600 hover:bg-sky-100",
    },
    {
      icon: <Book className="w-5 h-5" />,
      label: "Google Scholar",
      url: "#",
      color: "bg-green-50 text-green-600 hover:bg-green-100",
    },
  ];

  const stats = [
    {
      label: "Publications",
      value: profile.publications,
      icon: <FileText className="w-5 h-5" />,
      change: "5 this year",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      label: "Student Reviews",
      value: profile.rating,
      icon: <StarIcon className="w-5 h-5" />,
      change: `${profile.reviews} reviews`,
      color: "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700",
      iconBg: "bg-amber-100 text-amber-600",
    },
    {
      label: "Courses Taught",
      value: "8",
      icon: <BookOpen className="w-5 h-5" />,
      change: "4 this semester",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Students Mentored",
      value: "86",
      icon: <Users className="w-5 h-5" />,
      change: "12 currently",
      color: "bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700",
      iconBg: "bg-violet-100 text-violet-600",
    },
  ];

  const courses = [
    {
      code: "CS301",
      name: "Machine Learning",
      semester: "Fall 2024",
      students: "120",
      rating: "4.9",
      color: "bg-blue-50 border-blue-200",
    },
    {
      code: "CS201",
      name: "Data Structures",
      semester: "Spring 2024",
      students: "150",
      rating: "4.7",
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      code: "CS401",
      name: "Artificial Intelligence",
      semester: "Fall 2023",
      students: "95",
      rating: "4.8",
      color: "bg-purple-50 border-purple-200",
    },
    {
      code: "CS501",
      name: "Cloud Computing",
      semester: "Spring 2023",
      students: "80",
      rating: "4.6",
      color: "bg-amber-50 border-amber-200",
    },
  ];

  const studentReviews = [
    {
      name: "Rahul Sharma",
      course: "Machine Learning",
      rating: 5,
      date: "2 months ago",
      comment:
        "Excellent teaching methodology. Very approachable and supportive.",
      avatarColor: "bg-blue-100 text-blue-600",
    },
    {
      name: "Priya Patel",
      course: "Data Structures",
      rating: 4,
      date: "3 months ago",
      comment:
        "Clear explanations and real-world examples. Assignments were challenging but helpful.",
      avatarColor: "bg-purple-100 text-purple-600",
    },
    {
      name: "Amit Kumar",
      course: "Artificial Intelligence",
      rating: 5,
      date: "4 months ago",
      comment:
        "Best professor I've had! Research-oriented approach helped me secure an internship.",
      avatarColor: "bg-green-100 text-green-600",
    },
    {
      name: "Neha Gupta",
      course: "Cloud Computing",
      rating: 4,
      date: "6 months ago",
      comment:
        "Knowledgeable and industry-aware. Projects were practical and relevant.",
      avatarColor: "bg-amber-100 text-amber-600",
    },
  ];

  const quickActions = [
    {
      label: "Schedule Meeting",
      icon: <Calendar className="w-4 h-4" />,
      action: () => alert("Schedule meeting with professor..."),
      color: "hover:bg-blue-50 text-blue-600",
    },
    {
      label: "Send Message",
      icon: <MessageCircle className="w-4 h-4" />,
      action: () => alert("Send message to professor..."),
      color: "hover:bg-green-50 text-green-600",
    },
    {
      label: "View Course Materials",
      icon: <BookOpen className="w-4 h-4" />,
      action: () => alert("View course materials..."),
      color: "hover:bg-purple-50 text-purple-600",
    },
    {
      label: "Join Office Hours",
      icon: <Clock className="w-4 h-4" />,
      action: () => alert("Join office hours..."),
      color: "hover:bg-amber-50 text-amber-600",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Faculty Directory</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Computer Science</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Faculty Profile
            </h1>
            <p className="text-gray-600 mt-2">
              View professor details, courses, and student reviews
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-2 text-sm">
              <Share2 className="w-4 h-4" />
              Share Profile
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Hero Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="relative">
                {/* Banner */}
                <div className="h-32 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Profile Content */}
                <div className="px-6 pb-6 -mt-16 relative">
                  {/* Avatar */}
                  <div className="relative w-32 h-32">
                    <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 p-2 bg-white text-gray-700 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="mt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                          {profile.name}
                        </h2>
                        <p className="text-gray-600 mt-1 flex items-center gap-2">
                          <Building className="w-4 h-4 text-blue-500" />
                          {profile.designation}
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-5 h-5 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-gray-800">
                              {profile.rating}
                            </span>
                            <span className="text-gray-500 text-sm">
                              ({profile.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {profile.availability}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation - Only Overview and Courses */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex space-x-1 border-b border-gray-200 pb-4">
                {["overview", "courses"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      activeTab === tab
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content - No Scroll */}
              <div className="mt-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        About Professor
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {profile.bio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        Research Areas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {profile.research.map((area, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg border border-purple-200 font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "courses" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Courses Taught
                    </h3>
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${course.color} hover:shadow-sm transition`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-800">
                                {course.code}
                              </span>
                              <span className="text-gray-600">•</span>
                              <span className="font-semibold text-gray-800">
                                {course.name}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {course.semester}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="flex items-center gap-1">
                                <StarIcon className="w-4 h-4 text-amber-500 fill-amber-500" />
                                <span className="font-bold">
                                  {course.rating}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                rating
                              </span>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{course.students}</div>
                              <span className="text-xs text-gray-500">
                                students
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                          View Syllabus
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 ${action.color} transition border border-gray-200`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white">
                        {action.icon}
                      </div>
                      <span className="font-medium text-gray-700">
                        {action.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <InfoField
                  icon={<Mail className="w-4 h-4 text-blue-600" />}
                  label="Email"
                  value={profile.email}
                />

                <InfoField
                  icon={<Phone className="w-4 h-4 text-green-600" />}
                  label="Office Phone"
                  value={profile.phone}
                />
                <InfoField
                  icon={<MapPin className="w-4 h-4 text-red-600" />}
                  label="Office Location"
                  value={profile.location}
                />
                <InfoField
                  icon={<Clock className="w-4 h-4 text-purple-600" />}
                  label="Office Hours"
                  value={profile.officeHours}
                />
                <InfoField
                  icon={<Building className="w-4 h-4 text-indigo-600" />}
                  label="Department"
                  value={profile.department}
                />
              </div>

              {/* Removed Schedule Appointment Button */}
            </div>

            {/* Academic Profiles */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Academic Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`p-3 rounded-lg ${link.color} hover:shadow-md transition flex flex-col items-center justify-center gap-2 border border-gray-200`}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <School className="w-5 h-5 text-blue-600" />
                Education
              </h3>
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      {profile.education}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">2008 - 2012</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-600">
                        Dissertation: "Advanced Neural Networks"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoField = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div>{icon}</div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
};

export default Page;
