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
  X,
  Camera,
  Linkedin,
  Github,
  Twitter,
  Award,
  Users,
  FileText,
  ChevronRight,
  TrendingUp,
  Zap,
  Sparkles,
  Download,
  Share2,
  Bell,
  Settings,
  GraduationCap,
  Clock,
  Building,
  DollarSign,
  MessageCircle,
  Star,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ExternalLink,
  Book,
  Search,
  Target,
  Brain,
  Code,
  Database,
  Cloud,
  Server,
  Cpu,
  GitBranch,
  Layers,
  Package,
  Terminal,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon,
  Briefcase as BriefcaseIcon,
  Award as AwardIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Bell as BellIcon,
  Settings as SettingsIcon,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  ExternalLink as ExternalLinkIcon,
  Search as SearchIcon,
  Target as TargetIcon,
  Brain as BrainIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Server as ServerIcon,
  Cpu as CpuIcon,
  GitBranch as GitBranchIcon,
  Layers as LayersIcon,
  Package as PackageIcon,
  Terminal as TerminalIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
} from "lucide-react";
import Link from "next/link";

const MentorProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const [profile, setProfile] = useState({
    // Personal Information
    id: 1,
    firstName: "Dr. Sarah",
    lastName: "Chen",
    fullName: "Dr. Sarah Chen",
    title: "Professor of Computer Science & Research Lead",
    email: "sarah.chen@university.edu",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate educator and researcher with 15+ years of experience in AI/ML and Distributed Systems. Committed to mentoring the next generation of tech leaders. Published over 50 research papers in top-tier conferences.",
    education: "PhD in Computer Science - Stanford University",
    experience: "15 years",
    designation: "Professor & Department Head",
    department: "Computer Science & Engineering",
    qualification: "PhD, Post Doctorate",
    specialization:
      "Artificial Intelligence, Machine Learning, Distributed Systems",
    currentOrganization: "Tech University",

    // Academic Information
    areasOfExpertise: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Distributed Systems",
      "Cloud Computing",
      "Big Data Analytics",
      "Research Methodology",
    ],
    researchInterests: [
      "Explainable AI",
      "Federated Learning",
      "Edge Computing",
      "AI Ethics",
      "Quantum Machine Learning",
    ],

    // Mentor Profile
    mentorType: "Academic & Research Mentor",
    maxStudents: "10",
    availability: "Full Time",
    consultationHours: "Mon-Wed: 2 PM - 5 PM, Fri: 10 AM - 12 PM",
    consultationMode: "Hybrid (In-person & Online)",
    feeType: "Department Funded",
    feeAmount: "",

    // Contact & Social
    officeLocation: "Tech Building, Room 405",
    personalWebsite: "https://sarahchen.dev",
    linkedinProfile: "https://linkedin.com/in/sarahchen",
    googleScholar: "https://scholar.google.com/citations?user=sarahchen",
    github: "https://github.com/sarahchen",

    // Status
    isAvailable: true,
    isVerified: true,
    joinDate: "2016-08-15",
  });

  const [tempProfile, setTempProfile] = useState(profile);

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

  const recentActivities = [
    {
      title: "Published paper on Federated Learning in IEEE",
      time: "3 days ago",
      type: "publication",
      badge: "Published",
      color: "bg-blue-50 text-blue-700",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Conducted workshop on AI Ethics",
      time: "1 week ago",
      type: "workshop",
      badge: "Completed",
      color: "bg-emerald-50 text-emerald-700",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "New mentee assigned: Alex Johnson",
      time: "2 weeks ago",
      type: "mentorship",
      badge: "New",
      color: "bg-purple-50 text-purple-700",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: "Research grant approved: $250,000",
      time: "3 weeks ago",
      type: "grant",
      badge: "Approved",
      color: "bg-green-50 text-green-700",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const currentMentees = [
    {
      name: "Alex Johnson",
      program: "PhD in CS",
      startDate: "2023-09-15",
      progress: 75,
      nextMeeting: "Tomorrow, 3:00 PM",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Maria Garcia",
      program: "M.Tech AI",
      startDate: "2023-08-20",
      progress: 60,
      nextMeeting: "Friday, 11:00 AM",
      avatarColor: "bg-purple-500",
    },
    {
      name: "David Kim",
      program: "B.Tech CSE",
      startDate: "2024-01-10",
      progress: 40,
      nextMeeting: "Next Week",
      avatarColor: "bg-green-500",
    },
    {
      name: "Sarah Miller",
      program: "PhD in ML",
      startDate: "2022-11-05",
      progress: 90,
      nextMeeting: "Today, 2:00 PM",
      avatarColor: "bg-amber-500",
    },
  ];

  const quickActions = [
    {
      label: "Schedule Meeting",
      icon: <Calendar className="w-4 h-4" />,
      action: () => alert("Opening calendar..."),
      color: "hover:bg-blue-50",
    },
    {
      label: "Send Message",
      icon: <MessageCircle className="w-4 h-4" />,
      action: () => alert("Opening chat..."),
      color: "hover:bg-green-50",
    },
    {
      label: "Download CV",
      icon: <Download className="w-4 h-4" />,
      action: () => alert("Downloading CV..."),
      color: "hover:bg-purple-50",
    },
    {
      label: "Share Profile",
      icon: <Share2 className="w-4 h-4" />,
      action: () => alert("Sharing profile..."),
      color: "hover:bg-amber-50",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: profile.linkedinProfile,
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },

    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      url: profile.personalWebsite,
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    },
  ];

  const expertiseIcons = [
    <Brain className="w-5 h-5" />,
    <Code className="w-5 h-5" />,
    <Database className="w-5 h-5" />,
    <Cloud className="w-5 h-5" />,
    <Server className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <GitBranch className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
  ];

  const researchIcons = [
    <Target className="w-5 h-5" />,
    <Search className="w-5 h-5" />,
    <Package className="w-5 h-5" />,
    <Terminal className="w-5 h-5" />,
    <Shield className="w-5 h-5" />,
  ];

  if (!mounted) return null;

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
  }) => (
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/mentors">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mentor Profile
              </h1>
              <p className="text-gray-600 mt-2">
                View and manage mentor details
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              Contact Mentor
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-2 text-sm">
              <Edit2 className="w-4 h-4" />
              Edit Profile
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
                <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Profile Content */}
                <div className="px-6 pb-6 -mt-16 relative">
                  {/* Avatar with Status Badges */}
                  <div className="relative w-32 h-32">
                    <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-indigo-400 to-purple-500 shadow-xl flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>

                    {/* Verification Badge */}
                    {profile.isVerified && (
                      <div className="absolute -top-2 right-0">
                        <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-full shadow-lg border border-emerald-200">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          <span className="text-xs font-semibold text-emerald-700">
                            Verified
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Availability Badge */}
                    <div className="absolute bottom-2 left-0">
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-full shadow-lg ${profile.isAvailable ? "bg-white border border-green-200" : "bg-gray-100 border border-gray-200"}`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${profile.isAvailable ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                        ></div>
                        <span className="text-xs font-semibold text-gray-700">
                          {profile.isAvailable ? "Available" : "Busy"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="mt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                          {profile.fullName}
                        </h2>
                        <p className="text-gray-600 mt-1 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          {profile.title}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {profile.department}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                            {profile.mentorType}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About & Expertise */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    About
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.areasOfExpertise.map((expertise, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                      >
                        <div className="p-2 bg-white rounded-lg text-gray-600">
                          {expertiseIcons[index] || (
                            <Code className="w-5 h-5" />
                          )}
                        </div>
                        <span className="font-medium text-gray-800">
                          {expertise}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research Interests */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.researchInterests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-700 rounded-lg border border-red-200"
                      >
                        {researchIcons[index] || <Search className="w-4 h-4" />}
                        <span className="font-medium">{interest}</span>
                      </div>
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
                      {activity.icon}
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

            {/* Mentor Details Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Mentor Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Building className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Department</p>
                    <p className="text-sm text-gray-600">
                      {profile.department}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Qualification</p>
                    <p className="text-sm text-gray-600">
                      {profile.qualification}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Experience</p>
                    <p className="text-sm text-gray-600">
                      {profile.experience}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Consultation Hours
                    </p>
                    <p className="text-sm text-gray-600">
                      {profile.consultationHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Office Location</p>
                    <p className="text-sm text-gray-600">
                      {profile.officeLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Fee Structure</p>
                    <p className="text-sm text-gray-600">{profile.feeType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition group"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-800">{profile.email}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition group"
                >
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-800">{profile.phone}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${link.color} hover:shadow-md transition flex flex-col items-center justify-center gap-2 border border-gray-200`}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
