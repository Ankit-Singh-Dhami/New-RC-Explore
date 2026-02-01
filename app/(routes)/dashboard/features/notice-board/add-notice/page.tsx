"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Calendar,
  Clock,
  Tag,
  Users,
  Paperclip,
  AlertCircle,
  Info,
  CheckCircle,
  Pin,
  Bell,
  X,
  Upload,
  Trash2,
  Link2,
  Globe,
  Lock,
  Building,
  GraduationCap,
  BookOpen,
  Megaphone,
  Flag,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const AddNoticePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);
  const [currentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  );

  const [noticeData, setNoticeData] = useState({
    title: "",
    description: "",
    content: "",
    date: currentDate,
    time: currentTime,
    priority: "medium",
    category: "general",
    departments: ["all"],
    author: "",
    authorDepartment: "",
    attachments: [] as string[],
    isPinned: false,
    isPublished: true,
    expiresOn: "",
    targetAudience: "all",
    visibility: "public",
    tags: [] as string[],
    contactEmail: "",
    contactPhone: "",
    venue: "",
    registrationLink: "",
  });

  const categories = [
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
      icon: Bell,
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

  const targetAudiences = [
    { id: "all", name: "All Students & Staff" },
    { id: "students", name: "Students Only" },
    { id: "faculty", name: "Faculty Only" },
    { id: "staff", name: "Staff Only" },
    { id: "research", name: "Research Scholars" },
    { id: "final-year", name: "Final Year Students" },
    { id: "first-year", name: "First Year Students" },
  ];

  const priorities = [
    {
      id: "high",
      name: "High",
      color: "bg-red-100 text-red-800",
      icon: AlertCircle,
    },
    {
      id: "medium",
      name: "Medium",
      color: "bg-yellow-100 text-yellow-800",
      icon: Info,
    },
    {
      id: "low",
      name: "Low",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
  ];

  const visibilities = [
    {
      id: "public",
      name: "Public",
      description: "Visible to everyone",
      icon: Globe,
    },
    {
      id: "college",
      name: "College Only",
      description: "Visible only to college members",
      icon: Building,
    },
    {
      id: "department",
      name: "Department Only",
      description: "Visible only to selected departments",
      icon: Lock,
    },
  ];

  const [newTag, setNewTag] = useState("");

  const handleInputChange = (field: string, value: any) => {
    setNoticeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDepartmentToggle = (deptId: string) => {
    setNoticeData((prev) => {
      const newDepartments = [...prev.departments];

      if (deptId === "all") {
        return { ...prev, departments: ["all"] };
      }

      const index = newDepartments.indexOf(deptId);
      const allIndex = newDepartments.indexOf("all");

      if (index > -1) {
        // Remove department
        newDepartments.splice(index, 1);
      } else {
        // Add department
        if (allIndex > -1) {
          // Remove "all" if adding specific department
          newDepartments.splice(allIndex, 1);
        }
        newDepartments.push(deptId);
      }

      return { ...prev, departments: newDepartments };
    });
  };

  const handleAddTag = () => {
    if (newTag.trim() && !noticeData.tags.includes(newTag.trim())) {
      setNoticeData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setNoticeData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [...prev, ...files]);
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Notice data to be submitted:", {
        ...noticeData,
        attachments: attachments.map((file) => file.name),
      });

      // Show success message and redirect
      alert("Notice published successfully!");
      router.push("/dashboard/features/notices");
    } catch (error) {
      console.error("Error publishing notice:", error);
      alert("Failed to publish notice. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = () => {
    // Save as draft logic
    console.log("Saving as draft:", noticeData);
    alert("Draft saved successfully!");
  };

  const calculateExpiryDate = (days: number) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);
    return expiryDate.toISOString().split("T")[0];
  };

  // Preview component
  const NoticePreview = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        {noticeData.isPinned && <Pin className="w-4 h-4 text-red-500" />}
        <h3 className="text-xl font-bold text-gray-900">
          {noticeData.title || "Notice Title"}
        </h3>
      </div>

      {noticeData.category && (
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${categories.find((c) => c.id === noticeData.category)?.color}`}
          >
            {categories.find((c) => c.id === noticeData.category)?.name}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${priorities.find((p) => p.id === noticeData.priority)?.color}`}
          >
            {noticeData.priority.charAt(0).toUpperCase() +
              noticeData.priority.slice(1)}{" "}
            Priority
          </span>
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
          <p className="text-gray-700">
            {noticeData.description || "No description provided"}
          </p>
        </div>

        {noticeData.content && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Content</h4>
            <div className="prose max-w-none whitespace-pre-line text-gray-700">
              {noticeData.content}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              Published: {noticeData.date} at {noticeData.time}
            </span>
          </div>
          {noticeData.expiresOn && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Expires: {noticeData.expiresOn}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Author: {noticeData.author || "Not specified"}</span>
          </div>
        </div>

        <div className="space-y-2">
          {noticeData.venue && (
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Venue: {noticeData.venue}</span>
            </div>
          )}
          {noticeData.departments.length > 0 && (
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>
                Departments:{" "}
                {noticeData.departments.includes("all")
                  ? "All Departments"
                  : departments
                      .filter((d) => noticeData.departments.includes(d.id))
                      .map((d) => d.name)
                      .join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {noticeData.tags.length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {noticeData.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <Link href="/dashboard/features/notice-board">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Add New Notice
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Create and publish announcements for the college community
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleSaveDraft}
                className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Save Draft</span>
                <span className="sm:hidden">Draft</span>
              </button>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                {previewMode ? (
                  <>
                    <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Edit Mode</span>
                    <span className="sm:hidden">Edit</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Preview</span>
                    <span className="sm:hidden">Preview</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {previewMode ? (
          <NoticePreview />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                {/* Basic Details Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Notice Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Notice Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={noticeData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        placeholder="Enter a clear and concise title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Keep it under 100 characters for best display
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Short Description *
                      </label>
                      <textarea
                        required
                        value={noticeData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder="Provide a brief summary of the notice"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This will appear in notice lists and previews
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Content *
                      </label>
                      <textarea
                        required
                        value={noticeData.content}
                        onChange={(e) =>
                          handleInputChange("content", e.target.value)
                        }
                        placeholder="Enter the complete notice content..."
                        rows={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none font-mono text-sm"
                      />
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500">
                          Use clear formatting with line breaks and paragraphs
                        </p>
                        <span className="text-xs text-gray-500">
                          {noticeData.content.length}/5000 characters
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule & Settings Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Schedule & Settings
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Publication Date *
                        </div>
                      </label>
                      <input
                        type="date"
                        required
                        value={noticeData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Publication Time *
                        </div>
                      </label>
                      <input
                        type="time"
                        required
                        value={noticeData.time}
                        onChange={(e) =>
                          handleInputChange("time", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        value={noticeData.expiresOn}
                        onChange={(e) =>
                          handleInputChange("expiresOn", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                      <div className="flex gap-2 mt-2">
                        {[7, 30, 90].map((days) => (
                          <button
                            type="button"
                            key={days}
                            onClick={() =>
                              handleInputChange(
                                "expiresOn",
                                calculateExpiryDate(days),
                              )
                            }
                            className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50"
                          >
                            {days} days
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Visibility *
                      </label>
                      <div className="space-y-2">
                        {visibilities.map((visibility) => (
                          <label
                            key={visibility.id}
                            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="visibility"
                              value={visibility.id}
                              checked={noticeData.visibility === visibility.id}
                              onChange={(e) =>
                                handleInputChange("visibility", e.target.value)
                              }
                              className="text-blue-600"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <visibility.icon className="w-4 h-4" />
                                <span className="font-medium">
                                  {visibility.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {visibility.description}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attachments Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Attachments
                  </h2>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-3">
                        Drag & drop files here or click to browse
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                          Browse Files
                        </button>
                      </label>
                      <p className="text-xs text-gray-500 mt-3">
                        Maximum file size: 10MB each. Supported: PDF, DOC, JPG,
                        PNG
                      </p>
                    </div>

                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">
                          Selected Files ({attachments.length})
                        </h4>
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Paperclip className="w-4 h-4 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveAttachment(index)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Trash2 className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 md:space-y-6">
                {/* Category & Priority Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Category & Priority
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Category *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => (
                          <button
                            type="button"
                            key={category.id}
                            onClick={() =>
                              handleInputChange("category", category.id)
                            }
                            className={`p-3 rounded-lg border transition text-sm font-medium flex flex-col items-center gap-2 ${noticeData.category === category.id ? category.color + " ring-2 ring-offset-1 ring-blue-500" : "border-gray-200 hover:bg-gray-50"}`}
                          >
                            <category.icon className="w-4 h-4" />
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Priority Level *
                      </label>
                      <div className="space-y-2">
                        {priorities.map((priority) => (
                          <label
                            key={priority.id}
                            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="priority"
                              value={priority.id}
                              checked={noticeData.priority === priority.id}
                              onChange={(e) =>
                                handleInputChange("priority", e.target.value)
                              }
                              className="text-blue-600"
                            />
                            <div
                              className={`px-3 py-1.5 rounded-full ${priority.color}`}
                            >
                              <div className="flex items-center gap-2">
                                <priority.icon className="w-4 h-4" />
                                <span className="font-medium">
                                  {priority.name}
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Departments & Audience Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Target Audience
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Departments *
                      </label>
                      <div className="space-y-2 max-h-60 overflow-y-auto p-1">
                        {departments.map((dept) => (
                          <label
                            key={dept.id}
                            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={noticeData.departments.includes(dept.id)}
                              onChange={() => handleDepartmentToggle(dept.id)}
                              className="rounded text-blue-600"
                            />
                            <span className="text-sm">{dept.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Target Audience
                      </label>
                      <select
                        value={noticeData.targetAudience}
                        onChange={(e) =>
                          handleInputChange("targetAudience", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                      >
                        {targetAudiences.map((audience) => (
                          <option key={audience.id} value={audience.id}>
                            {audience.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Additional Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Author Information *
                      </label>
                      <input
                        type="text"
                        required
                        value={noticeData.author}
                        onChange={(e) =>
                          handleInputChange("author", e.target.value)
                        }
                        placeholder="e.g., Dean's Office, Placement Cell"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Venue (if applicable)
                      </label>
                      <input
                        type="text"
                        value={noticeData.venue}
                        onChange={(e) =>
                          handleInputChange("venue", e.target.value)
                        }
                        placeholder="e.g., Main Auditorium, Room 101"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Registration Link
                      </label>
                      <div className="flex gap-2">
                        <Link2 className="w-4 h-4 mt-3 text-gray-400" />
                        <input
                          type="url"
                          value={noticeData.registrationLink}
                          onChange={(e) =>
                            handleInputChange(
                              "registrationLink",
                              e.target.value,
                            )
                          }
                          placeholder="https://forms.google.com/..."
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Tags
                  </h2>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" &&
                          (e.preventDefault(), handleAddTag())
                        }
                        placeholder="Add a tag..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
                      >
                        Add
                      </button>
                    </div>

                    {noticeData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {noticeData.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            #{tag}
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="p-0.5 hover:bg-gray-200 rounded-full"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Publish Options Card */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-200 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Publish Options
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        checked={noticeData.isPinned}
                        onChange={(e) =>
                          handleInputChange("isPinned", e.target.checked)
                        }
                        className="text-blue-600"
                      />
                      <div>
                        <div className="flex items-center gap-2 font-medium">
                          <Pin className="w-4 h-4" />
                          Pin this notice
                        </div>
                        <p className="text-xs text-gray-500">
                          Keep this notice at the top of the notice board
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        checked={noticeData.isPublished}
                        onChange={(e) =>
                          handleInputChange("isPublished", e.target.checked)
                        }
                        className="text-blue-600"
                      />
                      <div>
                        <div className="flex items-center gap-2 font-medium">
                          <Bell className="w-4 h-4" />
                          Send notifications
                        </div>
                        <p className="text-xs text-gray-500">
                          Send email/SMS notifications to selected audience
                        </p>
                      </div>
                    </label>

                    <div className="pt-4 border-t">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Publishing...
                          </>
                        ) : (
                          <>
                            <Bell className="w-5 h-5" />
                            Publish Notice
                          </>
                        )}
                      </button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Notice will be immediately visible to selected audience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddNoticePage;
