"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Calendar,
  User,
  ChevronDown,
  Award,
  Briefcase,
  Eye,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const FacultyDirectoryPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const departments = [
    "All Departments",
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Mathematics",
    "Physics",
    "Chemistry",
    "English",
    "Management",
  ];

  const employmentTypes = [
    { id: "all", label: "All Types" },
    { id: "permanent", label: "Permanent" },
    { id: "visiting", label: "Visiting" },
    { id: "guest", label: "Guest" },
    { id: "part-time", label: "Part Time" },
  ];

  const faculty = useQuery(api.fetch.getFaculty);

  if (faculty === undefined) {
    return <>faculty details loading....</>;
  }

  const filteredFaculty = faculty.filter((prof) => {
    if (selectedDept !== "all" && prof.department !== selectedDept)
      return false;
    if (employmentType !== "all" && prof.type !== employmentType) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        prof.name.toLowerCase().includes(query) ||
        prof.department.toLowerCase().includes(query) ||
        prof.subjects.some((subject) =>
          subject.toLowerCase().includes(query),
        ) ||
        prof.research.includes(query)
      );
    }

    return true;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "permanent":
        return "bg-blue-100 text-blue-700";
      case "visiting":
        return "bg-green-100 text-green-700";
      case "guest":
        return "bg-purple-100 text-purple-700";
      case "part-time":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "permanent":
        return "Permanent";
      case "visiting":
        return "Visiting";
      case "guest":
        return "Guest";
      case "part-time":
        return "Part Time";
      default:
        return type;
    }
  };

  const getCurrentDepartmentLabel = () => {
    if (selectedDept === "all") return "All Departments";
    return (
      departments.find(
        (dept) => dept !== "All Departments" && dept === selectedDept,
      ) || selectedDept
    );
  };

  const getCurrentEmploymentLabel = () => {
    if (employmentType === "all") return "All Types";
    const type = employmentTypes.find((t) => t.id === employmentType);
    return type ? type.label : employmentType;
  };

  const handleViewProfile = (id: string) => {
    router.push(`/dashboard/features/faculty-directory/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Faculty Directory
          </h1>
          <p className="text-gray-600 mt-1">
            Find and connect with professors and faculty members
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search faculty by name, department, or subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
            />
          </div>
        </div>

        {/* Desktop Filter Section */}
        <div className="hidden md:block mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Department
              </h3>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() =>
                      setSelectedDept(dept === "All Departments" ? "all" : dept)
                    }
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                      (dept === "All Departments" && selectedDept === "all") ||
                      selectedDept === dept
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Employment Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {employmentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEmploymentType(type.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                      employmentType === type.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Buttons */}
        <div className="md:hidden mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex-1 flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-600 transition-transform ${
                  showMobileFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Active filters indicator */}
            {(selectedDept !== "all" || employmentType !== "all") && (
              <button
                onClick={() => {
                  setSelectedDept("all");
                  setEmploymentType("all");
                }}
                className="px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showMobileFilters && (
          <div className="md:hidden mb-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Department Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Department
              </h4>
              <div className="space-y-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setSelectedDept(
                        dept === "All Departments" ? "all" : dept,
                      );
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
                      (dept === "All Departments" && selectedDept === "all") ||
                      selectedDept === dept
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{dept}</span>
                    {(dept === "All Departments" && selectedDept === "all") ||
                    selectedDept === dept ? (
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {/* Employment Type Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Employment Type
              </h4>
              <div className="space-y-2">
                {employmentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setEmploymentType(type.id);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
                      employmentType === type.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{type.label}</span>
                    {employmentType === type.id ? (
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(selectedDept !== "all" || employmentType !== "all") && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {selectedDept !== "all" && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm">
                  <span>Department: {getCurrentDepartmentLabel()}</span>
                  <button
                    onClick={() => setSelectedDept("all")}
                    className="hover:text-blue-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {employmentType !== "all" && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
                  <span>Type: {getCurrentEmploymentLabel()}</span>
                  <button
                    onClick={() => setEmploymentType("all")}
                    className="hover:text-green-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredFaculty.map((prof) => (
            <div
              key={prof._id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
            >
              {/* Avatar with Gradient */}
              <div className="flex justify-center mb-4">
                <div className=" bg-black-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Faculty Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {prof.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{prof.designation}</p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>{prof.department}</span>
                </div>

                {/* Qualification */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-2">
                  <Award className="w-4 h-4" />
                  <span>{prof.education}</span>
                </div>

                {/* Experience */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{prof.experience}</span>
                </div>

                {/* Employment Type Badge */}
                <div className="mt-2">
                  <span
                    className={`inline-block px-3 py-1 ${getTypeColor(
                      prof.type,
                    )} rounded-full text-xs font-medium`}
                  >
                    {getTypeLabel(prof.type)}
                  </span>
                </div>
              </div>

              {/* View Profile Button */}
              <button
                onClick={() => handleViewProfile(prof._id)}
                className="w-full py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition text-sm font-medium flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Full Profile
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No faculty found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery
                ? "Try searching with different keywords."
                : "Try selecting different filters."}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("all");
                setEmploymentType("all");
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDirectoryPage;
