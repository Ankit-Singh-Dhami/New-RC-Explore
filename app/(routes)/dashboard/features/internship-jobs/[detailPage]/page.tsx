"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Building,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Star,
  Bookmark,
  Share2,
  Users,
  CheckCircle,
  Briefcase,
  GraduationCap,
  FileText,
  ExternalLink,
  Globe,
  Mail,
  AlertCircle,
  ChevronRight,
  Download,
  MessageSquare,
  Printer,
} from "lucide-react";
import { useRouter } from "next/navigation";

// This would typically come from your database or API
const mockJobData = {
  id: "1",
  title: "Software Development Intern",
  company: "Google",
  logo: "G",
  companyColor: "bg-blue-100 text-blue-700",
  rating: 4.8,
  type: "Internship",
  category: "Technology",
  location: "Bangalore",
  salary: "₹45,000/month",
  duration: "6 months",
  posted: "2 days ago",
  deadline: "2024-02-15",
  startDate: "March 1, 2024",
  description:
    "Join Google as a Software Development Intern and work on cutting-edge technologies. Gain hands-on experience with Google's tech stack while contributing to real-world projects. This internship offers an excellent opportunity to learn from industry experts and work on innovative solutions.",
  responsibilities: [
    "Develop and maintain software applications using modern technologies",
    "Collaborate with cross-functional teams to define, design, and ship new features",
    "Write clean, maintainable, and efficient code",
    "Participate in code reviews and team meetings",
    "Debug and resolve technical issues",
    "Contribute to architectural decisions",
  ],
  requirements: [
    "B.Tech/B.E in Computer Science/IT (2024/2025 batch)",
    "Strong understanding of Data Structures and Algorithms",
    "Proficiency in Python, Java, or C++",
    "Excellent problem-solving skills",
    "Good communication and teamwork abilities",
    "Previous internship or project experience is a plus",
  ],
  skills: ["Python", "Java", "Algorithms", "System Design", "Git", "REST APIs"],
  benefits: [
    "Competitive stipend",
    "Mentorship from industry experts",
    "Flexible work hours",
    "Networking opportunities",
    "Pre-placement offer (PPO) possibility",
    "Certificate of completion",
  ],
  applicants: 245,
  views: 1200,
  urgent: true,
  companyInfo: {
    description:
      "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
    website: "https://careers.google.com",
    founded: 1998,
    employees: "156,000+",
    headquarters: "Mountain View, California",
    contact: "careers@google.com",
  },
  applicationProcess: [
    "Submit online application",
    "Online assessment test",
    "Technical interview round",
    "HR interview round",
    "Final selection notification",
  ],
};

