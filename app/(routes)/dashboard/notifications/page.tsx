"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  BellOff,
  Check,
  CheckCircle,
  X,
  Filter,
  Search,
  Trash2,
  Settings,
  Clock,
  AlertCircle,
  Calendar,
  Users,
  MessageSquare,
  Star,
  ExternalLink,
  MoreVertical,
  Archive,
  Mail,
  BellRing,
  Sparkles,
  Eye,
  EyeOff,
  Download,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

// Notification Types
interface Notification {
  id: string;
  title: string;
  message: string;
  type:
    | "event"
    | "academic"
    | "social"
    | "system"
    | "announcement"
    | "reminder";
  priority: "low" | "medium" | "high" | "urgent";
  timestamp: Date;
  read: boolean;
  archived: boolean;
  sender: string;
  actionUrl?: string;
  metadata?: {
    eventId?: number;
    courseCode?: string;
    deadline?: Date;
    location?: string;
    attendees?: number;
  };
}

const NotificationsPage = () => {
  // State Management
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Career Fair Reminder",
      message:
        "Career Fair starts tomorrow at 9 AM. Don't forget to bring your resume and portfolio.",
      type: "event",
      priority: "high",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
      archived: false,
      sender: "Placement Cell",
      actionUrl: "/events/5",
      metadata: {
        eventId: 5,
        location: "Main Convention Hall",
        attendees: 500,
      },
    },
    {
      id: "2",
      title: "Assignment Submission Deadline",
      message:
        "CS-301 Assignment 3 submission deadline is tomorrow at 11:59 PM.",
      type: "academic",
      priority: "urgent",
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: false,
      archived: false,
      sender: "Computer Science Department",
      metadata: {
        courseCode: "CS-301",
        deadline: new Date(Date.now() + 86400000),
      },
    },
    {
      id: "3",
      title: "New Message in Group",
      message: "You have 5 new messages in 'Project Discussion' group chat.",
      type: "social",
      priority: "medium",
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      read: true,
      archived: false,
      sender: "Campus Connect",
    },
    {
      id: "4",
      title: "System Maintenance",
      message:
        "Campus portal will be down for maintenance from 2 AM to 4 AM tonight.",
      type: "system",
      priority: "medium",
      timestamp: new Date(Date.now() - 14400000), // 4 hours ago
      read: true,
      archived: false,
      sender: "IT Department",
    },
    {
      id: "5",
      title: "Welcome to New Semester!",
      message:
        "Welcome back! Check your timetable and course materials for the new semester.",
      type: "announcement",
      priority: "high",
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: true,
      archived: false,
      sender: "Academic Office",
    },
    {
      id: "6",
      title: "Library Book Due",
      message:
        "Your book 'Introduction to Algorithms' is due tomorrow. Please return or renew.",
      type: "reminder",
      priority: "medium",
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      read: true,
      archived: false,
      sender: "Library System",
    },
    {
      id: "7",
      title: "Sports Fest Registration",
      message:
        "Last day to register for Sports Fest events. Click here to register now.",
      type: "event",
      priority: "high",
      timestamp: new Date(Date.now() - 259200000), // 3 days ago
      read: true,
      archived: false,
      sender: "Sports Club",
      actionUrl: "/events/2",
    },
    {
      id: "8",
      title: "Fee Payment Reminder",
      message:
        "Last date for semester fee payment is approaching. Please pay before deadline.",
      type: "academic",
      priority: "urgent",
      timestamp: new Date(Date.now() - 345600000), // 4 days ago
      read: true,
      archived: false,
      sender: "Accounts Department",
    },
    {
      id: "9",
      title: "Class Cancelled",
      message:
        "Math-201 class at 2 PM today has been cancelled. Check notice for makeup class.",
      type: "academic",
      priority: "medium",
      timestamp: new Date(Date.now() - 432000000), // 5 days ago
      read: true,
      archived: false,
      sender: "Mathematics Department",
    },
    {
      id: "10",
      title: "Campus WiFi Upgrade",
      message: "New high-speed WiFi installed in Library and Cafeteria areas.",
      type: "system",
      priority: "low",
      timestamp: new Date(Date.now() - 518400000), // 6 days ago
      read: true,
      archived: false,
      sender: "IT Services",
    },
    {
      id: "11",
      title: "Blood Donation Camp",
      message:
        "Blood donation camp tomorrow at Medical Center. All donors will get a certificate.",
      type: "event",
      priority: "medium",
      timestamp: new Date(Date.now() - 604800000), // 7 days ago
      read: true,
      archived: false,
      sender: "NSS Unit",
      actionUrl: "/events/7",
    },
    {
      id: "12",
      title: "Exam Schedule Published",
      message:
        "Final exam schedule for Spring 2024 has been published. Check your portal.",
      type: "academic",
      priority: "high",
      timestamp: new Date(Date.now() - 691200000), // 8 days ago
      read: true,
      archived: false,
      sender: "Examination Cell",
    },
  ]);

  const [filter, setFilter] = useState<"all" | "unread" | "read" | "archived">(
    "all",
  );
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>(
    [],
  );
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    soundEnabled: true,
    vibrateEnabled: false,
    reminderNotifications: true,
    eventNotifications: true,
    academicNotifications: true,
    socialNotifications: true,
    systemNotifications: true,
  });

  // Filter notifications based on criteria
  const filteredNotifications = notifications.filter((notification) => {
    // Filter by read status
    if (filter === "unread" && notification.read) return false;
    if (filter === "read" && !notification.read) return false;
    if (filter === "archived" && !notification.archived) return false;
    if (filter !== "archived" && notification.archived) return false;

    // Filter by type
    if (typeFilter !== "all" && notification.type !== typeFilter) return false;

    // Filter by priority
    if (priorityFilter !== "all" && notification.priority !== priorityFilter)
      return false;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        notification.title.toLowerCase().includes(query) ||
        notification.message.toLowerCase().includes(query) ||
        notification.sender.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Statistics
  const stats = {
    total: notifications.length,
    unread: notifications.filter((n) => !n.read).length,
    archived: notifications.filter((n) => n.archived).length,
    urgent: notifications.filter((n) => n.priority === "urgent").length,
  };

  // Notification types for filtering
  const notificationTypes = [
    {
      id: "all",
      name: "All Types",
      icon: Bell,
      color: "bg-gray-100 text-gray-800",
    },
    {
      id: "event",
      name: "Events",
      icon: Calendar,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "academic",
      name: "Academic",
      icon: Book,
      color: "bg-green-100 text-green-800",
    },
    {
      id: "social",
      name: "Social",
      icon: Users,
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "system",
      name: "System",
      icon: Settings,
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "announcement",
      name: "Announcements",
      icon: MessageSquare,
      color: "bg-red-100 text-red-800",
    },
    {
      id: "reminder",
      name: "Reminders",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  // Priority options
  const priorityOptions = [
    { id: "all", name: "All Priorities", color: "text-gray-600" },
    {
      id: "urgent",
      name: "Urgent",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: "high",
      name: "High",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: "medium",
      name: "Medium",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: "low",
      name: "Low",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  // Format time ago
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  // Get type icon and color
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "event":
        return {
          icon: Calendar,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        };
      case "academic":
        return { icon: Book, color: "text-green-600", bgColor: "bg-green-100" };
      case "social":
        return {
          icon: Users,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        };
      case "system":
        return {
          icon: Settings,
          color: "text-orange-600",
          bgColor: "bg-orange-100",
        };
      case "announcement":
        return {
          icon: MessageSquare,
          color: "text-red-600",
          bgColor: "bg-red-100",
        };
      case "reminder":
        return {
          icon: Clock,
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
        };
      default:
        return { icon: Bell, color: "text-gray-600", bgColor: "bg-gray-100" };
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Toggle notification selection
  const toggleNotificationSelection = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id)
        ? prev.filter((notificationId) => notificationId !== id)
        : [...prev, id],
    );
  };

  // Select all notifications
  const selectAllNotifications = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map((n) => n.id));
    }
  };

  // Mark as read
  const markAsRead = (ids: string[]) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, read: true }
          : notification,
      ),
    );
    setSelectedNotifications([]);
  };

  // Mark as unread
  const markAsUnread = (ids: string[]) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, read: false }
          : notification,
      ),
    );
    setSelectedNotifications([]);
  };

  // Archive notifications
  const archiveNotifications = (ids: string[]) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, archived: true }
          : notification,
      ),
    );
    setSelectedNotifications([]);
  };

  // Unarchive notifications
  const unarchiveNotifications = (ids: string[]) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, archived: false }
          : notification,
      ),
    );
    setSelectedNotifications([]);
  };

  // Delete notifications
  const deleteNotifications = (ids: string[]) => {
    setNotifications((prev) =>
      prev.filter((notification) => !ids.includes(notification.id)),
    );
    setSelectedNotifications([]);
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    if (confirm("Are you sure you want to clear all notifications?")) {
      setNotifications([]);
    }
  };

  // Toggle notification setting
  const toggleNotificationSetting = (
    key: keyof typeof notificationSettings,
  ) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Simulate new notification
  const addSampleNotification = () => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      title: "New Announcement",
      message:
        "This is a sample notification to demonstrate the notification system.",
      type: "announcement",
      priority: "medium",
      timestamp: new Date(),
      read: false,
      archived: false,
      sender: "System",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Notifications
                </h1>
                <p className="text-gray-600">
                  Stay updated with campus activities and important updates
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={addSampleNotification}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-medium flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Add Sample
              </button>
              <Link href="/dashboard">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  Back to Dashboard
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Notifications</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Unread</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.unread}
                  </p>
                </div>
                <div className="p-2 bg-red-100 rounded-lg">
                  <BellRing className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <button
                onClick={markAllAsRead}
                className="mt-2 text-sm text-blue-600 hover:text-blue-700"
              >
                Mark all as read
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Urgent</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.urgent}
                  </p>
                </div>
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Archived</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.archived}
                  </p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Archive className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-6">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search notifications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Filter Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowFilterMenu(!showFilterMenu)}
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                    >
                      <Filter className="w-4 h-4" />
                      Filters
                      {(typeFilter !== "all" || priorityFilter !== "all") && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </button>

                    {showFilterMenu && (
                      <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-4">
                          <h4 className="font-medium text-gray-900 mb-3">
                            Filter Notifications
                          </h4>

                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">
                                Type
                              </p>
                              <div className="space-y-2">
                                {notificationTypes.map((type) => {
                                  const Icon = type.icon;
                                  return (
                                    <button
                                      key={type.id}
                                      onClick={() => setTypeFilter(type.id)}
                                      className={`w-full text-left px-3 py-2 rounded text-sm transition flex items-center gap-2 ${
                                        typeFilter === type.id
                                          ? `${type.color} font-medium`
                                          : "text-gray-600 hover:bg-gray-100"
                                      }`}
                                    >
                                      <Icon className="w-4 h-4" />
                                      {type.name}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">
                                Priority
                              </p>
                              <div className="space-y-2">
                                {priorityOptions.map((priority) => (
                                  <button
                                    key={priority.id}
                                    onClick={() =>
                                      setPriorityFilter(priority.id)
                                    }
                                    className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                                      priorityFilter === priority.id
                                        ? `${priority.color} font-medium`
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                  >
                                    {priority.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bulk Actions */}
                  {selectedNotifications.length > 0 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => markAsRead(selectedNotifications)}
                        className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm"
                      >
                        Mark Read
                      </button>
                      <button
                        onClick={() =>
                          deleteNotifications(selectedNotifications)
                        }
                        className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Filter Tabs */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    filter === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  onClick={() => setFilter("unread")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    filter === "unread"
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Unread ({stats.unread})
                </button>
                <button
                  onClick={() => setFilter("read")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    filter === "read"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Read ({stats.total - stats.unread})
                </button>
                <button
                  onClick={() => setFilter("archived")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    filter === "archived"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Archived ({stats.archived})
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {filteredNotifications.length === 0 ? (
                <div className="p-12 text-center">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No notifications found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery
                      ? "No notifications match your search criteria"
                      : "You're all caught up! No new notifications"}
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <>
                  {/* List Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={
                          selectedNotifications.length ===
                          filteredNotifications.length
                        }
                        onChange={selectAllNotifications}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">
                        {selectedNotifications.length > 0
                          ? `${selectedNotifications.length} selected`
                          : `${filteredNotifications.length} notifications`}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {selectedNotifications.length > 0 && (
                        <>
                          <button
                            onClick={() => markAsRead(selectedNotifications)}
                            className="text-sm text-blue-600 hover:text-blue-700"
                          >
                            Mark as read
                          </button>
                          <button
                            onClick={() =>
                              archiveNotifications(selectedNotifications)
                            }
                            className="text-sm text-gray-600 hover:text-gray-700"
                          >
                            Archive
                          </button>
                          <button
                            onClick={() =>
                              deleteNotifications(selectedNotifications)
                            }
                            className="text-sm text-red-600 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="divide-y">
                    {filteredNotifications.map((notification) => {
                      const {
                        icon: TypeIcon,
                        color,
                        bgColor,
                      } = getTypeIcon(notification.type);
                      const priorityBadge = getPriorityBadge(
                        notification.priority,
                      );

                      return (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition ${
                            !notification.read ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex gap-3">
                            {/* Selection Checkbox */}
                            <input
                              type="checkbox"
                              checked={selectedNotifications.includes(
                                notification.id,
                              )}
                              onChange={() =>
                                toggleNotificationSelection(notification.id)
                              }
                              className="mt-1 rounded text-blue-600 focus:ring-blue-500"
                            />

                            {/* Type Icon */}
                            <div className={`p-2 rounded-lg ${bgColor}`}>
                              <TypeIcon className={`w-4 h-4 ${color}`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium text-gray-900">
                                    {notification.title}
                                  </h4>
                                  {!notification.read && (
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                  )}
                                  {notification.priority === "urgent" && (
                                    <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                                      Urgent
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500">
                                    {formatTimeAgo(notification.timestamp)}
                                  </span>
                                  <button className="p-1 hover:bg-gray-200 rounded">
                                    <MoreVertical className="w-4 h-4 text-gray-500" />
                                  </button>
                                </div>
                              </div>

                              <p className="text-sm text-gray-600 mb-2">
                                {notification.message}
                              </p>

                              {/* Metadata */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <span className="text-xs text-gray-500">
                                    From: {notification.sender}
                                  </span>
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-xs border ${priorityBadge}`}
                                  >
                                    {notification.priority}
                                  </span>
                                  {notification.metadata?.eventId && (
                                    <span className="text-xs text-blue-600">
                                      Event #{notification.metadata.eventId}
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center gap-2">
                                  {notification.actionUrl && (
                                    <Link href={notification.actionUrl}>
                                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
                                        View Details
                                      </button>
                                    </Link>
                                  )}
                                  {!notification.read ? (
                                    <button
                                      onClick={() =>
                                        markAsRead([notification.id])
                                      }
                                      className="p-1 hover:bg-gray-200 rounded"
                                    >
                                      <Eye className="w-4 h-4 text-gray-500" />
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        markAsUnread([notification.id])
                                      }
                                      className="p-1 hover:bg-gray-200 rounded"
                                    >
                                      <EyeOff className="w-4 h-4 text-gray-500" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Notification Settings */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Notification Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      Push Notifications
                    </p>
                    <p className="text-sm text-gray-600">
                      Receive push notifications
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      toggleNotificationSetting("pushNotifications")
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notificationSettings.pushNotifications
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        notificationSettings.pushNotifications
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      Email Notifications
                    </p>
                    <p className="text-sm text-gray-600">
                      Receive email summaries
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      toggleNotificationSetting("emailNotifications")
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notificationSettings.emailNotifications
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        notificationSettings.emailNotifications
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Sound</p>
                    <p className="text-sm text-gray-600">
                      Play sound for notifications
                    </p>
                  </div>
                  <button
                    onClick={() => toggleNotificationSetting("soundEnabled")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notificationSettings.soundEnabled
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        notificationSettings.soundEnabled
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-medium text-gray-900 mb-3">
                    Notification Types
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Event Notifications
                      </span>
                      <button
                        onClick={() =>
                          toggleNotificationSetting("eventNotifications")
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          notificationSettings.eventNotifications
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            notificationSettings.eventNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Academic Updates
                      </span>
                      <button
                        onClick={() =>
                          toggleNotificationSetting("academicNotifications")
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          notificationSettings.academicNotifications
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            notificationSettings.academicNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Social Updates
                      </span>
                      <button
                        onClick={() =>
                          toggleNotificationSetting("socialNotifications")
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          notificationSettings.socialNotifications
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            notificationSettings.socialNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>

              <div className="space-y-3">
                <button
                  onClick={markAllAsRead}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Mark all as read</span>
                  </div>
                </button>

                <button
                  onClick={clearAllNotifications}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Trash2 className="w-5 h-5 text-red-600" />
                    <span>Clear all notifications</span>
                  </div>
                </button>

                <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span>Export notifications</span>
                  </div>
                </button>

                <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span>Advanced settings</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">
                    How to manage notifications?
                  </p>
                  <p className="text-sm text-gray-600">
                    Select notifications to perform bulk actions like mark as
                    read, archive, or delete.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">
                    Urgent notifications
                  </p>
                  <p className="text-sm text-gray-600">
                    Urgent notifications are highlighted in red and should be
                    addressed immediately.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">
                    Archived notifications
                  </p>
                  <p className="text-sm text-gray-600">
                    Archived notifications are hidden from main view but can be
                    accessed through the archive filter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Book icon component
const Book = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

export default NotificationsPage;
