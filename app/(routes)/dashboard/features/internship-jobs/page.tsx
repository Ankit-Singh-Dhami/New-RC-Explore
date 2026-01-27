"use client";

import { useState } from "react";
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
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Target,
  Bookmark,
  Share2,
  Eye,
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

  // Helper functions defined at component level
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
      openings: 12,
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "M",
      color: "bg-green-100 text-green-700",
      rating: 4.7,
      openings: 8,
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "A",
      color: "bg-yellow-100 text-yellow-700",
      rating: 4.6,
      openings: 15,
    },
    {
      id: "tcs",
      name: "TCS",
      logo: "T",
      color: "bg-purple-100 text-purple-700",
      rating: 4.4,
      openings: 25,
    },
    {
      id: "infosys",
      name: "Infosys",
      logo: "I",
      color: "bg-red-100 text-red-700",
      rating: 4.3,
      openings: 18,
    },
    {
      id: "wipro",
      name: "Wipro",
      logo: "W",
      color: "bg-indigo-100 text-indigo-700",
      rating: 4.2,
      openings: 14,
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
        "Join Google as a Software Development Intern and work on cutting-edge technologies. Gain hands-on experience with Google's tech stack.",
      requirements: [
        "B.Tech/B.E in CS/IT",
        "Strong in DSA",
        "Python/Java/C++",
        "Good problem-solving",
      ],
      skills: ["Python", "Java", "Algorithms", "System Design"],
      applicants: 245,
      featured: true,
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
        "Work with Microsoft's data science team on real-world ML projects. Opportunity for pre-placement offer.",
      requirements: [
        "B.Tech/M.Tech in CS/DS",
        "ML/AI knowledge",
        "Python/R",
        "Statistical analysis",
      ],
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
      applicants: 189,
      featured: true,
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
        "Join Amazon's engineering team to build scalable solutions. New graduate position with comprehensive training.",
      requirements: [
        "B.Tech/B.E 2024 batch",
        "70%+ aggregate",
        "Strong CS fundamentals",
        "Projects experience",
      ],
      skills: ["Java", "AWS", "System Design", "Algorithms"],
      applicants: 320,
      featured: false,
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
        "Learn business analysis methodologies and work on client projects with TCS consulting team.",
      requirements: [
        "MBA/BBA 3rd/4th year",
        "Analytical skills",
        "Excel/PPT",
        "Communication skills",
      ],
      skills: ["Business Analysis", "Excel", "PPT", "Communication"],
      applicants: 156,
      featured: false,
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
      description:
        "Work on automotive design and manufacturing processes. Hands-on experience with CAD/CAM tools.",
      requirements: [
        "B.Tech in Mechanical",
        "CAD knowledge",
        "Manufacturing basics",
        "Teamwork",
      ],
      skills: ["AutoCAD", "SolidWorks", "Manufacturing", "Design"],
      applicants: 98,
      featured: true,
      urgent: false,
    },
    {
      id: "6",
      title: "On-campus Student Assistant",
      company: "College Admin",
      companyId: "college",
      type: "Part-time",
      category: "On-campus",
      location: "On-campus",
      salary: "₹8,000/month",
      duration: "Semester long",
      posted: "2 days ago",
      deadline: "2024-02-10",
      description:
        "Assist faculty with research and administrative tasks. Flexible hours to accommodate classes.",
      requirements: [
        "Current student",
        "Good academic record",
        "Time management",
        "Responsible",
      ],
      skills: ["Research", "Office Tools", "Communication", "Organization"],
      applicants: 45,
      featured: false,
      urgent: true,
    },
    {
      id: "7",
      title: "UX/UI Design Intern",
      company: "Adobe",
      companyId: "adobe",
      type: "Internship",
      category: "Design",
      location: "Remote",
      salary: "₹38,000/month",
      duration: "5 months",
      posted: "4 days ago",
      deadline: "2024-02-25",
      description:
        "Work with Adobe's design team on product interfaces. Learn design systems and user research.",
      requirements: [
        "Design background",
        "Figma/Sketch",
        "Portfolio",
        "Creative thinking",
      ],
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
      applicants: 134,
      featured: true,
      urgent: false,
    },
    {
      id: "8",
      title: "Marketing Intern",
      company: "Unilever",
      companyId: "unilever",
      type: "Internship",
      category: "Marketing",
      location: "Delhi NCR",
      salary: "₹32,000/month",
      duration: "4 months",
      posted: "1 week ago",
      deadline: "2024-02-19",
      description:
        "Join Unilever's marketing team for brand campaigns and digital marketing initiatives.",
      requirements: [
        "Marketing/Business student",
        "Social media savvy",
        "Creative",
        "Analytical",
      ],
      skills: [
        "Digital Marketing",
        "Social Media",
        "Content Creation",
        "Analytics",
      ],
      applicants: 112,
      featured: false,
      urgent: false,
    },
  ];

  const stats = {
    totalJobs: jobOpportunities.length,
    internships: jobOpportunities.filter((j) => j.type === "Internship").length,
    fullTime: jobOpportunities.filter((j) => j.type === "Full-time").length,
    companies: companies.length,
    totalApplicants: jobOpportunities.reduce(
      (sum, job) => sum + job.applicants,
      0,
    ),
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

  const featuredJobs = filteredJobs.filter((job) => job.featured);
  const urgentJobs = filteredJobs.filter((job) => job.urgent);

  // Featured Job Card Component
  const FeaturedJobCard = ({ job }: { job: any }) => {
    const company = companies.find((c) => c.id === job.companyId);
    const daysLeft = getDaysLeft(job.deadline);

    return (
      <div className="bg-gradient-to-r from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${company?.color}`}
            >
              {company?.logo}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{job.title}</h3>
              <div className="text-sm text-gray-600">{job.company}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              Featured
            </span>
            {job.urgent && (
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                Urgent
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{job.duration}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-gray-900">
              {job.applicants} applicants
            </div>
            <div className="text-xs text-gray-500">{daysLeft} days left</div>
          </div>
        </div>
      </div>
    );
  };

  // Urgent Job Card Component
  const UrgentJobCard = ({ job }: { job: any }) => {
    const daysLeft = getDaysLeft(job.deadline);

    return (
      <div className="bg-white border-l-4 border-l-red-500 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <Clock className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{job.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-red-600">
                {daysLeft} days left
              </div>
              <div className="text-xs text-gray-500">
                Apply by {formatDate(job.deadline)}
              </div>
            </div>
            <button
              onClick={() => handleApply(job.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main Job Card Component
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
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
              View Details
            </button>
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

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-medium text-gray-900">
                {job.applicants} applicants
              </div>
              <div className="text-sm text-gray-600">
                Deadline: {formatDate(job.deadline)} ({daysLeft} days left)
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
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
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  Active Opportunities
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stats.totalJobs}
                </div>
              </div>
              <div className="h-10 w-px bg-gray-300"></div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Companies</div>
                <div className="text-2xl font-bold text-gray-900">
                  {stats.companies}
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.internships}
                  </div>
                  <div className="text-sm text-gray-600">Internships</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Building className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.fullTime}
                  </div>
                  <div className="text-sm text-gray-600">Full-time Jobs</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.totalApplicants.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Applicants</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {bookmarkedJobs.length}
                  </div>
                  <div className="text-sm text-gray-600">Saved Jobs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* Job Type */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Job Type
                </h4>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedType === type
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{type}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                          {
                            jobOpportunities.filter((j) => j.type === type)
                              .length
                          }
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === category
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                          {
                            jobOpportunities.filter(
                              (j) => j.category === category,
                            ).length
                          }
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Location
                </h4>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedLocation === location
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{location}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedType("All");
                  setSelectedCategory("All");
                  setSelectedLocation("All");
                }}
                className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Reset All Filters
              </button>
            </div>

            {/* Top Companies */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Top Companies
              </h3>
              <div className="space-y-4">
                {companies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${company.color}`}
                    >
                      {company.logo}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {company.name}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>{company.rating}</span>
                        <span>•</span>
                        <span>{company.openings} openings</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Jobs */}
            {featuredJobs.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Featured Opportunities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredJobs.map((job) => (
                    <FeaturedJobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            )}

            {/* Urgent Jobs */}
            {urgentJobs.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  Urgent Hiring
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    Apply Soon
                  </span>
                </h2>
                <div className="space-y-4">
                  {urgentJobs.map((job) => (
                    <UrgentJobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            )}

            {/* All Jobs */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                All Opportunities ({filteredJobs.length})
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
      </div>
    </div>
  );
};

export default InternshipAndJobsPage;
