"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Zap,
  Target,
  Sparkles,
  GraduationCap,
  Briefcase,
  Globe,
  MessageSquare,
  ArrowRight,
  Play,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const announcements = [
    {
      id: 1,
      title: "Campus Hackathon 2024",
      description: "Annual coding competition starts next week",
      time: "2 hours ago",
      type: "event",
      urgent: true,
    },
    {
      id: 2,
      title: "New Course: AI & Machine Learning",
      description: "Enrollments open for Spring 2024",
      time: "1 day ago",
      type: "academic",
      urgent: false,
    },
    {
      id: 3,
      title: "Library Extended Hours",
      description: "Open until 11 PM during exam season",
      time: "2 days ago",
      type: "campus",
      urgent: false,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Talk: Web 3.0",
      date: "Mar 15",
      time: "3:00 PM",
      location: "Auditorium",
      type: "tech",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "Mar 18",
      time: "10:00 AM",
      location: "Main Hall",
      type: "career",
    },
    {
      id: 3,
      title: "Cultural Fest",
      date: "Mar 22",
      time: "5:00 PM",
      location: "Amphitheater",
      type: "cultural",
    },
  ];

  const quickStats = [
    {
      label: "Active Courses",
      value: "12",
      change: "+2",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Upcoming Deadlines",
      value: "8",
      change: "-3",
      icon: <Clock className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Peer Connections",
      value: "156",
      change: "+12",
      icon: <Users className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Campus Ranking",
      value: "#24",
      change: "↑3",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const courses = [
    {
      id: 1,
      name: "Advanced Web Development",
      code: "CS401",
      progress: 75,
      instructor: "Dr. Sharma",
      nextClass: "Tomorrow, 10 AM",
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      code: "CS302",
      progress: 90,
      instructor: "Prof. Gupta",
      nextClass: "Today, 2 PM",
    },
    {
      id: 3,
      name: "Machine Learning",
      code: "CS501",
      progress: 60,
      instructor: "Dr. Patel",
      nextClass: "Monday, 11 AM",
    },
  ];

  const campusNews = [
    {
      id: 1,
      title: "Research Breakthrough in Quantum Computing",
      category: "Research",
      readTime: "3 min",
    },
    {
      id: 2,
      title: "Student Wins National Coding Championship",
      category: "Achievement",
      readTime: "2 min",
    },
    {
      id: 3,
      title: "New Innovation Lab Opens",
      category: "Campus",
      readTime: "4 min",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition mr-2"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    CampusHub
                  </h1>
                  <p className="text-xs text-gray-500">Student Portal</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, events, or resources..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-xl">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="font-medium">{currentTime}</span>
              </div>
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all">
                <Zap className="w-4 h-4" />
                Quick Access
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition">
                    Dashboard
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Quick Access
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Welcome back,{" "}
                    <span className="text-yellow-300">Ankit!</span>
                  </h1>
                  <p className="text-blue-100">
                    Ready to make today productive? You have 3 classes and 2
                    assignments due.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">24°C</div>
                    <div className="text-sm opacity-90">Sunny, Delhi</div>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Start Day
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}
                    >
                      <div
                        className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        stat.change.startsWith("+")
                          ? "text-green-600"
                          : stat.change.startsWith("-")
                            ? "text-red-600"
                            : "text-blue-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Current Courses */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Current Courses
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {course.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500">
                            {course.code}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">
                            {course.instructor}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">
                          {course.progress}%
                        </div>
                        <div className="text-xs text-gray-500">Completed</div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Next: {course.nextClass}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus News */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                Campus News & Updates
              </h2>

              <div className="space-y-4">
                {campusNews.map((news) => (
                  <div
                    key={news.id}
                    className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {news.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {news.readTime} read
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                          {news.title}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  Announcements
                </h2>
                <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full font-medium">
                  {announcements.filter((a) => a.urgent).length} Urgent
                </span>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-4 rounded-xl border ${
                      announcement.urgent
                        ? "border-orange-200 bg-orange-50/50"
                        : "border-gray-200 hover:border-gray-300"
                    } transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          announcement.urgent
                            ? "bg-orange-100 text-orange-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {announcement.type === "event" ? (
                          <Calendar className="w-4 h-4" />
                        ) : announcement.type === "academic" ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-800">
                            {announcement.title}
                          </h3>
                          {announcement.urgent && (
                            <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {announcement.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{announcement.time}</span>
                          <span className="capitalize">
                            {announcement.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Upcoming Events
              </h2>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 rounded-xl border border-gray-200 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {event.date} • {event.time}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === "tech"
                            ? "bg-blue-100 text-blue-600"
                            : event.type === "career"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {event.type}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Quick Links
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex flex-col items-center justify-center gap-2"
                >
                  <Briefcase className="w-6 h-6" />
                  <span className="text-sm font-medium">Career Portal</span>
                </a>
                <a
                  href="#"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex flex-col items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  <span className="text-sm font-medium">Library</span>
                </a>
                <a
                  href="#"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex flex-col items-center justify-center gap-2"
                >
                  <Users className="w-6 h-6" />
                  <span className="text-sm font-medium">Clubs</span>
                </a>
                <a
                  href="#"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition flex flex-col items-center justify-center gap-2"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-sm font-medium">Forums</span>
                </a>
              </div>
            </div>

            {/* Daily Motivation */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Daily Motivation</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">- Nelson Mandela</span>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition text-sm font-medium">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Ready for the Next Challenge?
              </h3>
              <p className="text-emerald-100">
                Explore new courses, join clubs, or participate in campus
                events.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition flex items-center gap-2">
                <Play className="w-4 h-4" />
                Explore Courses
              </button>
              <button className="px-6 py-3 bg-emerald-700/50 text-white rounded-xl font-semibold hover:bg-emerald-700 transition">
                View Events
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-800">CampusHub</div>
                <div className="text-sm text-gray-600">Student Portal v2.1</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-600 mb-2">
                © 2024 University Name. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
