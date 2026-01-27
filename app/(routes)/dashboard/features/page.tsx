"use client";

import { useState, useMemo } from "react";
import { Search, Grid3x3, List, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import { features, categories, colorMap } from "./_components/FeaturesList";

const Page = () => {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // Filter features based on search and category
  const filteredFeatures = useMemo(() => {
    let result = features;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((feature) => feature.category === activeCategory);
    }

    // Filter by search query
    if (query) {
      result = result.filter(
        (feature) =>
          feature.title.toLowerCase().includes(query.toLowerCase()) ||
          feature.subtitle.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return result;
  }, [query, activeCategory]);

  const activeCategoryLabel =
    activeCategory === "all"
      ? "All Features"
      : categories.find((c) => c.id === activeCategory)?.label ||
        "All Features";

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Campus Portal Features
              </h1>
              <p className="text-gray-600 mt-2">
                Access all campus services and resources in one place
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto md:min-w-[400px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search features, resources, or services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="relative mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-700">
                Filter by:
              </span>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  <span className="font-medium">{activeCategoryLabel}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition ${
                          activeCategory === category.id
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700"
                        } ${category.id === "all" ? "border-b border-gray-200" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              category.id === "all"
                                ? "bg-gray-400"
                                : category.color === "blue"
                                  ? "bg-blue-500"
                                  : category.color === "green"
                                    ? "bg-green-500"
                                    : category.color === "purple"
                                      ? "bg-purple-500"
                                      : category.color === "orange"
                                        ? "bg-orange-500"
                                        : category.color === "pink"
                                          ? "bg-pink-500"
                                          : category.color === "indigo"
                                            ? "bg-indigo-500"
                                            : category.color === "cyan"
                                              ? "bg-cyan-500"
                                              : category.color === "gray"
                                                ? "bg-gray-500"
                                                : category.color === "red"
                                                  ? "bg-red-500"
                                                  : category.color === "teal"
                                                    ? "bg-teal-500"
                                                    : "bg-gray-400"
                            }`}
                          />
                          <span className="font-medium">{category.label}</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {activeCategory !== "all" && (
                <button
                  onClick={() => setActiveCategory("all")}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* View Toggle & Results */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {activeCategoryLabel}
                <span className="text-gray-500 font-normal ml-2">
                  ({filteredFeatures.length} features)
                </span>
              </h2>
              {query && (
                <p className="text-sm text-gray-600 mt-1">
                  Results for "{query}"
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">View:</span>
              </div>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 transition ${viewMode === "grid" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                  title="Grid view"
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 transition ${viewMode === "list" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid/List */}
          {filteredFeatures.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colors =
                  colorMap[feature.color as keyof typeof colorMap] ||
                  colorMap.blue;

                return (
                  <Link key={index} href={feature.link}>
                    <div
                      className={`group bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer ${
                        viewMode === "list" ? "flex items-center gap-4" : ""
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg ${colors.bg} ${viewMode === "list" ? "flex-shrink-0" : "mb-4"}`}
                      >
                        <Icon
                          className={`w-6 h-6 ${colors.icon} group-hover:scale-110 transition-transform`}
                        />
                      </div>

                      <div className={viewMode === "list" ? "flex-1" : ""}>
                        <div className="flex items-start justify-between mb-2">
                          <h3
                            className={`font-semibold ${viewMode === "list" ? "text-lg" : "text-base"} text-gray-900 group-hover:text-blue-700 transition-colors`}
                          >
                            {feature.title}
                          </h3>
                          {feature.badge && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                            >
                              {feature.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                          {feature.subtitle}
                        </p>

                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {feature.category}
                          </span>
                          <div className="text-sm text-blue-600 font-medium group-hover:text-blue-700 flex items-center gap-1">
                            <span>Open</span>
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No features found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Quick Stats Summary (Minimal) */}
          <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
            <p>
              Showing {filteredFeatures.length} of {features.length} features
              {activeCategory !== "all" && ` in ${activeCategoryLabel}`}
            </p>
          </div>

          {/* Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <div className="w-6 h-6 text-blue-600">❓</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Can't find what you're looking for? Our support team is here
                    to help.
                  </p>
                  <Link href="/dashboard/features/support">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Contact Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-200 rounded-lg">
                  <div className="w-6 h-6 text-gray-600">💡</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Have an Idea?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Suggest a new feature or improvement for the portal.
                  </p>
                  <Link href="/dashboard/features/innovation-idea-box">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                      Submit Idea
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
