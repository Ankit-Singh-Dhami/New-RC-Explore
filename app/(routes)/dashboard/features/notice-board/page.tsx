"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  BellRing,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Search,
  Tag,
  MoreVertical,
  Edit,
  Trash2,
  Share2,
  Pin,
  Clock,
  User,
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Megaphone,
  BookOpen,
  GraduationCap,
  Building,
  Download,
  Eye,
  EyeOff,
  Mail,
  Printer,
  Archive,
  Flag,
} from "lucide-react";
import Link from "next/link";

const NoticeBoardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Mid-Term Examination Schedule - Spring 2024",
      description:
        "Detailed schedule for all mid-term examinations. Please check your department notice board for room allocations.",
      content: `The mid-term examinations for Spring 2024 semester will be conducted from March 18th to March 30th, 2024.

Important Instructions:
1. Students must carry their college ID cards
2. Electronic devices are not permitted
3. Report 30 minutes before exam time
4. Follow seating arrangement strictly

For any queries, contact your respective department offices.`,
      date: "2024-03-10",
      time: "10:00",
      priority: "high",
      category: "academic",
      department: "all",
      author: "Examination Cell",
      attachments: ["exam_schedule.pdf", "guidelines.pdf"],
      isPinned: true,
      isPublished: true,
      views: 1250,
      expiresOn: "2024-03-31",
    },
    {
      id: 2,
      title: "Campus Recruitment Drive - Tech Giants Inc.",
      description:
        "Opportunity for final year students to participate in campus recruitment on March 25th.",
      content: `Tech Giants Inc. is visiting our campus for recruitment on March 25th, 2024.

Eligibility:
- B.Tech/B.E. (CS, IT, ECE) - 2024 Batch
- Minimum 7.5 CGPA
- No active backlogs

Registration Deadline: March 20th, 2024
Venue: Placement Cell, Admin Block
Time: 9:00 AM onwards

Required Documents:
1. Updated Resume
2. All mark sheets (X, XII, Graduation)
3. College ID card
4. Passport size photographs`,
      date: "2024-03-12",
      time: "14:30",
      priority: "high",
      category: "placement",
      department: "cse,it,ece",
      author: "Placement Cell",
      attachments: ["recruitment_brochure.pdf", "eligibility_criteria.pdf"],
      isPinned: true,
      isPublished: true,
      views: 980,
      expiresOn: "2024-03-25",
    },
    {
      id: 3,
      title: "Library Summer Vacation Schedule",
      description: "Revised timings for library during summer vacation period.",
      content: `During the summer vacation period (May 15th - June 30th), the library will operate on revised timings:

Weekdays: 9:00 AM - 5:00 PM
Saturdays: 9:00 AM - 1:00 PM
Sundays: Closed

Special Arrangements:
1. Book issue limit increased to 5 books
2. Digital library access 24/7
3. Research scholars can access by prior appointment

Contact: library@college.edu | Ext: 1234`,
      date: "2024-03-15",
      time: "11:00",
      priority: "medium",
      category: "general",
      department: "all",
      author: "Central Library",
      attachments: ["library_schedule.pdf"],
      isPinned: false,
      isPublished: true,
      views: 650,
      expiresOn: "2024-06-30",
    },
    {
      id: 4,
      title: "Hostel Fee Payment Last Date Extended",
      description:
        "Last date for hostel fee payment extended to March 20th, 2024.",
      content: `Due to multiple requests, the last date for hostel fee payment has been extended to March 20th, 2024.

Payment Modes:
1. Online Payment (College Portal)
2. Bank Transfer
3. Cash at Accounts Office

Late Payment Fine:
- After March 20th: ₹50 per day
- After March 25th: Hostel admission cancelled

For queries: hosteloffice@college.edu`,
      date: "2024-03-14",
      time: "16:00",
      priority: "medium",
      category: "administration",
      department: "all",
      author: "Hostel Administration",
      attachments: ["fee_structure.pdf", "payment_guidelines.pdf"],
      isPinned: true,
      isPublished: true,
      views: 890,
      expiresOn: "2024-03-20",
    },
    {
      id: 5,
      title: "Workshop on Machine Learning Applications",
      description:
        "Two-day workshop on practical ML applications by industry experts.",
      content: `Department of Computer Science organizes a workshop on "Machine Learning Applications in Real World"

Dates: March 22-23, 2024
Time: 10:00 AM - 4:00 PM
Venue: Computer Lab 3, CS Department
Resource Persons: Dr. John Smith (Google AI), Prof. Sarah Lee (Stanford)

Topics Covered:
1. Introduction to Deep Learning
2. Natural Language Processing
3. Computer Vision Applications
4. Model Deployment

Registration Fee: ₹500 (Includes certificate and materials)
Last Date: March 20th, 2024

Limited seats available!`,
      date: "2024-03-11",
      time: "09:00",
      priority: "high",
      category: "workshop",
      department: "cse,it",
      author: "CS Department",
      attachments: ["workshop_brochure.pdf", "registration_form.pdf"],
      isPinned: false,
      isPublished: true,
      views: 450,
      expiresOn: "2024-03-23",
    },
    {
      id: 6,
      title: "Sports Complex Maintenance",
      description:
        "Sports complex will remain closed for maintenance from March 25-30.",
      content: `The sports complex will undergo annual maintenance from March 25th to March 30th, 2024.

Affected Facilities:
1. Swimming Pool
2. Gymnasium
3. Indoor Stadium
4. Tennis Courts

Alternative Arrangements:
- Outdoor grounds remain open
- Yoga classes shifted to auditorium
- Temporary gym setup near hostel

We apologize for the inconvenience.`,
      date: "2024-03-13",
      time: "15:00",
      priority: "low",
      category: "sports",
      department: "all",
      author: "Sports Committee",
      attachments: ["maintenance_schedule.pdf"],
      isPinned: false,
      isPublished: true,
      views: 320,
      expiresOn: "2024-03-30",
    },
    {
      id: 7,
      title: "Scholarship Application Deadline",
      description: "Last date to apply for various scholarships is March 18th.",
      content: `Students are reminded that the last date to apply for the following scholarships is March 18th, 2024:

1. Merit-cum-Means Scholarship
2. SC/ST Scholarship
3. Minority Scholarship
4. Sports Scholarship
5. Cultural Scholarship

Required Documents:
- Income Certificate
- Caste Certificate (if applicable)
- Previous year marksheets
- Bank account details

Apply through: scholarship.portal@college.edu`,
      date: "2024-03-10",
      time: "12:00",
      priority: "high",
      category: "scholarship",
      department: "all",
      author: "Scholarship Cell",
      attachments: ["scholarship_guidelines.pdf", "application_form.pdf"],
      isPinned: true,
      isPublished: true,
      views: 1100,
      expiresOn: "2024-03-18",
    },
    {
      id: 8,
      title: "Cultural Fest Committee Meeting",
      description:
        "First meeting for cultural fest organizing committee members.",
      content: `All selected members of the Cultural Fest 2024 organizing committee are requested to attend the first planning meeting.

Date: March 17th, 2024
Time: 3:00 PM
Venue: Cultural Hall, Student Center

Agenda:
1. Theme finalization
2. Committee structure
3. Budget allocation
4. Timeline discussion
5. Volunteer recruitment

Please come prepared with your ideas and suggestions.`,
      date: "2024-03-16",
      time: "10:00",
      priority: "medium",
      category: "cultural",
      department: "all",
      author: "Cultural Committee",
      attachments: ["meeting_agenda.pdf"],
      isPinned: false,
      isPublished: true,
      views: 280,
      expiresOn: "2024-03-17",
    },
  ]);

  const categories = [
    {
      id: "all",
      name: "All Notices",
      color: "bg-gray-100 text-gray-800",
      icon: Bell,
    },
    {
      id: "academic",
      name: "Academic",
      color: "bg-blue-100 text-blue-800",
      icon: BookOpen,
    },
    {
      id: "placement",
      name: "Placement",
      color: "bg-green-100 text-green-800",
      icon: GraduationCap,
    },
    {
      id: "workshop",
      name: "Workshop",
      color: "bg-purple-100 text-purple-800",
      icon: Megaphone,
    },
    {
      id: "scholarship",
      name: "Scholarship",
      color: "bg-yellow-100 text-yellow-800",
      icon: Flag,
    },
    {
      id: "cultural",
      name: "Cultural",
      color: "bg-pink-100 text-pink-800",
      icon: BellRing,
    },
    {
      id: "sports",
      name: "Sports",
      color: "bg-orange-100 text-orange-800",
      icon: Flag,
    },
    {
      id: "administration",
      name: "Administration",
      color: "bg-red-100 text-red-800",
      icon: Building,
    },
    {
      id: "general",
      name: "General",
      color: "bg-indigo-100 text-indigo-800",
      icon: Info,
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "cse", name: "Computer Science" },
    { id: "it", name: "Information Technology" },
    { id: "ece", name: "Electronics & Communication" },
    { id: "eee", name: "Electrical Engineering" },
    { id: "mech", name: "Mechanical Engineering" },
    { id: "civil", name: "Civil Engineering" },
    { id: "mba", name: "Business Administration" },
    { id: "mca", name: "Computer Applications" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return AlertCircle;
      case "medium":
        return Info;
      case "low":
        return CheckCircle;
      default:
        return Info;
    }
  };

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("all") ||
      selectedCategories.includes(notice.category);

    const matchesDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes("all") ||
      notice.department === "all" ||
      selectedDepartments.some((dept) => notice.department.includes(dept));

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDepartment &&
      notice.isPublished
    );
  });

  const pinnedNotices = filteredNotices.filter((notice) => notice.isPinned);
  const regularNotices = filteredNotices.filter((notice) => !notice.isPinned);

  const noticesPerPage = 8;
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const paginatedNotices = filteredNotices.slice(
    startIndex,
    startIndex + noticesPerPage,
  );

  const toggleCategory = (categoryId: string) => {
    if (categoryId === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((c) => c !== "all");
        if (newCategories.includes(categoryId)) {
          return newCategories.filter((c) => c !== categoryId);
        } else {
          return [...newCategories, categoryId];
        }
      });
    }
  };

  const toggleDepartment = (deptId: string) => {
    if (deptId === "all") {
      setSelectedDepartments(["all"]);
    } else {
      setSelectedDepartments((prev) => {
        const newDepts = prev.filter((d) => d !== "all");
        if (newDepts.includes(deptId)) {
          return newDepts.filter((d) => d !== deptId);
        } else {
          return [...newDepts, deptId];
        }
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleNoticeClick = (notice: any) => {
    setSelectedNotice(notice);
    setShowNoticeModal(true);
    // Increment views
    setNotices((prev) =>
      prev.map((n) => (n.id === notice.id ? { ...n, views: n.views + 1 } : n)),
    );
  };

  const NoticeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {selectedNotice && (
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {selectedNotice.isPinned && (
                    <Pin className="w-4 h-4 text-red-500 fill-current" />
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedNotice.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(selectedNotice.priority)}`}
                  >
                    {selectedNotice.priority.charAt(0).toUpperCase() +
                      selectedNotice.priority.slice(1)}{" "}
                    Priority
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${categories.find((c) => c.id === selectedNotice.category)?.color}`}
                  >
                    {
                      categories.find((c) => c.id === selectedNotice.category)
                        ?.name
                    }
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowNoticeModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700">
                    {selectedNotice.content}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Notice Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {formatDate(selectedNotice.date)} at{" "}
                        {selectedNotice.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Published by: {selectedNotice.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedNotice.views} views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Valid until: {formatDate(selectedNotice.expiresOn)}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedNotice.attachments &&
                  selectedNotice.attachments.length > 0 && (
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Attachments
                      </h4>
                      <div className="space-y-2">
                        {selectedNotice.attachments.map(
                          (file: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-2 bg-white rounded-lg"
                            >
                              <span className="text-sm text-gray-700 truncate">
                                {file}
                              </span>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Notice
              </button>
              <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                <Printer className="w-5 h-5" />
              </button>
              <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                <Mail className="w-5 h-5" />
              </button>
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
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Notice Board
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Official announcements, updates, and important information
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/dashboard/features/notice-board/add-notice">
                <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Add Notice</span>
                  <span className="sm:hidden">Add</span>
                </button>
              </Link>
              <button className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <Archive className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Archive</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-4 md:space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex-1">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search notices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    <Bell className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    <BellRing className="w-4 h-4" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowFilterMenu(!showFilterMenu)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Filter className="w-4 h-4" />
                    </button>
                    {showFilterMenu && (
                      <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-3">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Filter Options
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-1">
                                Categories
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {categories.slice(0, 4).map((category) => (
                                  <button
                                    key={category.id}
                                    onClick={() => toggleCategory(category.id)}
                                    className={`px-2 py-1 rounded text-xs ${category.color} ${selectedCategories.includes(category.id) ? "ring-1 ring-blue-500" : ""}`}
                                  >
                                    {category.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-1">
                                Priority
                              </h5>
                              <div className="flex gap-1">
                                {["high", "medium", "low"].map((priority) => (
                                  <span
                                    key={priority}
                                    className={`px-2 py-1 rounded text-xs ${getPriorityColor(priority)}`}
                                  >
                                    {priority}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Pinned Notices */}
              {pinnedNotices.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Pin className="w-4 h-4 text-red-500" />
                    <h3 className="font-semibold text-gray-900">
                      Pinned Notices
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {pinnedNotices.map((notice) => (
                      <div
                        key={notice.id}
                        onClick={() => handleNoticeClick(notice)}
                        className="p-4 border-2 border-red-200 bg-red-50 rounded-xl hover:shadow-sm transition cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Pin className="w-3 h-3 text-red-500 fill-current" />
                              <h4 className="font-semibold text-gray-900">
                                {notice.title}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {notice.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>{formatDate(notice.date)}</span>
                              <span>•</span>
                              <span>{notice.author}</span>
                              <span>•</span>
                              <span>{notice.views} views</span>
                            </div>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs ${categories.find((c) => c.id === notice.category)?.color}`}
                          >
                            {
                              categories.find((c) => c.id === notice.category)
                                ?.name
                            }
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Notices */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">All Notices</h3>
                  <span className="text-sm text-gray-500">
                    {filteredNotices.length} notices found
                  </span>
                </div>

                {viewMode === "list" ? (
                  <div className="space-y-3">
                    {paginatedNotices.map((notice) => (
                      <div
                        key={notice.id}
                        onClick={() => handleNoticeClick(notice)}
                        className="p-4 border border-gray-200 rounded-xl hover:shadow-sm transition cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {notice.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {notice.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(notice.date)}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {notice.author}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {notice.views} views
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 ml-4">
                            <span
                              className={`px-2 py-1 rounded text-xs ${categories.find((c) => c.id === notice.category)?.color}`}
                            >
                              {
                                categories.find((c) => c.id === notice.category)
                                  ?.name
                              }
                            </span>
                            {notice.attachments &&
                              notice.attachments.length > 0 && (
                                <span className="text-xs text-gray-500">
                                  📎 {notice.attachments.length}
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {paginatedNotices.map((notice) => (
                      <div
                        key={notice.id}
                        onClick={() => handleNoticeClick(notice)}
                        className="p-4 border border-gray-200 rounded-xl hover:shadow-sm transition cursor-pointer"
                      >
                        <div className="mb-3">
                          <span
                            className={`px-2 py-1 rounded text-xs ${categories.find((c) => c.id === notice.category)?.color}`}
                          >
                            {
                              categories.find((c) => c.id === notice.category)
                                ?.name
                            }
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {notice.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                          {notice.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{formatDate(notice.date)}</span>
                          <span>{notice.views} views</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1">
                      {Array.from(
                        { length: Math.min(5, totalPages) },
                        (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-8 h-8 rounded-lg ${currentPage === pageNum ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
                            >
                              {pageNum}
                            </button>
                          );
                        },
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-4 md:space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition ${selectedCategories.includes(category.id) ? category.color + " ring-1 ring-blue-500" : "hover:bg-gray-50"}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {
                          notices.filter((n) => n.category === category.id)
                            .length
                        }
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Departments
              </h2>
              <div className="space-y-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => toggleDepartment(dept.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition ${selectedDepartments.includes(dept.id) ? "bg-blue-50 text-blue-700 ring-1 ring-blue-500" : "hover:bg-gray-50"}`}
                  >
                    <span className="text-sm font-medium">{dept.name}</span>
                    <span className="text-xs text-gray-500">
                      {
                        notices.filter((n) => n.department.includes(dept.id))
                          .length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Notices */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Recent Notices
              </h2>
              <div className="space-y-3">
                {notices
                  .filter((n) => n.isPublished)
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime(),
                  )
                  .slice(0, 3)
                  .map((notice) => (
                    <div
                      key={notice.id}
                      onClick={() => handleNoticeClick(notice)}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                        {notice.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(notice.date)}</span>
                        <span>{notice.views} views</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                  <Bell className="w-4 h-4" />
                  Subscribe to Notifications
                </button>
                <button className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition font-medium flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Notice Archive
                </button>
                <button className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition font-medium flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get Email Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Modal */}
      {showNoticeModal && <NoticeModal />}
    </div>
  );
};

export default NoticeBoardPage;
