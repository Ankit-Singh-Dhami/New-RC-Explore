"use client";

import { useState } from "react";
import { Plus, ThumbsUp, MessageSquare, Filter } from "lucide-react";
import Link from "next/link";

const InnovationPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Campus",
    "Academic",
    "Technology",
    "Sustainability",
    "Community",
  ];

  const ideas = [
    {
      id: 1,
      title: "Smart Campus Navigation App",
      description:
        "AR-based navigation app for campus with real-time location tracking and indoor mapping.",
      category: "Technology",
      author: "Rahul Verma",
      date: "2 days ago",
      upvotes: 124,
      comments: 23,
      status: "under-review",
      tags: ["App", "AR", "Navigation"],
    },
    {
      id: 2,
      title: "Solar-powered charging stations",
      description:
        "Install solar charging stations across campus for phones and laptops.",
      category: "Sustainability",
      author: "Priya Sharma",
      date: "1 week ago",
      upvotes: 89,
      comments: 15,
      status: "approved",
      tags: ["Solar", "Green Energy"],
    },
    {
      id: 3,
      title: "24/7 digital library access",
      description:
        "Extend digital library services to 24/7 with remote access to all resources.",
      category: "Academic",
      author: "Amit Patel",
      date: "3 days ago",
      upvotes: 67,
      comments: 12,
      status: "implemented",
      tags: ["Library", "Digital"],
    },
    {
      id: 4,
      title: "Campus food waste reduction program",
      description:
        "Implement composting and food donation system in all cafeterias.",
      category: "Sustainability",
      author: "Neha Singh",
      date: "2 weeks ago",
      upvotes: 45,
      comments: 8,
      status: "under-review",
      tags: ["Food", "Waste"],
    },
    {
      id: 5,
      title: "Student skill exchange platform",
      description:
        "Platform where students can teach and learn skills from each other.",
      category: "Community",
      author: "Karan Mehta",
      date: "4 days ago",
      upvotes: 92,
      comments: 18,
      status: "approved",
      tags: ["Learning", "Skills"],
    },
    {
      id: 6,
      title: "Smart classroom scheduling",
      description:
        "AI-based system to optimize classroom usage and reduce conflicts.",
      category: "Academic",
      author: "Sonia Kapoor",
      date: "1 day ago",
      upvotes: 56,
      comments: 10,
      status: "new",
      tags: ["AI", "Scheduling"],
    },
  ];

  const filteredIdeas = ideas.filter((idea) => {
    if (activeFilter !== "all" && idea.category !== activeFilter) return false;
    if (
      searchQuery &&
      !idea.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "implemented":
        return "bg-green-100 text-green-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "under-review":
        return "bg-yellow-100 text-yellow-800";
      case "new":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "implemented":
        return "Implemented";
      case "approved":
        return "Approved";
      case "under-review":
        return "Under Review";
      case "new":
        return "New";
      default:
        return "Pending";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Innovation Idea Box
              </h1>
              <p className="text-gray-600 mt-1">
                Share and vote on ideas to improve our campus
              </p>
            </div>
            <Link href="/dashboard/features/innovation-idea-box/create-idea">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Submit Idea
              </button>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveFilter(category === "All" ? "all" : category)
                  }
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                    (category === "All" && activeFilter === "all") ||
                    activeFilter === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        {filteredIdeas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(idea.status)}`}
                      >
                        {getStatusText(idea.status)}
                      </span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {idea.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-bold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {idea.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {idea.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{idea.author}</span>
                      <span className="mx-1">•</span>
                      <span>{idea.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {idea.upvotes}
                        </span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {idea.comments}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Filter className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No ideas found
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? "Try searching with different keywords."
                : "Submit the first idea!"}
            </p>
          </div>
        )}

        {/* Info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Vote on ideas you support. Top voted ideas get reviewed.</p>
        </div>
      </div>
    </div>
  );
};

export default InnovationPage;
