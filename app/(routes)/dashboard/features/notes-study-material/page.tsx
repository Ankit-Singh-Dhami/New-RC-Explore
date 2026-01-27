"use client";

import { useState } from "react";
import {
  Search,
  Book,
  FileText,
  Video,
  Download,
  Calendar,
  Filter,
  Clock,
  Star,
  BookOpen,
  Users,
  Share2,
  Bookmark,
  MoreVertical,
  ChevronDown,
} from "lucide-react";

const NotesAndStudyMaterialsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const subjects = [
    "All",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Computer Science",
    "Engineering",
    "Business",
    "Humanities",
  ];

  const materialTypes = [
    "All",
    "Lecture Notes",
    "Past Papers",
    "Textbooks",
    "Video Lectures",
    "Study Guides",
  ];

  const studyMaterials = [
    {
      id: 1,
      title: "Calculus I Complete Notes",
      subject: "Mathematics",
      type: "Lecture Notes",
      description:
        "Comprehensive notes covering limits, derivatives, and integration techniques from Dr. Smith's lectures.",
      icon: <FileText className="w-6 h-6" />,
      color: "blue",
      uploadedBy: "Prof. John Smith",
      uploadDate: "2024-01-15",
      downloads: "1.2k",
      rating: 4.8,
      fileSize: "15.2 MB",
      format: "PDF",
      semester: "Semester 1",
      tags: ["Calculus", "Math101", "Study Guide"],
      featured: true,
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      type: "Textbooks",
      description:
        "Collection of recommended textbooks and reference materials for CS201 course.",
      icon: <Book className="w-6 h-6" />,
      color: "purple",
      uploadedBy: "Dr. Sarah Chen",
      uploadDate: "2024-01-10",
      downloads: "2.4k",
      rating: 4.9,
      fileSize: "8.5 MB",
      format: "PDF",
      semester: "Semester 3",
      tags: ["DSA", "Algorithms", "CS201"],
      featured: true,
    },
    {
      id: 3,
      title: "Physics Mechanics Past Papers",
      subject: "Physics",
      type: "Past Papers",
      description:
        "Collection of previous 5 years question papers with solutions.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "red",
      uploadedBy: "Academic Office",
      uploadDate: "2024-01-05",
      downloads: "3.1k",
      rating: 4.7,
      fileSize: "22.3 MB",
      format: "ZIP",
      semester: "Semester 2",
      tags: ["Past Papers", "Solutions", "Exam Prep"],
      featured: false,
    },
    {
      id: 4,
      title: "Organic Chemistry Video Lectures",
      subject: "Chemistry",
      type: "Video Lectures",
      description:
        "Complete lecture series covering organic chemistry fundamentals and reactions.",
      icon: <Video className="w-6 h-6" />,
      color: "green",
      uploadedBy: "Dr. Robert Kim",
      uploadDate: "2024-01-12",
      downloads: "890",
      rating: 4.6,
      fileSize: "1.2 GB",
      format: "MP4",
      semester: "Semester 2",
      tags: ["Videos", "Organic", "Reactions"],
      featured: false,
    },
    {
      id: 5,
      title: "Engineering Thermodynamics",
      subject: "Engineering",
      type: "Study Guides",
      description:
        "Comprehensive study guide with solved problems and concept summaries.",
      icon: <FileText className="w-6 h-6" />,
      color: "orange",
      uploadedBy: "Prof. Alex Johnson",
      uploadDate: "2024-01-08",
      downloads: "1.5k",
      rating: 4.5,
      fileSize: "12.8 MB",
      format: "PDF",
      semester: "Semester 4",
      tags: ["Thermo", "Engineering", "Guide"],
      featured: true,
    },
    {
      id: 6,
      title: "Business Statistics Notes",
      subject: "Business",
      type: "Lecture Notes",
      description:
        "Complete lecture notes with statistical analysis examples and case studies.",
      icon: <FileText className="w-6 h-6" />,
      color: "teal",
      uploadedBy: "Prof. Maria Garcia",
      uploadDate: "2024-01-03",
      downloads: "1.8k",
      rating: 4.4,
      fileSize: "9.7 MB",
      format: "PDF",
      semester: "Semester 1",
      tags: ["Statistics", "Business", "Analysis"],
      featured: false,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; light: string }> =
      {
        blue: {
          bg: "bg-blue-500",
          text: "text-blue-600",
          light: "bg-blue-50",
        },
        purple: {
          bg: "bg-purple-500",
          text: "text-purple-600",
          light: "bg-purple-50",
        },
        red: {
          bg: "bg-red-500",
          text: "text-red-600",
          light: "bg-red-50",
        },
        green: {
          bg: "bg-green-500",
          text: "text-green-600",
          light: "bg-green-50",
        },
        orange: {
          bg: "bg-orange-500",
          text: "text-orange-600",
          light: "bg-orange-50",
        },
        teal: {
          bg: "bg-teal-500",
          text: "text-teal-600",
          light: "bg-teal-50",
        },
      };
    return colors[color] || colors.blue;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesSubject =
      selectedSubject === "All" || material.subject === selectedSubject;
    const matchesType =
      selectedType === "All" || material.type === selectedType;

    return matchesSearch && matchesSubject && matchesType;
  });

  const featuredMaterials = filteredMaterials.filter(
    (material) => material.featured,
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Study Materials & Notes
                  </h1>
                  <p className="text-gray-600">
                    Access course materials, past papers, and study resources
                  </p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Total Resources:{" "}
              <span className="font-bold text-gray-900">
                {studyMaterials.length}
              </span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes, past papers, textbooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter by Subject
                  </div>
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedSubject === subject
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {materialTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedType === type
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Materials */}
        {featuredMaterials.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              Featured Study Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredMaterials.map((material) => {
                const colors = getColorClasses(material.color);
                return (
                  <div
                    key={material.id}
                    className="bg-gradient-to-r from-white to-blue-50 border-2 border-blue-200 rounded-xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${colors.light}`}>
                        <div className={colors.text}>{material.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {material.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {material.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {material.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>
                            {material.format} • {material.fileSize}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            {material.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Materials Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            All Study Materials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMaterials.map((material) => {
              const colors = getColorClasses(material.color);
              return (
                <div
                  key={material.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${colors.light}`}>
                          <div className={colors.text}>{material.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {material.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                              {material.subject}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                              {material.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{material.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {material.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {material.downloads}
                        </div>
                        <div className="text-sm text-gray-600">Downloads</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {material.rating}
                        </div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {material.fileSize}
                        </div>
                        <div className="text-sm text-gray-600">Size</div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>By {material.uploadedBy}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(material.uploadDate)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{material.semester}</span>
                        </div>
                        <span className="px-2 py-1 bg-gray-100 rounded">
                          {material.format}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 pb-6 flex gap-3">
                    <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No study materials found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-50 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="font-bold text-2xl text-gray-900">1.2k+</div>
            <div className="text-sm text-gray-600">Lecture Notes</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-purple-50 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div className="font-bold text-2xl text-gray-900">850+</div>
            <div className="text-sm text-gray-600">Past Papers</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-green-50 flex items-center justify-center">
              <Book className="w-6 h-6 text-green-600" />
            </div>
            <div className="font-bold text-2xl text-gray-900">320+</div>
            <div className="text-sm text-gray-600">Textbooks</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-orange-50 flex items-center justify-center">
              <Video className="w-6 h-6 text-orange-600" />
            </div>
            <div className="font-bold text-2xl text-gray-900">150+</div>
            <div className="text-sm text-gray-600">Video Lectures</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            Share your study materials with fellow students! Upload resources by
            visiting the Academic Office or contact your department coordinator.
          </p>
          <p className="mt-2 text-xs">
            Note: Please respect copyright laws and only share materials you
            have permission to distribute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesAndStudyMaterialsPage;
