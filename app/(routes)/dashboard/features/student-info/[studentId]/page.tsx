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
  Edit2,
  Check,
  X,
  Camera,
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
  Bell,
  Settings,
} from "lucide-react";

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ankit Kumar",
    title: "Full Stack Developer & Student",
    email: "ankit.kumar@email.com",
    phone: "+91 98765 43210",
    location: "New Delhi, India",
    bio: "Passionate full-stack developer specializing in modern web technologies. Currently pursuing Computer Science while building innovative solutions. Love exploring AI/ML and cloud technologies.",
    education: "B.Tech Computer Science - IIT Delhi",
    experience: "3+ years",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "AWS",
      "GraphQL",
      "Python",
      "Docker",
    ],
    github: "github.com/ankit",
    linkedin: "linkedin.com/in/ankit",
    portfolio: "ankit.dev",
  });

  const [tempProfile, setTempProfile] = useState(profile);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

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
      icon: <Globe className="w-5 h-5" />,
      label: "Portfolio",
      url: "#",
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    },
  ];

  const stats = [
    {
      label: "Projects",
      value: "24",
      icon: <Briefcase className="w-5 h-5" />,
      change: "+4 this month",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      label: "Certifications",
      value: "8",
      icon: <Award className="w-5 h-5" />,
      change: "2 pending",
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Connections",
      value: "348",
      icon: <Users className="w-5 h-5" />,
      change: "+12 this week",
      color: "bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700",
      iconBg: "bg-violet-100 text-violet-600",
    },
    {
      label: "Contributions",
      value: "1.2k",
      icon: <TrendingUp className="w-5 h-5" />,
      change: "Active streak: 45 days",
      color: "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700",
      iconBg: "bg-amber-100 text-amber-600",
    },
  ];

  const recentActivities = [
    {
      title: "Published article on Next.js 14",
      time: "2 hours ago",
      type: "article",
      badge: "New",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Completed Advanced React certification",
      time: "1 day ago",
      type: "certification",
      badge: "Certified",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Joined Web Development Club as Lead",
      time: "3 days ago",
      type: "community",
      badge: "Leadership",
      color: "bg-purple-50 text-purple-700",
    },
    {
      title: "Open sourced new UI library",
      time: "1 week ago",
      type: "open-source",
      badge: "Trending",
      color: "bg-amber-50 text-amber-700",
    },
  ];

  const quickActions = [
    {
      label: "Download CV",
      icon: <Download className="w-4 h-4" />,
      action: () => alert("Downloading CV..."),
      color: "hover:bg-blue-50",
    },
    {
      label: "Share Profile",
      icon: <Share2 className="w-4 h-4" />,
      action: () => alert("Sharing profile..."),
      color: "hover:bg-purple-50",
    },
    {
      label: "Notifications",
      icon: <Bell className="w-4 h-4" />,
      action: () => alert("Notification settings"),
      color: "hover:bg-amber-50",
    },
    {
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      action: () => alert("Opening settings"),
      color: "hover:bg-gray-50",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Profile Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back, Ankit! Manage your profile and settings
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4" />
              Upgrade Plan
            </button>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </div>
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
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <button className="absolute bottom-2 right-2 p-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition shadow-lg">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Name & Title */}
                  <div className="mt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        {isEditing ? (
                          <input
                            type="text"
                            value={tempProfile.name}
                            onChange={(e) =>
                              setTempProfile({
                                ...tempProfile,
                                name: e.target.value,
                              })
                            }
                            className="text-2xl md:text-3xl font-bold bg-gray-100 rounded-lg px-4 py-2 w-full"
                          />
                        ) : (
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {profile.name}
                          </h2>
                        )}

                        {isEditing ? (
                          <input
                            type="text"
                            value={tempProfile.title}
                            onChange={(e) =>
                              setTempProfile({
                                ...tempProfile,
                                title: e.target.value,
                              })
                            }
                            className="text-gray-600 bg-gray-100 rounded-lg px-4 py-2 w-full mt-2"
                          />
                        ) : (
                          <p className="text-gray-600 mt-1 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            {profile.title}
                          </p>
                        )}
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`${stat.color} rounded-xl p-4 hover:shadow-md transition-all cursor-pointer border border-gray-200`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                          {stat.icon}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About & Skills */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    About
                  </h3>
                  {isEditing ? (
                    <textarea
                      value={tempProfile.bio}
                      onChange={(e) =>
                        setTempProfile({
                          ...tempProfile,
                          bio: e.target.value,
                        })
                      }
                      className="w-full h-32 p-4 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                      placeholder="Tell your story..."
                    />
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {profile.bio}
                    </p>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Top Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg border border-purple-200 font-medium hover:bg-purple-100 transition cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Recent Activity
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg ${activity.color} hover:shadow-sm transition border border-gray-200`}
                  >
                    <div className="p-3 rounded-lg bg-white text-gray-600">
                      {activity.type === "article" && (
                        <FileText className="w-5 h-5" />
                      )}
                      {activity.type === "certification" && (
                        <Award className="w-5 h-5" />
                      )}
                      {activity.type === "community" && (
                        <Users className="w-5 h-5" />
                      )}
                      {activity.type === "open-source" && (
                        <Github className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-white text-gray-700 rounded-full border border-gray-300">
                      {activity.badge}
                    </span>
                  </div>
                ))}
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
                      <div className="p-2 rounded-md bg-white text-gray-600">
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

            {/* Personal Info Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">
                  Personal Info
                </h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-lg hover:bg-gray-50 transition"
                >
                  {isEditing ? (
                    <X className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Edit2 className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <InfoField
                  icon={<Mail className="w-4 h-4 text-blue-600" />}
                  label="Email"
                  value={profile.email}
                  isEditing={isEditing}
                  onChange={(value) =>
                    setTempProfile({ ...tempProfile, email: value })
                  }
                />
                <InfoField
                  icon={<Phone className="w-4 h-4 text-green-600" />}
                  label="Phone"
                  value={profile.phone}
                  isEditing={isEditing}
                  onChange={(value) =>
                    setTempProfile({ ...tempProfile, phone: value })
                  }
                />
                <InfoField
                  icon={<MapPin className="w-4 h-4 text-red-600" />}
                  label="Location"
                  value={profile.location}
                  isEditing={isEditing}
                  onChange={(value) =>
                    setTempProfile({ ...tempProfile, location: value })
                  }
                />
                <InfoField
                  icon={<Calendar className="w-4 h-4 text-purple-600" />}
                  label="Experience"
                  value={profile.experience}
                  isEditing={isEditing}
                  onChange={(value) =>
                    setTempProfile({ ...tempProfile, experience: value })
                  }
                />
              </div>

              {isEditing && (
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Connect With Me
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

            {/* Education Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
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
                    <p className="text-sm text-gray-600 mt-1">2020 - 2024</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-600">
                        CGPA: 9.2/10
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
  isEditing,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div>{icon}</div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 bg-gray-50 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition text-sm"
        />
      ) : (
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      )}
    </div>
  );
};

export default Page;
