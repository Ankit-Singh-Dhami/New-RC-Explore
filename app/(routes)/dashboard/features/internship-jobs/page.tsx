"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Briefcase,
  Building,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Star,
  Filter,
  ChevronDown,
  Bookmark,
  Share2,
  CheckCircle,
  X,
} from "lucide-react";

const InternshipAndJobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [bookmarkedJobs, setBookmarkedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node)
      ) {
        setShowTypeDropdown(false);
      }
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCategoryDropdown(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper functions
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDaysLeft = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  const jobTypes = [
    "All",
    "Internship",
    "Full-time",
    "Part-time",
    "Remote",
    "On-campus",
  ];
  const categories = [
    "All",
    "Technology",
    "Business",
    "Engineering",
    "Healthcare",
    "Research",
    "Design",
    "Marketing",
  ];
  const locations = [
    "All",
    "On-campus",
    "Remote",
    "Bangalore",
    "Delhi NCR",
    "Mumbai",
    "Hyderabad",
    "Pune",
    "Chennai",
  ];

  const companies = [
    {
      id: "google",
      name: "Google",
      logo: "G",
      color: "bg-blue-100 text-blue-700",
      rating: 4.8,
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "M",
      color: "bg-green-100 text-green-700",
      rating: 4.7,
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "A",
      color: "bg-yellow-100 text-yellow-700",
      rating: 4.6,
    },
    {
      id: "tcs",
      name: "TCS",
      logo: "T",
      color: "bg-purple-100 text-purple-700",
      rating: 4.4,
    },
    {
      id: "infosys",
      name: "Infosys",
      logo: "I",
      color: "bg-red-100 text-red-700",
      rating: 4.3,
    },
  ];

  const jobOpportunities = [
    {
      id: "1",
      title: "Software Development Intern",
      company: "Google",
      companyId: "google",
      type: "Internship",
      category: "Technology",
      location: "Bangalore",
      salary: "₹45,000/month",
      duration: "6 months",
      posted: "2 days ago",
      deadline: "2024-02-15",
      description:
        "Join Google as a Software Development Intern and work on cutting-edge technologies.",
      requirements: [
        "B.Tech/B.E in CS/IT",
        "Strong in DSA",
        "Python/Java/C++",
        "Good problem-solving",
      ],
      skills: ["Python", "Java", "Algorithms", "System Design"],
      applicants: 245,
      urgent: true,
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "Microsoft",
      companyId: "microsoft",
      type: "Internship",
      category: "Technology",
      location: "Remote",
      salary: "₹40,000/month",
      duration: "4 months",
      posted: "1 week ago",
      deadline: "2024-02-20",
      description:
        "Work with Microsoft's data science team on real-world ML projects.",
      requirements: [
        "B.Tech/M.Tech in CS/DS",
        "ML/AI knowledge",
        "Python/R",
        "Statistical analysis",
      ],
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
      applicants: 189,
      urgent: false,
    },
    {
      id: "3",
      title: "Junior Software Engineer",
      company: "Amazon",
      companyId: "amazon",
      type: "Full-time",
      category: "Technology",
      location: "Bangalore",
      salary: "₹12-15 LPA",
      duration: "Permanent",
      posted: "3 days ago",
      deadline: "2024-02-28",
      description:
        "Join Amazon's engineering team to build scalable solutions.",
      requirements: [
        "B.Tech/B.E 2024 batch",
        "70%+ aggregate",
        "Strong CS fundamentals",
        "Projects experience",
      ],
      skills: ["Java", "AWS", "System Design", "Algorithms"],
      applicants: 320,
      urgent: true,
    },
    {
      id: "4",
      title: "Business Analyst Intern",
      company: "TCS",
      companyId: "tcs",
      type: "Internship",
      category: "Business",
      location: "Mumbai",
      salary: "₹30,000/month",
      duration: "3 months",
      posted: "5 days ago",
      deadline: "2024-02-18",
      description:
        "Learn business analysis methodologies and work on client projects.",
      requirements: [
        "MBA/BBA 3rd/4th year",
        "Analytical skills",
        "Excel/PPT",
        "Communication skills",
      ],
      skills: ["Business Analysis", "Excel", "PPT", "Communication"],
      applicants: 156,
      urgent: false,
    },
    {
      id: "5",
      title: "Mechanical Engineering Intern",
      company: "Tata Motors",
      companyId: "tata",
      type: "Internship",
      category: "Engineering",
      location: "Pune",
      salary: "₹35,000/month",
      duration: "6 months",
      posted: "1 week ago",
      deadline: "2024-02-22",
      description: "Work on automotive design and manufacturing processes.",
      requirements: [
        "B.Tech in Mechanical",
        "CAD knowledge",
        "Manufacturing basics",
        "Teamwork",
      ],
      skills: ["AutoCAD", "SolidWorks", "Manufacturing", "Design"],
      applicants: 98,
      urgent: false,
    },
  ];

  const stats = {
    totalJobs: jobOpportunities.length,
    internships: jobOpportunities.filter((j) => j.type === "Internship").length,
    fullTime: jobOpportunities.filter((j) => j.type === "Full-time").length,
    companies: companies.length,
  };

  const handleBookmark = (jobId: string) => {
    if (bookmarkedJobs.includes(jobId)) {
      setBookmarkedJobs(bookmarkedJobs.filter((id) => id !== jobId));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, jobId]);
    }
  };

  const handleApply = (jobId: string) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
      alert("Application submitted successfully!");
    }
  };

  const filteredJobs = jobOpportunities.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "All" || job.location === selectedLocation;

    return matchesSearch && matchesType && matchesCategory && matchesLocation;
  });

  // Get count for filter options
  const getTypeCount = (type: string) => {
    return jobOpportunities.filter((job) =>
      type === "All" ? true : job.type === type,
    ).length;
  };

  const getCategoryCount = (category: string) => {
    return jobOpportunities.filter((job) =>
      category === "All" ? true : job.category === category,
    ).length;
  };

  // Job Card Component
  const JobCard = ({
    job,
    onBookmark,
    onApply,
    isBookmarked,
    isApplied,
  }: any) => {
    const company = companies.find((c) => c.id === job.companyId);
    const daysLeft = getDaysLeft(job.deadline);

    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${company?.color}`}
            >
              {company?.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-gray-700">
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {company?.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onBookmark(job.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Bookmark
                    className={`w-5 h-5 ${isBookmarked ? "text-blue-600 fill-blue-600" : "text-gray-400"}`}
                  />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  {job.category}
                </span>
                {job.urgent && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                    Urgent
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            {isApplied ? (
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Applied
              </div>
            ) : (
              <button
                onClick={() => onApply(job.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Apply Now
              </button>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{job.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Posted {job.posted}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="font-medium text-gray-900">
              {job.applicants} applicants
            </div>
            <div className="text-sm text-gray-600">
              Deadline: {formatDate(job.deadline)} ({daysLeft} days left)
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Internship & Job Opportunities
                </h1>
                <p className="text-gray-600">
                  Find your dream internship or job from top companies
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {stats.totalJobs} opportunities available
            </div>
          </div>

          {/* Search Bar with Dropdown Filters */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-3">
                {/* Job Type Dropdown */}
                <div className="relative" ref={typeDropdownRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTypeDropdown(!showTypeDropdown);
                      setShowCategoryDropdown(false);
                      setShowLocationDropdown(false);
                    }}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition min-w-[150px]"
                  >
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="truncate">
                      {selectedType === "All" ? "Job Type" : selectedType}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showTypeDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {showTypeDropdown && (
                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-gray-200 bg-gray-50">
                        <div className="text-sm font-medium text-gray-700">
                          Select Job Type
                        </div>
                      </div>
                      {jobTypes.map((type) => (
                        <button
                          key={type}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedType(type);
                            setShowTypeDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center justify-between ${
                            selectedType === type
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          <span>{type}</span>
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                            {getTypeCount(type)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Dropdown */}
                <div className="relative" ref={categoryDropdownRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCategoryDropdown(!showCategoryDropdown);
                      setShowTypeDropdown(false);
                      setShowLocationDropdown(false);
                    }}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition min-w-[150px]"
                  >
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="truncate">
                      {selectedCategory === "All"
                        ? "Category"
                        : selectedCategory}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showCategoryDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {showCategoryDropdown && (
                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-gray-200 bg-gray-50">
                        <div className="text-sm font-medium text-gray-700">
                          Select Category
                        </div>
                      </div>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCategory(category);
                            setShowCategoryDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center justify-between ${
                            selectedCategory === category
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          <span>{category}</span>
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                            {getCategoryCount(category)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Location Dropdown */}
                <div className="relative" ref={locationDropdownRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLocationDropdown(!showLocationDropdown);
                      setShowTypeDropdown(false);
                      setShowCategoryDropdown(false);
                    }}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition min-w-[150px]"
                  >
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="truncate">
                      {selectedLocation === "All"
                        ? "Location"
                        : selectedLocation}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showLocationDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {showLocationDropdown && (
                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-gray-200 bg-gray-50">
                        <div className="text-sm font-medium text-gray-700">
                          Select Location
                        </div>
                      </div>
                      {locations.map((location) => (
                        <button
                          key={location}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLocation(location);
                            setShowLocationDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center gap-3 ${
                            selectedLocation === location
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{location}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Reset Filters Button */}
                {(selectedType !== "All" ||
                  selectedCategory !== "All" ||
                  selectedLocation !== "All") && (
                  <button
                    onClick={() => {
                      setSelectedType("All");
                      setSelectedCategory("All");
                      setSelectedLocation("All");
                    }}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                  >
                    <X className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* All Jobs */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Available Opportunities ({filteredJobs.length})
          </h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onBookmark={handleBookmark}
                onApply={handleApply}
                isBookmarked={bookmarkedJobs.includes(job.id)}
                isApplied={appliedJobs.includes(job.id)}
              />
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No opportunities found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSelectedType("All");
                setSelectedCategory("All");
                setSelectedLocation("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Application Stats */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Application Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {appliedJobs.length}
              </div>
              <div className="text-sm text-gray-600">Applied</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {bookmarkedJobs.length}
              </div>
              <div className="text-sm text-gray-600">Saved</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {jobOpportunities.length - appliedJobs.length}
              </div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipAndJobsPage;
