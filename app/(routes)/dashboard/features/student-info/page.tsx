"use client";

import { useState } from "react";
import { Search, Filter, User, BookOpen, ChevronDown } from "lucide-react";
import Link from "next/link";

const StudentInfoPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const students = [
    {
      id: 1,
      name: "Ankit Kumar",
      rollNo: "2023001",
      branch: "Computer Science",
      year: "Final Year",
      avatarColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rollNo: "2023002",
      branch: "Electronics",
      year: "Third Year",
      avatarColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: 3,
      name: "Rahul Verma",
      rollNo: "2023003",
      branch: "Mechanical",
      year: "Second Year",
      avatarColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      id: 4,
      name: "Sneha Patel",
      rollNo: "2023004",
      branch: "Computer Science",
      year: "First Year",
      avatarColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      id: 5,
      name: "Arun Singh",
      rollNo: "2023005",
      branch: "Civil",
      year: "Final Year",
      avatarColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      id: 6,
      name: "Meera Iyer",
      rollNo: "2023006",
      branch: "Biotech",
      year: "Third Year",
      avatarColor: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
    {
      id: 7,
      name: "Vikram Reddy",
      rollNo: "2023007",
      branch: "Computer Science",
      year: "Second Year",
      avatarColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      id: 8,
      name: "Neha Gupta",
      rollNo: "2023008",
      branch: "Electrical",
      year: "First Year",
      avatarColor: "bg-gradient-to-br from-red-500 to-red-600",
    },
  ];

  const branches = [
    "all",
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Biotech",
  ];
  const years = [
    "all",
    "First Year",
    "Second Year",
    "Third Year",
    "Final Year",
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.branch.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBranch =
      selectedBranch === "all" || student.branch === selectedBranch;
    const matchesYear = selectedYear === "all" || student.year === selectedYear;

    return matchesSearch && matchesBranch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Student Directory
          </h1>
          <p className="text-gray-600">View student information</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or roll number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Filter:</span>
            </div>

            {/* Branch Filter */}
            <div className="relative">
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="pl-3 pr-2 py-2 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition appearance-none text-sm"
              >
                {branches.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch === "all" ? "All Branches" : branch}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-3 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition appearance-none text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "all" ? "All Years" : year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Clear Filters */}
            {(selectedBranch !== "all" ||
              selectedYear !== "all" ||
              searchQuery) && (
              <button
                onClick={() => {
                  setSelectedBranch("all");
                  setSelectedYear("all");
                  setSearchQuery("");
                }}
                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredStudents.length} of {students.length} students
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
            >
              {/* Avatar with Gradient */}
              <div className="flex justify-center mb-4">
                <div
                  className={`${student.avatarColor} w-16 h-16 rounded-full flex items-center justify-center`}
                >
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Student Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Roll No: {student.rollNo}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-4 h-4" />
                  <span>{student.branch}</span>
                </div>

                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {student.year}
                  </span>
                </div>
              </div>

              {/* View Profile */}
              <Link href="/dashboard/features/student-info/22">
                <button className="w-full py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition text-sm font-medium">
                  View Profile
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No students found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentInfoPage;