const JobDetailsPage = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [applied, setApplied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // In real app, fetch job data based on jobId
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setJob(mockJobData);
      setLoading(false);
    }, 500);
  }, [jobId]);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // In real app, make API call to bookmark
  };

  const handleApply = () => {
    setApplied(true);
    alert("Application submitted successfully! You'll hear back soon.");
    // In real app, make API call to apply
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job?.title} at ${job?.company}`,
        text: `Check out this ${job?.type} opportunity at ${job?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const getDaysLeft = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back to Jobs
          </button>
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 text-center">
            <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-3" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Job Not Found
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.push("/jobs")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
            >
              Browse All Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  const daysLeft = getDaysLeft(job.deadline);

  return (
    <div className="min-h-screen bg-gray-50 p-3 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-4 md:mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back to Jobs
          </button>
        </div>

        {/* Mobile Top Actions */}
        {isMobile && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handleBookmark}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Bookmark
                  className={`w-5 h-5 ${bookmarked ? "text-blue-600 fill-blue-600" : "text-gray-400"}`}
                />
              </button>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            {!applied && (
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
              >
                Apply Now
              </button>
            )}
          </div>
        )}

        {/* Job Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div className="flex items-start gap-3 md:gap-4 flex-1">
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl ${job.companyColor}`}
              >
                {job.logo}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
                  <div className="flex-1">
                    <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {job.title}
                    </h1>
                    <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2 flex-wrap">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Building className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                        <span className="text-sm md:text-lg font-medium text-gray-700">
                          {job.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs md:text-base text-gray-600">
                          {job.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Actions */}
                  {!isMobile && (
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={handleBookmark}
                        className="p-2 md:p-3 hover:bg-gray-100 rounded-lg transition"
                      >
                        <Bookmark
                          className={`w-4 h-4 md:w-5 md:h-5 ${bookmarked ? "text-blue-600 fill-blue-600" : "text-gray-400"}`}
                        />
                      </button>
                      <button
                        onClick={handleShare}
                        className="p-2 md:p-3 hover:bg-gray-100 rounded-lg transition"
                      >
                        <Share2 className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-xs md:text-sm">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-green-100 text-green-700 rounded-full font-medium text-xs md:text-sm">
                    {job.category}
                  </span>
                  {job.urgent && (
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-red-100 text-red-700 rounded-full font-medium text-xs md:text-sm">
                      Urgent Hiring
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Apply Section */}
            {!isMobile && (
              <div className="md:w-72 lg:w-80 flex-shrink-0">
                {applied ? (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-700 text-sm md:text-base">
                        Applied Successfully
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-green-600">
                      Your application has been submitted. We'll contact you
                      soon.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 md:space-y-4">
                    <button
                      onClick={handleApply}
                      className="w-full py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm md:text-base lg:text-lg"
                    >
                      Apply Now
                    </button>
                    <div className="text-center text-xs md:text-sm text-gray-600">
                      {job.applicants} applicants • {job.views} views
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Apply Status */}
          {isMobile && applied && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700 text-sm">
                  Applied Successfully
                </span>
              </div>
              <p className="text-xs text-green-600">
                Your application has been submitted. We'll contact you soon.
              </p>
            </div>
          )}

          {/* Mobile Stats */}
          {isMobile && !applied && (
            <div className="mt-4 text-center text-xs text-gray-600">
              {job.applicants} applicants • {job.views} views
            </div>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-blue-50 rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-600">Location</div>
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {job.location}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-green-50 rounded-lg">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-600">Salary</div>
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {job.salary}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-purple-50 rounded-lg">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-600">Duration</div>
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {job.duration}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1 md:p-2 bg-red-50 rounded-lg">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-600">Deadline</div>
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {daysLeft} days left
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Mobile Tab Selector */}
            {isMobile ? (
              <div className="mb-4">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm md:text-base"
                >
                  <option value="overview">Overview</option>
                  <option value="requirements">Requirements</option>
                  <option value="benefits">Benefits</option>
                  <option value="company">Company</option>
                  <option value="process">Process</option>
                </select>
              </div>
            ) : (
              /* Desktop Tabs */
              <div className="bg-white rounded-xl border border-gray-200 mb-4 md:mb-6 overflow-hidden">
                <div className="flex overflow-x-auto border-b border-gray-200">
                  {[
                    { id: "overview", label: "Overview", icon: Briefcase },
                    {
                      id: "requirements",
                      label: "Requirements",
                      icon: GraduationCap,
                    },
                    { id: "benefits", label: "Benefits", icon: Star },
                    { id: "company", label: "Company", icon: Building },
                    { id: "process", label: "Process", icon: FileText },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 font-medium whitespace-nowrap text-sm md:text-base transition-colors ${
                          activeTab === tab.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
              {activeTab === "overview" && (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Job Description
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line text-sm md:text-base leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-1 md:space-y-2">
                      {job.responsibilities.map(
                        (item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 md:mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "requirements" && (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Educational Requirements
                    </h3>
                    <ul className="space-y-1 md:space-y-2">
                      {job.requirements.map((req: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 md:mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Eligibility Criteria
                    </h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 md:p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <div className="text-xs md:text-sm text-gray-600">
                            Start Date
                          </div>
                          <div className="font-medium text-gray-900 text-sm md:text-base">
                            {job.startDate}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-600">
                            Batch
                          </div>
                          <div className="font-medium text-gray-900 text-sm md:text-base">
                            2024/2025
                          </div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-600">
                            Duration
                          </div>
                          <div className="font-medium text-gray-900 text-sm md:text-base">
                            {job.duration}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-600">
                            Location
                          </div>
                          <div className="font-medium text-gray-900 text-sm md:text-base">
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Perks & Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {job.benefits.map((benefit: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 md:gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          <Star className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Learning Opportunities
                    </h3>
                    <ul className="space-y-1 md:space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 md:mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                          Mentorship from senior engineers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 md:mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                          Access to internal training programs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 md:mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                          Participation in tech talks and workshops
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "company" && (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      About {job.company}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {job.companyInfo.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-xs md:text-sm text-gray-600">
                        Founded
                      </div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">
                        {job.companyInfo.founded}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-xs md:text-sm text-gray-600">
                        Employees
                      </div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">
                        {job.companyInfo.employees}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-xs md:text-sm text-gray-600">
                        Headquarters
                      </div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">
                        {job.companyInfo.headquarters}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-xs md:text-sm text-gray-600">
                        Contact
                      </div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">
                        {job.companyInfo.contact}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <a
                      href={job.companyInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base flex-1 text-center"
                    >
                      <Globe className="w-4 h-4" />
                      Company Website
                    </a>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm md:text-base flex-1">
                      <Mail className="w-4 h-4" />
                      Contact HR
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "process" && (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      Application Process
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      {job.applicationProcess.map(
                        (step: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 md:gap-4"
                          >
                            <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-xs md:text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm md:text-base mb-1">
                                {step}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {index === 0 &&
                                  "Fill out the application form with your details"}
                                {index === 1 &&
                                  "Complete the online coding assessment"}
                                {index === 2 &&
                                  "Technical interview with senior engineers"}
                                {index === 3 &&
                                  "Final HR and culture fit interview"}
                                {index === 4 &&
                                  "Receive offer letter and onboarding details"}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm md:text-base mb-1">
                          Application Tips
                        </h4>
                        <ul className="text-xs md:text-sm text-gray-700 space-y-0.5 md:space-y-1">
                          <li>• Update your resume with relevant projects</li>
                          <li>
                            • Prepare for Data Structures & Algorithms questions
                          </li>
                          <li>• Research about the company and its products</li>
                          <li>
                            • Be ready to discuss your past projects in detail
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Similar Opportunities
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    title: "Frontend Developer Intern",
                    company: "Microsoft",
                    type: "Internship",
                    location: "Remote",
                    salary: "₹40,000/month",
                  },
                  {
                    title: "Backend Engineer",
                    company: "Amazon",
                    type: "Full-time",
                    location: "Bangalore",
                    salary: "₹12-15 LPA",
                  },
                  {
                    title: "DevOps Engineer Intern",
                    company: "Google",
                    type: "Internship",
                    location: "Hyderabad",
                    salary: "₹42,000/month",
                  },
                ].map((similarJob, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition cursor-pointer hover:bg-blue-50/50"
                    onClick={() => {
                      // In real app, navigate to job details
                      alert(`Loading ${similarJob.title} details...`);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm md:text-base mb-1">
                          {similarJob.title}
                        </h4>
                        <div className="flex items-center flex-wrap gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
                          <span>{similarJob.company}</span>
                          <span>•</span>
                          <span>{similarJob.location}</span>
                          <span>•</span>
                          <span className="font-medium">
                            {similarJob.salary}
                          </span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 ml-2 flex-shrink-0">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Application Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Application Statistics
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Total Applicants
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {job.applicants}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Views
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {job.views}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Days Left
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {daysLeft} days
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Posted
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {job.posted}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Dates */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Important Dates
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Application Deadline
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {new Date(job.deadline).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Start Date
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {job.startDate}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm md:text-base">
                    Duration
                  </div>
                  <div className="font-medium text-gray-900 text-sm md:text-base">
                    {job.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2 md:space-y-3">
                <button
                  onClick={() => window.print()}
                  className="w-full px-4 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Printer className="w-4 h-4" />
                  Print Details
                </button>
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Share2 className="w-4 h-4" />
                  Share with Friends
                </button>
                <button className="w-full px-4 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm md:text-base">
                  <MessageSquare className="w-4 h-4" />
                  Join Discussion
                </button>
                <button className="w-full px-4 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm md:text-base">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        {isMobile && !applied && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg lg:hidden">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-base"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// This would be your page component that receives params
export default function JobPage({ params }: { params: { jobId: string } }) {
  return <JobDetailsPage jobId={params.jobId} />;
}
