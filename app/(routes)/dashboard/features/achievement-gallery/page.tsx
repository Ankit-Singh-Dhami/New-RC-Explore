"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Trophy,
  Award,
  Star,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Globe,
  GraduationCap,
  Medal,
  Crown,
  Sparkles,
  ExternalLink,
  Download,
  Share2,
  Heart,
  ChevronDown,
  Grid,
  List,
  X,
} from "lucide-react";

const AchievementsGalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [likedAchievements, setLikedAchievements] = useState<number[]>([]);
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [
    {
      id: "all",
      name: "All Achievements",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: "academic",
      name: "Academic Excellence",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "sports",
      name: "Sports & Athletics",
      icon: <Medal className="w-4 h-4" />,
    },
    {
      id: "research",
      name: "Research & Innovation",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "cultural",
      name: "Cultural Events",
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: <Crown className="w-4 h-4" />,
    },
    {
      id: "international",
      name: "International",
      icon: <Globe className="w-4 h-4" />,
    },
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020"];

  const achievements = [
    {
      id: 1,
      title: "National Hackathon Champions 2024",
      description:
        "Won first prize in the National AI Hackathon against 500+ teams",
      category: "research",
      year: "2024",
      level: "national",
      team: "Team Quantum",
      members: ["Rohan Sharma", "Priya Patel", "Amit Kumar"],
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
      stats: {
        participants: "500+ teams",
        prize: "₹5,00,000",
        duration: "48 hours",
      },
      likes: 245,
      shares: 42,
      featured: true,
    },
    {
      id: 2,
      title: "University Sports Championship",
      description: "Won overall championship in inter-university sports meet",
      category: "sports",
      year: "2024",
      level: "university",
      team: "College Sports Team",
      members: ["Sports Club"],
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
      stats: {
        gold: "12 medals",
        silver: "8 medals",
        bronze: "5 medals",
      },
      likes: 189,
      shares: 28,
      featured: true,
    },
    {
      id: 3,
      title: "Best Research Paper Award",
      description: "Published research paper in IEEE International Conference",
      category: "research",
      year: "2023",
      level: "international",
      team: "Research Scholars",
      members: ["Dr. Anjali Singh", "Karan Verma"],
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
      stats: {
        citations: "50+",
        conference: "IEEE International",
        impact: "High",
      },
      likes: 156,
      shares: 35,
      featured: false,
    },
    {
      id: 4,
      title: "Cultural Fest Excellence Award",
      description:
        "Recognized as best cultural team at National Youth Festival",
      category: "cultural",
      year: "2023",
      level: "national",
      team: "Cultural Club",
      members: ["Dance Team", "Music Band", "Drama Society"],
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
      stats: {
        events: "8 categories",
        awards: "15 trophies",
        participants: "200+ students",
      },
      likes: 212,
      shares: 41,
      featured: false,
    },
    {
      id: 5,
      title: "Student Council Leadership Award",
      description:
        "Outstanding contribution to student governance and activities",
      category: "leadership",
      year: "2024",
      level: "college",
      team: "Student Council",
      members: ["President", "Secretaries", "Committee Heads"],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
      stats: {
        initiatives: "25+",
        volunteers: "150+",
        events: "50+",
      },
      likes: 178,
      shares: 29,
      featured: false,
    },
    {
      id: 6,
      title: "International Robotics Competition",
      description:
        "Secured 2nd position in International Robotics Championship",
      category: "international",
      year: "2022",
      level: "international",
      team: "Robotics Club",
      members: ["Tech Team", "Engineering Students"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      stats: {
        countries: "30+",
        teams: "200+",
        rounds: "5 stages",
      },
      likes: 198,
      shares: 38,
      featured: true,
    },
    {
      id: 7,
      title: "Academic Topper Awards",
      description: "Students secured top ranks in university examinations",
      category: "academic",
      year: "2024",
      level: "university",
      team: "Merit Students",
      members: ["University Toppers"],
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
      stats: {
        toppers: "15 students",
        average: "95%+",
        distinctions: "100%",
      },
      likes: 165,
      shares: 22,
      featured: false,
    },
    {
      id: 8,
      title: "Startup Funding Success",
      description: "College startup secured $1M in seed funding",
      category: "research",
      year: "2023",
      level: "national",
      team: "Innovation E-Cell",
      members: ["Startup Founders", "Mentors"],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      stats: {
        funding: "$1M",
        investors: "5 firms",
        valuation: "$5M",
      },
      likes: 231,
      shares: 45,
      featured: true,
    },
  ];

  const stats = {
    totalAchievements: achievements.length,
    nationalLevel: achievements.filter((a) => a.level === "national").length,
    internationalLevel: achievements.filter((a) => a.level === "international")
      .length,
    currentYear: achievements.filter((a) => a.year === "2024").length,
  };

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      achievement.team.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || achievement.category === selectedCategory;

    const matchesYear =
      selectedYear === "all" || achievement.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  const toggleLike = (id: number) => {
    setLikedAchievements((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleAchievementClick = (achievement: any) => {
    setSelectedAchievement(achievement);
    setShowAchievementModal(true);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "international":
        return "bg-purple-100 text-purple-800";
      case "national":
        return "bg-red-100 text-red-800";
      case "university":
        return "bg-blue-100 text-blue-800";
      case "college":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-100 text-blue-800";
      case "sports":
        return "bg-green-100 text-green-800";
      case "research":
        return "bg-orange-100 text-orange-800";
      case "cultural":
        return "bg-purple-100 text-purple-800";
      case "leadership":
        return "bg-yellow-100 text-yellow-800";
      case "international":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const AchievementModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {selectedAchievement && (
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="pr-2">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {selectedAchievement.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getLevelColor(selectedAchievement.level)}`}
                  >
                    {selectedAchievement.level.charAt(0).toUpperCase() +
                      selectedAchievement.level.slice(1)}{" "}
                    Level
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {selectedAchievement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                  {selectedAchievement.description}
                </p>
              </div>
              <button
                onClick={() => setShowAchievementModal(false)}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Image */}
                <div className="rounded-lg sm:rounded-xl overflow-hidden">
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>

                {/* Team & Members */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    Team & Participants
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        Team: {selectedAchievement.team}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Year: {selectedAchievement.year}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                        Key Members:
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {selectedAchievement.members.map(
                          (member: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                            >
                              {member}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    Achievement Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {Object.entries(selectedAchievement.stats).map(
                      ([key, value], index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-2 sm:p-3 rounded-lg"
                        >
                          <div className="text-xs sm:text-sm text-gray-600 capitalize">
                            {key}
                          </div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">
                            {value as string}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Social Actions */}
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <button
                        onClick={() => toggleLike(selectedAchievement.id)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${
                          likedAchievements.includes(selectedAchievement.id)
                            ? "bg-red-50 text-red-600"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${likedAchievements.includes(selectedAchievement.id) ? "fill-current" : ""}`}
                        />
                        <span>
                          {selectedAchievement.likes +
                            (likedAchievements.includes(selectedAchievement.id)
                              ? 1
                              : 0)}
                        </span>
                      </button>
                      <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base">
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{selectedAchievement.shares}</span>
                      </button>
                    </div>
                    <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      Download Certificate
                    </button>
                  </div>
                </div>

                {/* Category & Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    Details
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm sm:text-base">
                        Category
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getCategoryColor(selectedAchievement.category)}`}
                      >
                        {
                          categories.find(
                            (c) => c.id === selectedAchievement.category,
                          )?.name
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm sm:text-base">
                        Year
                      </span>
                      <span className="font-medium text-gray-900 text-sm sm:text-base">
                        {selectedAchievement.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm sm:text-base">
                        Level
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getLevelColor(selectedAchievement.level)}`}
                      >
                        {selectedAchievement.level.charAt(0).toUpperCase() +
                          selectedAchievement.level.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    Celebration & Recognition
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    This achievement was celebrated with an award ceremony
                    attended by faculty, students, and distinguished guests. The
                    team received certificates, trophies, and special
                    recognition in the college annual report.
                  </p>
                </div>

                {/* Impact */}
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    Impact & Recognition
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 sm:mt-1.5 flex-shrink-0"></div>
                      <span>Featured in college magazine and newsletter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 sm:mt-1.5 flex-shrink-0"></div>
                      <span>Special mention in annual convocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 sm:mt-1.5 flex-shrink-0"></div>
                      <span>Displayed in college achievement hall</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  Achievements Gallery
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  Celebrating excellence and success stories
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
              <button className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Submit Achievement</span>
                <span className="sm:hidden">Submit</span>
              </button>
              <button className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-xs sm:text-sm md:text-base">
                View All
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-200">
              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                {stats.totalAchievements}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                Total Achievements
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-200">
              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                {stats.internationalLevel}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                International
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-200">
              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                {stats.nationalLevel}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                National
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-200">
              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                {stats.currentYear}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                2024 Achievements
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm sm:text-base"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {/* Category Filter */}
              <div className="relative">
                <div
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Category
                  </span>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-1 sm:p-2 max-h-60 overflow-y-auto">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setShowCategoryDropdown(false);
                          }}
                          className={`w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm flex items-center gap-2 transition ${
                            selectedCategory === category.id
                              ? "bg-blue-50 text-blue-600"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          {category.icon}
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Year Filter */}
              <div className="relative">
                <div
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setShowYearDropdown(!showYearDropdown)}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Year</span>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                {showYearDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-32 sm:w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-1 sm:p-2">
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setShowYearDropdown(false);
                          }}
                          className={`w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm transition ${
                            selectedYear === year
                              ? "bg-blue-50 text-blue-600"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          {year === "all" ? "All Years" : year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-0.5 sm:p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 sm:p-2 rounded transition ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 sm:p-2 rounded transition ${
                    viewMode === "list"
                      ? "bg-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {isMobile
                  ? categories
                      .find((c) => c.id === selectedCategory)
                      ?.name.split(" ")[0]
                  : categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedYear !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Year: {selectedYear}
                <button
                  onClick={() => setSelectedYear("all")}
                  className="ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                Search: "
                {searchQuery.length > 10
                  ? searchQuery.substring(0, 10) + "..."
                  : searchQuery}
                "
                <button onClick={() => setSearchQuery("")} className="ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Categories Quick Filter - Horizontal Scroll on Mobile */}
        <div className="mb-4 sm:mb-6 overflow-x-auto">
          <div className="flex gap-1 sm:gap-2 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.icon}
                {isMobile ? category.name.split(" ")[0] : category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => handleAchievementClick(achievement)}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {achievement.featured && (
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5" />
                      <span className="hidden sm:inline">Featured</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/70 text-white rounded-full text-xs">
                    {achievement.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                        {achievement.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 line-clamp-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-xs ${getCategoryColor(achievement.category)}`}
                    >
                      {
                        categories
                          .find((c) => c.id === achievement.category)
                          ?.name.split(" ")[0]
                      }
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-xs ${getLevelColor(achievement.level)}`}
                    >
                      {achievement.level.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center mb-2 sm:mb-3">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-gray-900">
                        {achievement.likes +
                          (likedAchievements.includes(achievement.id) ? 1 : 0)}
                      </div>
                      <div className="text-xs text-gray-600">Likes</div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-gray-900">
                        {achievement.shares}
                      </div>
                      <div className="text-xs text-gray-600">Shares</div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-gray-900">
                        {achievement.members.length}
                      </div>
                      <div className="text-xs text-gray-600">Members</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1 sm:gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(achievement.id);
                      }}
                      className={`flex-1 py-1.5 sm:py-2 rounded-lg transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm ${
                        likedAchievements.includes(achievement.id)
                          ? "bg-red-50 text-red-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 sm:w-4 h-4 ${likedAchievements.includes(achievement.id) ? "fill-current" : ""}`}
                      />
                      Like
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAchievementClick(achievement);
                      }}
                      className="px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer"
                onClick={() => handleAchievementClick(achievement)}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-1/3 relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-40 sm:h-full object-cover"
                    />
                    {achievement.featured && (
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="sm:w-2/3 p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                          {achievement.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                          {achievement.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                      <span
                        className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm ${getCategoryColor(achievement.category)}`}
                      >
                        {isMobile
                          ? categories
                              .find((c) => c.id === achievement.category)
                              ?.name.split(" ")[0]
                          : categories.find(
                              (c) => c.id === achievement.category,
                            )?.name}
                      </span>
                      <span
                        className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm ${getLevelColor(achievement.level)}`}
                      >
                        {isMobile
                          ? achievement.level.charAt(0).toUpperCase()
                          : achievement.level}{" "}
                        Level
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600">
                        Team:{" "}
                        {isMobile
                          ? achievement.team.substring(0, 10) + "..."
                          : achievement.team}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(achievement.id);
                          }}
                          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-lg transition text-xs sm:text-sm ${
                            likedAchievements.includes(achievement.id)
                              ? "text-red-600"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          <Heart
                            className={`w-3 h-3 sm:w-4 h-4 ${likedAchievements.includes(achievement.id) ? "fill-current" : ""}`}
                          />
                          {achievement.likes +
                            (likedAchievements.includes(achievement.id)
                              ? 1
                              : 0)}
                        </button>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm">
                          <Share2 className="w-3 h-3 sm:w-4 h-4" />
                          {achievement.shares}
                        </div>
                      </div>
                      <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-xs sm:text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredAchievements.length === 0 && (
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-6 sm:p-8 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              No achievements found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            Featured Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {achievements
              .filter((a) => a.featured)
              .slice(0, 3)
              .map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer hover:shadow-lg transition"
                  onClick={() => handleAchievementClick(achievement)}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      {achievement.title}
                    </h4>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs ${getLevelColor(achievement.level)}`}
                    >
                      {isMobile
                        ? achievement.level.charAt(0).toUpperCase()
                        : achievement.level}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl border border-blue-200 p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            Have an Achievement to Share?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Celebrate your success with the college community. Share your
            achievements, inspire others, and get recognized for your hard work
            and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base">
              Submit Your Achievement
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm sm:text-base">
              View Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Achievement Modal */}
      {showAchievementModal && <AchievementModal />}
    </div>
  );
};

export default AchievementsGalleryPage;
