"use client";

import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Search,
  MapPin,
  Users,
  Clock,
  Tag,
  MoreVertical,
  Edit,
  Trash2,
  Share2,
  Download,
  Grid,
  List,
  CalendarDays,
  Bell,
  Star,
  CheckCircle,
  XCircle,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const EventCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Talk: AI in 2024",
      description:
        "Industry experts discuss the future of AI and machine learning",
      date: "2024-03-15",
      startTime: "14:00",
      endTime: "16:00",
      location: "Auditorium A",
      category: "academic",
      organizer: "Computer Science Department",
      attendees: 120,
      maxAttendees: 200,
      status: "upcoming",
      priority: "high",
    },
    {
      id: 2,
      title: "Sports Fest Opening",
      description: "Annual sports festival opening ceremony",
      date: "2024-03-18",
      startTime: "10:00",
      endTime: "12:00",
      location: "Sports Complex",
      category: "sports",
      organizer: "Sports Club",
      attendees: 250,
      maxAttendees: 500,
      status: "upcoming",
      priority: "medium",
    },
    {
      id: 3,
      title: "Cultural Night",
      description: "Music, dance and drama performances",
      date: "2024-03-20",
      startTime: "18:00",
      endTime: "22:00",
      location: "Open Amphitheater",
      category: "cultural",
      organizer: "Cultural Club",
      attendees: 180,
      maxAttendees: 300,
      status: "upcoming",
      priority: "high",
    },
    {
      id: 4,
      title: "Startup Workshop",
      description: "How to build and launch your startup",
      date: "2024-03-22",
      startTime: "11:00",
      endTime: "13:00",
      location: "E-Cell Room",
      category: "entrepreneurship",
      organizer: "Innovation E-Cell",
      attendees: 85,
      maxAttendees: 100,
      status: "upcoming",
      priority: "medium",
    },
    {
      id: 5,
      title: "Career Fair",
      description: "Meet top companies and recruiters",
      date: "2024-03-25",
      startTime: "09:00",
      endTime: "17:00",
      location: "Main Hall",
      category: "career",
      organizer: "Placement Cell",
      attendees: 500,
      maxAttendees: 1000,
      status: "upcoming",
      priority: "high",
    },
    {
      id: 6,
      title: "Research Paper Writing",
      description: "Workshop on academic writing and publishing",
      date: "2024-03-12",
      startTime: "15:00",
      endTime: "17:00",
      location: "Library Seminar Room",
      category: "academic",
      organizer: "Research Cell",
      attendees: 60,
      maxAttendees: 80,
      status: "past",
      priority: "low",
    },
    {
      id: 7,
      title: "Blood Donation Camp",
      description: "Annual blood donation drive",
      date: "2024-03-28",
      startTime: "10:00",
      endTime: "16:00",
      location: "Medical Center",
      category: "social",
      organizer: "NSS Unit",
      attendees: 200,
      maxAttendees: 300,
      status: "upcoming",
      priority: "medium",
    },
    {
      id: 8,
      title: "Hackathon Finals",
      description: "24-hour coding competition finals",
      date: "2024-03-30",
      startTime: "09:00",
      endTime: "09:00",
      location: "Computer Center",
      category: "technical",
      organizer: "Coding Club",
      attendees: 50,
      maxAttendees: 100,
      status: "upcoming",
      priority: "high",
    },
  ]);

  const categories = [
    { id: "all", name: "All Events", color: "bg-gray-100 text-gray-800" },
    { id: "academic", name: "Academic", color: "bg-blue-100 text-blue-800" },
    { id: "sports", name: "Sports", color: "bg-green-100 text-green-800" },
    {
      id: "cultural",
      name: "Cultural",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "technical",
      name: "Technical",
      color: "bg-orange-100 text-orange-800",
    },
    { id: "career", name: "Career", color: "bg-red-100 text-red-800" },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      color: "bg-yellow-100 text-yellow-800",
    },
    { id: "social", name: "Social", color: "bg-pink-100 text-pink-800" },
  ];

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Current month days
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        isToday:
          dayDate.getDate() === today.getDate() &&
          dayDate.getMonth() === today.getMonth() &&
          dayDate.getFullYear() === today.getFullYear(),
      });
    }

    // Next month days
    const totalCells = 42; // 6 weeks * 7 days
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = formatDate(date);
    return events.filter((event) => event.date === dateStr);
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("all") ||
      selectedCategories.includes(event.category);

    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming");
  const pastEvents = filteredEvents.filter((e) => e.status === "past");

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.id === category);
    return cat ? cat.color : "bg-gray-100 text-gray-800";
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const EventModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {selectedEvent && (
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedEvent.category)}`}
                  >
                    {
                      categories.find((c) => c.id === selectedEvent.category)
                        ?.name
                    }
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(selectedEvent.priority)}`}
                  >
                    {selectedEvent.priority.charAt(0).toUpperCase() +
                      selectedEvent.priority.slice(1)}{" "}
                    Priority
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowEventModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">
                    {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-600">
                    {selectedEvent.startTime} - {selectedEvent.endTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <p className="text-gray-600">{selectedEvent.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <p className="text-gray-600">
                  {selectedEvent.attendees} / {selectedEvent.maxAttendees}{" "}
                  attendees • Organized by {selectedEvent.organizer}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
              <p className="text-gray-700">{selectedEvent.description}</p>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Register Now
              </button>
              <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                <Bell className="w-5 h-5" />
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
                <CalendarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Event Calendar
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Stay updated with campus events and activities
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/dashboard/features/events/add-event">
                <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Add Event</span>
                  <span className="sm:hidden">Add</span>
                </button>
              </Link>
              <button className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {upcomingEvents.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Upcoming Events
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {pastEvents.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Past Events
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                1,245
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Total Participants
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {categories.length - 1}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left Column - Calendar & Filters */}
          <div className="lg:w-2/3 space-y-4 md:space-y-6">
            {/* Calendar Controls */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={handleToday}
                    className="px-3 py-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Today
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("month")}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                        viewMode === "month"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Month
                    </button>
                    <button
                      onClick={() => setViewMode("week")}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                        viewMode === "week"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Week
                    </button>
                    <button
                      onClick={() => setViewMode("day")}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                        viewMode === "day"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Day
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Month View */}
              {viewMode === "month" && (
                <div className="overflow-x-auto">
                  <div className="min-w-[300px]">
                    {/* Weekday Headers */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {weekDays.map((day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-medium text-gray-500 py-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, index) => {
                        const dayEvents = getEventsForDate(day.date);
                        const isToday = day.isToday;

                        return (
                          <div
                            key={index}
                            className={`min-h-[80px] sm:min-h-[100px] p-1 sm:p-2 border rounded-lg ${
                              day.isCurrentMonth
                                ? isToday
                                  ? "bg-blue-50 border-blue-200"
                                  : "border-gray-200 hover:bg-gray-50"
                                : "bg-gray-50 border-gray-100 text-gray-400"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span
                                className={`text-sm font-medium ${
                                  isToday
                                    ? "text-blue-600"
                                    : day.isCurrentMonth
                                      ? "text-gray-900"
                                      : "text-gray-400"
                                }`}
                              >
                                {day.date.getDate()}
                              </span>
                              {isToday && (
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              )}
                            </div>

                            {/* Events for this day */}
                            <div className="space-y-1 max-h-[60px] sm:max-h-[80px] overflow-y-auto">
                              {dayEvents.slice(0, 3).map((event) => (
                                <div
                                  key={event.id}
                                  onClick={() => handleEventClick(event)}
                                  className={`px-2 py-1 rounded text-xs cursor-pointer truncate ${getCategoryColor(event.category)} hover:opacity-90 transition`}
                                >
                                  <div className="font-medium truncate">
                                    {event.title}
                                  </div>
                                  <div className="text-xs opacity-75 truncate">
                                    {event.startTime}
                                  </div>
                                </div>
                              ))}
                              {dayEvents.length > 3 && (
                                <div className="text-xs text-gray-500 px-2">
                                  +{dayEvents.length - 3} more
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Week View */}
              {viewMode === "week" && (
                <div className="text-center py-8 text-gray-500">
                  <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">Week view coming soon</p>
                  <p className="text-sm">
                    Switch to Month view to see all events
                  </p>
                </div>
              )}

              {/* Day View */}
              {viewMode === "day" && (
                <div className="text-center py-8 text-gray-500">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">Day view coming soon</p>
                  <p className="text-sm">
                    Switch to Month view to see all events
                  </p>
                </div>
              )}
            </div>

            {/* Upcoming Events List */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Upcoming Events
                </h2>
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm w-40 sm:w-48"
                      />
                    </div>
                    <button
                      onClick={() => setShowFilterMenu(!showFilterMenu)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition relative"
                    >
                      <Filter className="w-4 h-4" />
                      {selectedCategories.length > 0 &&
                        selectedCategories[0] !== "all" && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></span>
                        )}
                    </button>
                  </div>

                  {/* Filter Dropdown */}
                  {showFilterMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="p-3">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Filter by Category
                        </h4>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <label
                              key={category.id}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(
                                  category.id,
                                )}
                                onChange={() => toggleCategory(category.id)}
                                className="rounded text-blue-600 focus:ring-blue-500"
                              />
                              <span
                                className={`px-2 py-1 rounded text-xs ${category.color}`}
                              >
                                {category.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl hover:shadow-sm transition cursor-pointer"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {event.title}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(event.priority)}`}
                          >
                            {event.priority.charAt(0).toUpperCase()}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric" },
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>
                              {event.startTime} - {event.endTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-3">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs ${getCategoryColor(event.category)}`}
                        >
                          {
                            categories
                              .find((c) => c.id === event.category)
                              ?.name.split(" ")[0]
                          }
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Users className="w-3 h-3" />
                          <span>
                            {event.attendees}/{event.maxAttendees}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {upcomingEvents.length === 0 && (
                <div className="text-center py-6 sm:py-8">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    No upcoming events found
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Try adjusting your filters or check back later
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3 space-y-4 md:space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Event Categories
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${category.color} ${
                      selectedCategories.includes(category.id)
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : "hover:opacity-90"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                This Month
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Events Scheduled
                  </span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Your Registrations
                  </span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Attendance Rate</span>
                  <span className="font-semibold text-green-600">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Most Popular</span>
                  <span className="font-semibold text-gray-900">
                    Career Fair
                  </span>
                </div>
              </div>
            </div>

            {/* Today's Events */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Today's Events
              </h2>
              <div className="space-y-3">
                {getEventsForDate(new Date()).map((event) => (
                  <div
                    key={event.id}
                    className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                        {event.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(event.category)}`}
                      >
                        {
                          categories
                            .find((c) => c.id === event.category)
                            ?.name.split(" ")[0]
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>
                        {event.startTime} - {event.endTime}
                      </span>
                      <MapPin className="w-3 h-3 ml-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
                {getEventsForDate(new Date()).length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No events scheduled for today
                  </p>
                )}
              </div>
            </div>

            {/* Add to Calendar */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Never Miss an Event
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our calendar and get notified about all campus
                events
              </p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Subscribe to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && <EventModal />}
    </div>
  );
};

export default EventCalendarPage;
