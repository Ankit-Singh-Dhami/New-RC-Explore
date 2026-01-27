"use client";

import { useState } from "react";
import {
  Search,
  Users,
  MessageSquare,
  Calendar,
  Star,
  Award,
  BookOpen,
  Target,
  UserPlus,
  Clock,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const MentorshipSystemPage = () => {
  const [activeTab, setActiveTab] = useState<
    "mentors" | "requests" | "my-mentorships"
  >("mentors");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = [
    "all",
    "career-guidance",
    "academic",
    "technical",
    "entrepreneurship",
    "research",
    "personal-growth",
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      experience: "10+ years",
      rating: 4.9,
      reviews: 42,
      availability: "8 slots/week",
      category: "technical",
      expertise: ["Web Development", "System Design", "Career Growth"],
      bio: "Passionate about helping students bridge the gap between academia and industry. Specialized in software engineering career paths.",
      isAvailable: true,
      sessionsConducted: 156,
      imageColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      title: "Professor of Computer Science",
      company: "IIT Delhi",
      experience: "15+ years",
      rating: 4.8,
      reviews: 38,
      availability: "6 slots/week",
      category: "academic",
      expertise: [
        "Research Methodology",
        "PhD Guidance",
        "Academic Publishing",
      ],
      bio: "Dedicated to guiding students in research and academic excellence. Published 50+ papers in international journals.",
      isAvailable: true,
      sessionsConducted: 89,
      imageColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      id: 3,
      name: "Alex Chen",
      title: "Product Manager",
      company: "Microsoft",
      experience: "8+ years",
      rating: 4.7,
      reviews: 31,
      availability: "5 slots/week",
      category: "career-guidance",
      expertise: ["Product Management", "Leadership", "Career Transition"],
      bio: "Helping students navigate product management careers. Experience in FAANG companies and startups.",
      isAvailable: false,
      sessionsConducted: 112,
      imageColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Founder & CEO",
      company: "TechStart Inc.",
      experience: "6+ years",
      rating: 4.9,
      reviews: 27,
      availability: "4 slots/week",
      category: "entrepreneurship",
      expertise: ["Startup Funding", "Business Strategy", "MVP Development"],
      bio: "Serial entrepreneur with 3 successful exits. Passionate about mentoring young entrepreneurs.",
      isAvailable: true,
      sessionsConducted: 67,
      imageColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      id: 5,
      name: "Dr. Michael Brown",
      title: "Research Scientist",
      company: "MIT AI Lab",
      experience: "12+ years",
      rating: 4.8,
      reviews: 24,
      availability: "3 slots/week",
      category: "research",
      expertise: ["Machine Learning", "AI Research", "Grant Writing"],
      bio: "Leading AI research at MIT. Focused on mentoring aspiring researchers in cutting-edge technologies.",
      isAvailable: true,
      sessionsConducted: 45,
      imageColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      id: 6,
      name: "Lisa Wang",
      title: "Career Coach",
      company: "CareerBoost",
      experience: "7+ years",
      rating: 4.6,
      reviews: 35,
      availability: "10 slots/week",
      category: "personal-growth",
      expertise: ["Interview Prep", "Resume Building", "Soft Skills"],
      bio: "Certified career coach specializing in helping students land their dream jobs.",
      isAvailable: true,
      sessionsConducted: 203,
      imageColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
  ];

  const mentorshipRequests = [
    {
      id: 1,
      mentorName: "Dr. Sarah Johnson",
      studentName: "Rohan Mehta",
      date: "2024-03-15",
      status: "pending",
      category: "technical",
      message:
        "Need guidance on system design interview preparation for FAANG companies.",
    },
    {
      id: 2,
      mentorName: "Prof. Rajesh Kumar",
      studentName: "Anjali Singh",
      date: "2024-03-14",
      status: "accepted",
      category: "academic",
      message: "Seeking guidance on research paper publication process.",
    },
    {
      id: 3,
      mentorName: "Alex Chen",
      studentName: "Karan Verma",
      date: "2024-03-13",
      status: "rejected",
      category: "career-guidance",
      message: "Career transition from development to product management.",
    },
  ];

  const activeMentorships = [
    {
      id: 1,
      mentorName: "Dr. Sarah Johnson",
      startDate: "2024-02-15",
      nextSession: "2024-03-20",
      progress: 75,
      sessionsCompleted: 3,
      totalSessions: 4,
    },
    {
      id: 2,
      mentorName: "Lisa Wang",
      startDate: "2024-03-01",
      nextSession: "2024-03-18",
      progress: 25,
      sessionsCompleted: 1,
      totalSessions: 4,
    },
  ];

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" || mentor.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu Button (only on small screens) */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 rounded-lg bg-white border border-gray-200"
          >
            {showMobileMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Mentorship System
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600">
                    Connect with experienced mentors and grow together
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="px-3 py-2 sm:px-4 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Become a Mentor</span>
                <span className="sm:hidden">Mentor</span>
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition font-medium text-sm sm:text-base">
                Profile
              </button>
            </div>
          </div>

          {/* Stats - Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {mentors.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Active Mentors</span>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {activeMentorships.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Active</span>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                89%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Satisfaction</span>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                324
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">Sessions</span>
              </div>
            </div>
          </div>

          {/* Tabs - Mobile optimized */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-1 mb-4 md:mb-6">
            <div className="flex space-x-1">
              <button
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium transition text-xs sm:text-sm ${
                  activeTab === "mentors"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("mentors")}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Find Mentors</span>
                </div>
              </button>
              <button
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium transition text-xs sm:text-sm ${
                  activeTab === "requests"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("requests")}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">My Requests</span>
                </div>
              </button>
              <button
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium transition text-xs sm:text-sm ${
                  activeTab === "my-mentorships"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("my-mentorships")}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Active</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activeTab === "mentors" && (
          <>
            {/* Search and Filter - Mobile optimized */}
            <div className="mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search mentors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
                  />
                </div>
                <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium whitespace-nowrap transition text-xs sm:text-sm ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {category === "all"
                        ? "All"
                        : getCategoryName(category).split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mentors Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md sm:hover:shadow-lg transition-shadow"
                >
                  <div className="p-4 sm:p-6">
                    {/* Mentor Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${mentor.imageColor} flex items-center justify-center`}
                        >
                          <Users
                            className={`w-5 h-5 sm:w-8 sm:h-8 ${mentor.textColor}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-xl font-bold text-gray-900 truncate">
                            {mentor.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            {mentor.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {mentor.company}
                          </p>
                        </div>
                      </div>
                      {mentor.isAvailable ? (
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-100 text-green-700 rounded text-xs font-medium shrink-0">
                          Available
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium shrink-0">
                          Busy
                        </span>
                      )}
                    </div>

                    {/* Bio */}
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {mentor.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {mentor.expertise.slice(0, 2).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                        {mentor.expertise.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                            +{mentor.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          {mentor.rating}
                        </div>
                        <div className="text-xs text-gray-600 flex items-center justify-center gap-0.5 sm:gap-1">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">Rating</span>
                          <span className="sm:hidden">Rate</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          {mentor.reviews}
                        </div>
                        <div className="text-xs text-gray-600">Reviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          {mentor.sessionsConducted}
                        </div>
                        <div className="text-xs text-gray-600">Sessions</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 sm:gap-3">
                      <button className="flex-1 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm sm:text-base">
                        Request
                      </button>
                      <button className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredMentors.length === 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  No mentors found
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === "requests" && (
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Mentorship Requests
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {mentorshipRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                              To: {request.mentorName}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">
                              From: {request.studentName}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-2 line-clamp-2">
                          {request.message}
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-3 flex-wrap">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                            {getCategoryName(request.category)
                              .split(" ")
                              .map((word, i) =>
                                i === 0
                                  ? word.charAt(0).toUpperCase() + word.slice(1)
                                  : word,
                              )
                              .join(" ")}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {new Date(request.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(
                            request.status,
                          )}`}
                        >
                          {request.status.charAt(0).toUpperCase() +
                            request.status.slice(1)}
                        </span>
                        {request.status === "pending" && (
                          <button className="px-2 sm:px-4 py-1 sm:py-2 text-red-600 hover:text-red-800 text-xs sm:text-sm font-medium whitespace-nowrap">
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {mentorshipRequests.length === 0 && (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    No mentorship requests
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Start by requesting mentorship from available mentors
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "my-mentorships" && (
          <div className="space-y-4 sm:space-y-6">
            {/* Active Mentorships */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Active Mentorships
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {activeMentorships.map((mentorship) => (
                  <div
                    key={mentorship.id}
                    className="p-4 sm:p-6 border border-gray-200 rounded-lg sm:rounded-xl hover:shadow-sm sm:hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                          {mentorship.mentorName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Mentorship Program
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium shrink-0">
                        Active
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{mentorship.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-purple-600 h-1.5 sm:h-2 rounded-full"
                          style={{ width: `${mentorship.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Start Date
                        </div>
                        <div className="text-sm sm:text-base font-medium text-gray-900">
                          {new Date(mentorship.startDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Next Session
                        </div>
                        <div className="text-sm sm:text-base font-medium text-gray-900">
                          {new Date(
                            mentorship.nextSession,
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                      <div className="text-xs sm:text-sm text-gray-600">
                        {mentorship.sessionsCompleted} of{" "}
                        {mentorship.totalSessions} sessions completed
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm sm:text-base">
                          Join
                        </button>
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {activeMentorships.length === 0 && (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    No active mentorships
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Start a mentorship by requesting a mentor
                  </p>
                </div>
              )}
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Upcoming Sessions
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                          Session with Dr. Sarah Johnson
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">
                          Topic: System Design Interview Prep
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm sm:text-base font-medium text-gray-900">
                        Today, 4:00 PM
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        30 minutes
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex justify-end gap-2 sm:gap-3">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium text-sm sm:text-base">
                      Cancel
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm sm:text-base">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How it Works - Responsive */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl sm:rounded-2xl border border-purple-200 p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            How Our Mentorship Program Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                Find a Mentor
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Browse verified mentors by expertise, availability, and ratings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                Send Request
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Send personalized requests outlining your goals and
                expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                Schedule Sessions
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Plan regular sessions and set milestones for your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                Achieve Goals
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Track progress, complete assignments, achieve objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Ready to accelerate your growth? Find the perfect mentor today!
          </p>
          <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium text-sm sm:text-base shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipSystemPage;
