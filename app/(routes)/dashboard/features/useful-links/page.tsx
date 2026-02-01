"use client";

import { useState } from "react";
import {
  Search,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Building,
  Users,
  FileText,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Shield,
  Library,
  Briefcase,
  Heart,
  Wifi,
  Coffee,
  Home,
  Star,
  ChevronRight,
  Filter,
  Grid,
  List,
  Bookmark,
  Download,
  Share2,
  ChevronDown,
} from "lucide-react";

const UsefulLinksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [bookmarkedLinks, setBookmarkedLinks] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Links", icon: Home },
    { id: "academic", name: "Academic", icon: BookOpen },
    { id: "administrative", name: "Administrative", icon: Building },
    { id: "student", name: "Student Services", icon: Users },
    { id: "online", name: "Online Portals", icon: Globe },
    { id: "resources", name: "Resources", icon: Library },
    { id: "career", name: "Career", icon: Briefcase },
    { id: "campus", name: "Campus Life", icon: Heart },
  ];

  const usefulLinks = [
    {
      id: 1,
      title: "Student Portal",
      description: "Access grades, course materials, and academic records",
      url: "https://portal.college.edu",
      category: "online",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
      popularity: 4.8,
      isOfficial: true,
      access: "Login required",
    },
    {
      id: 2,
      title: "Library Database",
      description: "Access to millions of journals, books, and research papers",
      url: "https://library.college.edu",
      category: "academic",
      icon: Library,
      color: "bg-purple-100 text-purple-600",
      popularity: 4.6,
      isOfficial: true,
      access: "Campus network",
    },
    {
      id: 3,
      title: "Course Registration",
      description: "Register for courses and manage your schedule",
      url: "https://register.college.edu",
      category: "academic",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      popularity: 4.7,
      isOfficial: true,
      access: "Login required",
    },
    {
      id: 4,
      title: "Tuition Payment",
      description: "Pay tuition fees and view billing statements",
      url: "https://pay.college.edu",
      category: "administrative",
      icon: CreditCard,
      color: "bg-red-100 text-red-600",
      popularity: 4.5,
      isOfficial: true,
      access: "Login required",
    },
    {
      id: 5,
      title: "Career Services",
      description: "Job postings, resume reviews, and career counseling",
      url: "https://careers.college.edu",
      category: "career",
      icon: Briefcase,
      color: "bg-yellow-100 text-yellow-600",
      popularity: 4.4,
      isOfficial: true,
      access: "Public",
    },
    {
      id: 6,
      title: "Health Center",
      description: "Medical services, appointments, and health resources",
      url: "https://health.college.edu",
      category: "student",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      popularity: 4.3,
      isOfficial: true,
      access: "Login required",
    },
    {
      id: 7,
      title: "Campus WiFi",
      description: "Connect to campus wireless network",
      url: "https://wifi.college.edu",
      category: "campus",
      icon: Wifi,
      color: "bg-indigo-100 text-indigo-600",
      popularity: 4.9,
      isOfficial: true,
      access: "Campus network",
    },
    {
      id: 8,
      title: "Academic Calendar",
      description: "Important dates, holidays, and deadlines",
      url: "https://calendar.college.edu",
      category: "academic",
      icon: Calendar,
      color: "bg-orange-100 text-orange-600",
      popularity: 4.7,
      isOfficial: true,
      access: "Public",
    },
    {
      id: 9,
      title: "IT Help Desk",
      description: "Technical support and software downloads",
      url: "https://ithelp.college.edu",
      category: "resources",
      icon: Shield,
      color: "bg-gray-100 text-gray-600",
      popularity: 4.2,
      isOfficial: true,
      access: "Login required",
    },
    {
      id: 10,
      title: "Campus Dining",
      description: "Menus, hours, and meal plan management",
      url: "https://dining.college.edu",
      category: "campus",
      icon: Coffee,
      color: "bg-amber-100 text-amber-600",
      popularity: 4.4,
      isOfficial: true,
      access: "Public",
    },
  ];

  const quickAccessLinks = [
    {
      id: 1,
      title: "Emergency Contacts",
      description: "24/7 emergency numbers",
      icon: Phone,
      url: "tel:+15551234567",
    },
    {
      id: 2,
      title: "Report Issue",
      description: "Submit maintenance requests",
      icon: Shield,
      url: "https://report.college.edu",
    },
    {
      id: 3,
      title: "Lost & Found",
      description: "Report or claim lost items",
      icon: Shield,
      url: "https://lostfound.college.edu",
    },
    {
      id: 4,
      title: "Feedback",
      description: "Share your suggestions",
      icon: Mail,
      url: "https://feedback.college.edu",
    },
  ];

  const filteredLinks = usefulLinks.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || link.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (id: number) => {
    setBookmarkedLinks((prev) =>
      prev.includes(id)
        ? prev.filter((linkId) => linkId !== id)
        : [...prev, id],
    );
  };

  const LinkCard = ({ link }: { link: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${link.color}`}>
              <link.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{link.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{link.access}</span>
                {link.isOfficial && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    Official
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => toggleBookmark(link.id)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Bookmark
              className={`w-4 h-4 ${
                bookmarkedLinks.includes(link.id)
                  ? "text-blue-600 fill-blue-600"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {link.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium ml-1">
                {link.popularity}
              </span>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
              {categories.find((cat) => cat.id === link.category)?.name}
            </span>
          </div>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Visit
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );

  const LinkListItem = ({ link }: { link: any }) => (
    <div className="bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${link.color}`}>
              <link.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-gray-900">{link.title}</h3>
                {link.isOfficial && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    Official
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-500">{link.access}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                  {categories.find((cat) => cat.id === link.category)?.name}
                </span>
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium ml-1">
                    {link.popularity}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleBookmark(link.id)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  bookmarkedLinks.includes(link.id)
                    ? "text-blue-600 fill-blue-600"
                    : "text-gray-400"
                }`}
              />
            </button>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm flex items-center gap-2"
            >
              Visit
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Simplified */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Useful Links
                </h1>
                <p className="text-gray-600">
                  Quick access to all college resources and services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls - Updated */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search links by name, category, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition ${
                        viewMode === "grid"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition ${
                        viewMode === "list"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() =>
                        setShowCategoryDropdown(!showCategoryDropdown)
                      }
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-2"
                    >
                      <Filter className="w-4 h-4" />
                      {selectedCategory === "all"
                        ? "All Categories"
                        : categories.find((c) => c.id === selectedCategory)
                            ?.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${showCategoryDropdown ? "rotate-180" : ""}`}
                      />
                    </button>

                    {showCategoryDropdown && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setShowCategoryDropdown(false);
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition ${
                                selectedCategory === category.id
                                  ? "bg-blue-50 text-blue-600"
                                  : "hover:bg-gray-50 text-gray-700"
                              }`}
                            >
                              <category.icon className="w-4 h-4" />
                              <span className="font-medium">
                                {category.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Links Grid/List - Updated grid layout */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Resources"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredLinks.map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLinks.map((link) => (
                    <LinkListItem key={link.id} link={link} />
                  ))}
                </div>
              )}

              {filteredLinks.length === 0 && (
                <div className="text-center py-12">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No links found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Quick Access */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Quick Access
              </h2>
              <div className="space-y-3">
                {quickAccessLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition group"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <link.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {link.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {link.description}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bookmarked Links */}
            {bookmarkedLinks.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  <Bookmark className="w-5 h-5 inline mr-2 text-blue-600" />
                  Your Bookmarks
                </h2>
                <div className="space-y-3">
                  {usefulLinks
                    .filter((link) => bookmarkedLinks.includes(link.id))
                    .slice(0, 3)
                    .map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className={`p-2 rounded-lg ${link.color}`}>
                          <link.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {link.title}
                          </div>
                          <div className="text-xs text-gray-600 truncate">
                            {link.description}
                          </div>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                    ))}
                  {bookmarkedLinks.length > 3 && (
                    <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2">
                      View all bookmarks
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Most Popular */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                <Star className="w-5 h-5 inline mr-2 text-yellow-500 fill-yellow-500" />
                Most Popular
              </h2>
              <div className="space-y-3">
                {usefulLinks
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 3)
                  .map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className={`p-2 rounded-lg ${link.color}`}>
                        <link.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {link.title}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-gray-600">
                            {link.popularity}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Need Help?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Can't find what you're looking for or experiencing issues?
              </p>
              <div className="space-y-3">
                <a
                  href="https://help.college.edu"
                  className="block text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Visit Help Center
                </a>
                <a
                  href="mailto:support@college.edu"
                  className="block text-center py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition font-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksPage;
