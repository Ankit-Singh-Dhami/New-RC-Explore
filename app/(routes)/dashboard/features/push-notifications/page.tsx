"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  BellRing,
  Send,
  Users,
  Calendar,
  Clock,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  AlertCircle,
  Info,
  Megaphone,
  TrendingUp,
  BarChart3,
  Download,
  Plus,
  ChevronDown,
  RefreshCw,
  BellOff,
  Smartphone,
  Mail,
  MessageSquare,
  Target,
  Sparkles,
  Zap,
  History,
  Copy,
  ExternalLink,
  UserCheck,
  UserX,
  BookOpen,
  GraduationCap,
  Building,
  Flag,
} from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  channel: string;
  status: "sent" | "scheduled" | "draft" | "failed";
  sentAt?: string;
  scheduledFor?: string;
  audience: string;
  deliveryRate?: number;
  openRate?: number;
  sentTo: number;
  openedBy?: number;
  category: string;
  priority: string;
  scheduleType: "immediate" | "scheduled";
}

const PushNotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Mid-Term Exam Schedule Released",
      message:
        "Check your portal for the Spring 2024 mid-term exam schedule. Important updates included.",
      channel: "push",
      status: "sent",
      sentAt: "2024-03-10 10:30",
      audience: "all_students",
      deliveryRate: 98.5,
      openRate: 72.3,
      sentTo: 2450,
      openedBy: 1772,
      category: "academic",
      priority: "high",
      scheduleType: "immediate",
    },
    {
      id: 2,
      title: "Placement Drive: Tech Giants Inc.",
      message:
        "Final year students: Register for campus recruitment by March 20th. Limited seats available!",
      channel: "push",
      status: "sent",
      sentAt: "2024-03-12 14:15",
      audience: "final_year",
      deliveryRate: 99.2,
      openRate: 85.1,
      sentTo: 820,
      openedBy: 698,
      category: "placement",
      priority: "high",
      scheduleType: "scheduled",
    },
    {
      id: 3,
      title: "Library Summer Timings",
      message:
        "Library will operate on revised timings from May 15th. Check notice board for details.",
      channel: "push",
      status: "scheduled",
      scheduledFor: "2024-03-15 09:00",
      audience: "all_users",
      sentTo: 3120,
      category: "general",
      priority: "medium",
      scheduleType: "scheduled",
    },
    {
      id: 4,
      title: "Cultural Fest Volunteers Needed",
      message:
        "Join us as a volunteer for Cultural Fest 2024. Apply by March 18th. Exciting perks await!",
      channel: "sms",
      status: "sent",
      sentAt: "2024-03-08 16:45",
      audience: "students",
      deliveryRate: 95.7,
      openRate: 68.9,
      sentTo: 1890,
      openedBy: 1302,
      category: "cultural",
      priority: "medium",
      scheduleType: "immediate",
    },
    {
      id: 5,
      title: "Hostel Fee Payment Reminder",
      message:
        "Last date extended to March 20th. Late payment will attract penalties.",
      channel: "email",
      status: "draft",
      audience: "hostel_students",
      sentTo: 650,
      category: "administration",
      priority: "high",
      scheduleType: "scheduled",
    },
    {
      id: 6,
      title: "Workshop: AI & ML Applications",
      message:
        "Register now for our 2-day workshop on Machine Learning. Limited seats!",
      channel: "push",
      status: "failed",
      sentAt: "2024-03-09 11:20",
      audience: "cs_it_students",
      deliveryRate: 45.3,
      openRate: 32.1,
      sentTo: 450,
      openedBy: 144,
      category: "workshop",
      priority: "medium",
      scheduleType: "immediate",
    },
    {
      id: 7,
      title: "Sports Complex Maintenance",
      message:
        "Sports facilities will be closed for maintenance from March 25-30. Plan accordingly.",
      channel: "push",
      status: "sent",
      sentAt: "2024-03-13 15:30",
      audience: "all_users",
      deliveryRate: 97.8,
      openRate: 65.4,
      sentTo: 3100,
      openedBy: 2027,
      category: "sports",
      priority: "low",
      scheduleType: "immediate",
    },
    {
      id: 8,
      title: "Scholarship Application Deadline",
      message:
        "Last date to apply for various scholarships is March 18th. Don't miss out!",
      channel: "push",
      status: "scheduled",
      scheduledFor: "2024-03-17 10:00",
      audience: "all_students",
      sentTo: 2450,
      category: "scholarship",
      priority: "high",
      scheduleType: "scheduled",
    },
  ]);

  const [showNewNotificationModal, setShowNewNotificationModal] =
    useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    channel: "push",
    audience: "all_users",
    category: "general",
    priority: "medium",
    scheduleType: "immediate" as "immediate" | "scheduled",
    scheduledDateTime: "",
    sendNow: true,
    includeLink: false,
    linkUrl: "",
    includeImage: false,
    imageUrl: "",
    customSound: false,
    soundUrl: "",
    deepLink: false,
    deepLinkUrl: "",
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
      id: "emergency",
      name: "Emergency",
      color: "bg-red-500 text-white",
      icon: AlertCircle,
    },
  ];

  const channels = [
    { id: "push", name: "Push Notification", icon: Bell, color: "bg-blue-500" },
    { id: "email", name: "Email", icon: Mail, color: "bg-green-500" },
    { id: "sms", name: "SMS", icon: MessageSquare, color: "bg-purple-500" },
    { id: "all", name: "All Channels", icon: BellRing, color: "bg-gray-500" },
  ];

  const statuses = [
    {
      id: "sent",
      name: "Sent",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
    {
      id: "scheduled",
      name: "Scheduled",
      color: "bg-blue-100 text-blue-800",
      icon: Clock,
    },
    {
      id: "draft",
      name: "Draft",
      color: "bg-yellow-100 text-yellow-800",
      icon: Edit,
    },
    {
      id: "failed",
      name: "Failed",
      color: "bg-red-100 text-red-800",
      icon: XCircle,
    },
  ];

  const audiences = [
    { id: "all_users", name: "All Users", count: 3120, icon: Users },
    {
      id: "all_students",
      name: "All Students",
      count: 2450,
      icon: GraduationCap,
    },
    { id: "faculty", name: "Faculty", count: 320, icon: UserCheck },
    { id: "staff", name: "Staff", count: 150, icon: Users },
    {
      id: "final_year",
      name: "Final Year Students",
      count: 820,
      icon: GraduationCap,
    },
    {
      id: "first_year",
      name: "First Year Students",
      count: 650,
      icon: GraduationCap,
    },
    {
      id: "hostel_students",
      name: "Hostel Students",
      count: 650,
      icon: Building,
    },
    {
      id: "cs_it_students",
      name: "CS/IT Students",
      count: 450,
      icon: Smartphone,
    },
    {
      id: "research_scholars",
      name: "Research Scholars",
      count: 180,
      icon: UserCheck,
    },
  ];

  const priorities = [
    {
      id: "high",
      name: "High Priority",
      color: "bg-red-100 text-red-800",
      icon: AlertCircle,
    },
    {
      id: "medium",
      name: "Medium Priority",
      color: "bg-yellow-100 text-yellow-800",
      icon: Info,
    },
    {
      id: "low",
      name: "Low Priority",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
  ];

  const [stats, setStats] = useState({
    totalSent: 18460,
    deliveryRate: 96.7,
    openRate: 71.2,
    clickRate: 34.5,
    todaySent: 24,
    scheduled: 8,
    drafts: 3,
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      action: "Notification sent",
      details: "Placement drive alert",
      time: "2 mins ago",
      user: "Admin",
    },
    {
      id: 2,
      action: "Campaign created",
      details: "Scholarship deadline",
      time: "1 hour ago",
      user: "Placement Cell",
    },
    {
      id: 3,
      action: "Delivery failed",
      details: "Workshop notification",
      time: "3 hours ago",
      user: "System",
    },
    {
      id: 4,
      action: "Audience updated",
      details: "Added final year students",
      time: "5 hours ago",
      user: "Admin",
    },
    {
      id: 5,
      action: "Template created",
      details: "Emergency alert template",
      time: "1 day ago",
      user: "Admin",
    },
  ]);

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus.length === 0 ||
      selectedStatus.includes(notification.status);

    const matchesChannel =
      selectedChannels.length === 0 ||
      selectedChannels.includes(notification.channel);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(notification.category);

    const matchesAudience =
      selectedAudiences.length === 0 ||
      selectedAudiences.includes(notification.audience);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesChannel &&
      matchesCategory &&
      matchesAudience
    );
  });

  const sentNotifications = filteredNotifications.filter(
    (n) => n.status === "sent",
  );
  const scheduledNotifications = filteredNotifications.filter(
    (n) => n.status === "scheduled",
  );
  const draftNotifications = filteredNotifications.filter(
    (n) => n.status === "draft",
  );

  const handleSendNotification = () => {
    const newId = notifications.length + 1;
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");
    const audienceObj = audiences.find(
      (a) => a.id === newNotification.audience,
    );

    const notificationToAdd: Notification = {
      id: newId,
      title: newNotification.title,
      message: newNotification.message,
      channel: newNotification.channel,
      status: newNotification.sendNow ? "sent" : "scheduled",
      audience: newNotification.audience,
      sentTo: audienceObj?.count || 0,
      category: newNotification.category,
      priority: newNotification.priority,
      scheduleType: newNotification.scheduleType,
      ...(newNotification.sendNow && {
        sentAt: now,
        deliveryRate: 98.5,
        openRate: 0,
        openedBy: 0,
      }),
      ...(!newNotification.sendNow && {
        scheduledFor: newNotification.scheduledDateTime,
      }),
    };

    setNotifications([notificationToAdd, ...notifications]);
    setShowNewNotificationModal(false);
    setNewNotification({
      title: "",
      message: "",
      channel: "push",
      audience: "all_users",
      category: "general",
      priority: "medium",
      scheduleType: "immediate",
      scheduledDateTime: "",
      sendNow: true,
      includeLink: false,
      linkUrl: "",
      includeImage: false,
      imageUrl: "",
      customSound: false,
      soundUrl: "",
      deepLink: false,
      deepLinkUrl: "",
    });

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalSent: prev.totalSent + (audienceObj?.count || 0),
      todaySent: prev.todaySent + 1,
      scheduled: !newNotification.sendNow ? prev.scheduled + 1 : prev.scheduled,
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800 border-green-200";
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getChannelIcon = (channel: string) => {
    const channelObj = channels.find((c) => c.id === channel);
    return channelObj ? channelObj.icon : Bell;
  };

  const getChannelColor = (channel: string) => {
    const channelObj = channels.find((c) => c.id === channel);
    return channelObj ? channelObj.color : "bg-gray-500";
  };

  const NewNotificationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Create New Notification
              </h3>
              <p className="text-gray-600">
                Send push notifications, emails, or SMS to your audience
              </p>
            </div>
            <button
              onClick={() => setShowNewNotificationModal(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Channel Selection */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Channel Selection
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {channels.slice(0, 3).map((channel) => (
                    <button
                      key={channel.id}
                      type="button"
                      onClick={() =>
                        setNewNotification((prev) => ({
                          ...prev,
                          channel: channel.id,
                        }))
                      }
                      className={`p-4 rounded-lg border-2 transition ${newNotification.channel === channel.id ? `border-blue-500 ${channel.color} bg-opacity-10` : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`p-2 rounded-full ${channel.color} text-white`}
                        >
                          <channel.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">
                          {channel.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Notification Title *
                  </label>
                  <input
                    type="text"
                    value={newNotification.title}
                    onChange={(e) =>
                      setNewNotification((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Enter a clear and concise title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    maxLength={60}
                  />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      Keep it under 60 characters
                    </p>
                    <span className="text-xs text-gray-500">
                      {newNotification.title.length}/60
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={newNotification.message}
                    onChange={(e) =>
                      setNewNotification((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Enter your notification message here..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                    maxLength={240}
                  />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      Maximum 240 characters recommended
                    </p>
                    <span className="text-xs text-gray-500">
                      {newNotification.message.length}/240
                    </span>
                  </div>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Advanced Options
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newNotification.includeLink}
                      onChange={(e) =>
                        setNewNotification((prev) => ({
                          ...prev,
                          includeLink: e.target.checked,
                        }))
                      }
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Include Link</div>
                      <p className="text-xs text-gray-500">
                        Add a clickable URL to your notification
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newNotification.includeImage}
                      onChange={(e) =>
                        setNewNotification((prev) => ({
                          ...prev,
                          includeImage: e.target.checked,
                        }))
                      }
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Include Image</div>
                      <p className="text-xs text-gray-500">
                        Add a rich media image
                      </p>
                    </div>
                  </label>
                </div>

                {newNotification.includeLink && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Link URL
                    </label>
                    <input
                      type="url"
                      value={newNotification.linkUrl}
                      onChange={(e) =>
                        setNewNotification((prev) => ({
                          ...prev,
                          linkUrl: e.target.value,
                        }))
                      }
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                )}

                {newNotification.includeImage && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={newNotification.imageUrl}
                      onChange={(e) =>
                        setNewNotification((prev) => ({
                          ...prev,
                          imageUrl: e.target.value,
                        }))
                      }
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Settings */}
            <div className="space-y-6">
              {/* Audience Selection */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Target Audience
                </h4>
                <div className="space-y-2">
                  <select
                    value={newNotification.audience}
                    onChange={(e) =>
                      setNewNotification((prev) => ({
                        ...prev,
                        audience: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                  >
                    {audiences.map((audience) => (
                      <option key={audience.id} value={audience.id}>
                        {audience.name} ({audience.count} users)
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500">
                    Selected audience:{" "}
                    {
                      audiences.find((a) => a.id === newNotification.audience)
                        ?.count
                    }{" "}
                    users
                  </p>
                </div>
              </div>

              {/* Category & Priority */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Category & Priority
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Category
                    </label>
                    <select
                      value={newNotification.category}
                      onChange={(e) =>
                        setNewNotification((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Priority
                    </label>
                    <div className="space-y-2">
                      {priorities.map((priority) => (
                        <label
                          key={priority.id}
                          className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="priority"
                            value={priority.id}
                            checked={newNotification.priority === priority.id}
                            onChange={(e) =>
                              setNewNotification((prev) => ({
                                ...prev,
                                priority: e.target.value,
                              }))
                            }
                            className="text-blue-600"
                          />
                          <div
                            className={`px-3 py-1 rounded-full text-sm ${priority.color}`}
                          >
                            <div className="flex items-center gap-2">
                              <priority.icon className="w-4 h-4" />
                              {priority.name}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Schedule</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="schedule"
                      checked={newNotification.sendNow}
                      onChange={() =>
                        setNewNotification((prev) => ({
                          ...prev,
                          sendNow: true,
                          scheduleType: "immediate",
                        }))
                      }
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Send Immediately</div>
                      <p className="text-xs text-gray-500">
                        Send notification right away
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="schedule"
                      checked={!newNotification.sendNow}
                      onChange={() =>
                        setNewNotification((prev) => ({
                          ...prev,
                          sendNow: false,
                          scheduleType: "scheduled",
                        }))
                      }
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Schedule for Later</div>
                      <p className="text-xs text-gray-500">
                        Choose date and time
                      </p>
                    </div>
                  </label>

                  {!newNotification.sendNow && (
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Schedule Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        value={newNotification.scheduledDateTime}
                        onChange={(e) =>
                          setNewNotification((prev) => ({
                            ...prev,
                            scheduledDateTime: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                        min={new Date().toISOString().slice(0, 16)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-900 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-3">Preview</h4>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-blue-500 rounded-full">
                      <Bell className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium text-white text-sm">
                          {newNotification.title || "Notification Title"}
                        </h5>
                        <span className="text-xs text-gray-400">now</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">
                        {newNotification.message ||
                          "Notification message will appear here..."}
                      </p>
                    </div>
                  </div>
                  {newNotification.includeLink && newNotification.linkUrl && (
                    <div className="mt-2 pt-2 border-t border-gray-700">
                      <a
                        href="#"
                        className="text-blue-400 text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Open Link
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendNotification}
                disabled={!newNotification.title || !newNotification.message}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {newNotification.sendNow
                  ? "Send Notification Now"
                  : "Schedule Notification"}
              </button>
            </div>
          </div>
        </div>
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
                <BellRing className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Push Notifications
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Send announcements, alerts, and updates to students and staff
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setShowNewNotificationModal(true)}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">New Notification</span>
                <span className="sm:hidden">New</span>
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {stats.totalSent.toLocaleString()}
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Total Notifications Sent
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {stats.deliveryRate}%
                </div>
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Delivery Rate
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {stats.openRate}%
                </div>
                <Eye className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Open Rate</div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {stats.todaySent}
                </div>
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Sent Today</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-4 md:space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search notifications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition relative"
                  >
                    <Filter className="w-4 h-4" />
                    {(selectedStatus.length > 0 ||
                      selectedChannels.length > 0 ||
                      selectedCategories.length > 0) && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></span>
                    )}
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Filter Dropdown */}
              {showFilterMenu && (
                <div className="absolute right-4 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                      <div className="flex flex-wrap gap-2">
                        {statuses.map((status) => (
                          <button
                            key={status.id}
                            onClick={() => {
                              if (selectedStatus.includes(status.id)) {
                                setSelectedStatus(
                                  selectedStatus.filter((s) => s !== status.id),
                                );
                              } else {
                                setSelectedStatus([
                                  ...selectedStatus,
                                  status.id,
                                ]);
                              }
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm transition ${selectedStatus.includes(status.id) ? status.color + " ring-2 ring-offset-1 ring-blue-500" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                          >
                            {status.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Channel
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {channels.slice(0, 3).map((channel) => (
                          <button
                            key={channel.id}
                            onClick={() => {
                              if (selectedChannels.includes(channel.id)) {
                                setSelectedChannels(
                                  selectedChannels.filter(
                                    (c) => c !== channel.id,
                                  ),
                                );
                              } else {
                                setSelectedChannels([
                                  ...selectedChannels,
                                  channel.id,
                                ]);
                              }
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm transition flex items-center gap-2 ${selectedChannels.includes(channel.id) ? "bg-blue-100 text-blue-800 ring-2 ring-offset-1 ring-blue-500" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                          >
                            <channel.icon className="w-3 h-3" />
                            {channel.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification List */}
              <div className="space-y-4">
                {/* Sent Notifications */}
                {sentNotifications.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Sent Notifications ({sentNotifications.length})
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {sentNotifications.map((notification) => {
                        const ChannelIcon = getChannelIcon(
                          notification.channel,
                        );
                        const audienceObj = audiences.find(
                          (a) => a.id === notification.audience,
                        );

                        return (
                          <div
                            key={notification.id}
                            className="p-4 border border-gray-200 rounded-xl hover:shadow-sm transition"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className={`p-1.5 rounded-full ${getChannelColor(notification.channel)}`}
                                  >
                                    <ChannelIcon className="w-3 h-3 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900">
                                    {notification.title}
                                  </h4>
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(notification.status)}`}
                                  >
                                    {notification.status}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                  {notification.message}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {notification.sentAt}
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {audienceObj?.name} ({notification.sentTo})
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    {notification.openRate}% open rate
                                  </span>
                                </div>
                              </div>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <MoreVertical className="w-4 h-4 text-gray-500" />
                              </button>
                            </div>

                            {/* Performance Metrics */}
                            <div className="mt-3 pt-3 border-t">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                  <div className="text-lg font-bold text-gray-900">
                                    {notification.deliveryRate}%
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Delivery
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg font-bold text-gray-900">
                                    {notification.openRate}%
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Opened
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg font-bold text-gray-900">
                                    {notification.openedBy}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Users
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Scheduled Notifications */}
                {scheduledNotifications.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        Scheduled Notifications ({scheduledNotifications.length}
                        )
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {scheduledNotifications.map((notification) => {
                        const ChannelIcon = getChannelIcon(
                          notification.channel,
                        );
                        const audienceObj = audiences.find(
                          (a) => a.id === notification.audience,
                        );

                        return (
                          <div
                            key={notification.id}
                            className="p-4 border border-blue-200 bg-blue-50 rounded-xl"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className={`p-1.5 rounded-full ${getChannelColor(notification.channel)}`}
                                  >
                                    <ChannelIcon className="w-3 h-3 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900">
                                    {notification.title}
                                  </h4>
                                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-800">
                                    Scheduled
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                  {notification.message}
                                </p>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    Scheduled for: {notification.scheduledFor}
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Target className="w-3 h-3" />
                                    {audienceObj?.name} ({notification.sentTo})
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <button className="p-1 hover:bg-white rounded">
                                  <Edit className="w-4 h-4 text-gray-500" />
                                </button>
                                <button className="p-1 hover:bg-white rounded">
                                  <Trash2 className="w-4 h-4 text-gray-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Draft Notifications */}
                {draftNotifications.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Edit className="w-4 h-4 text-yellow-500" />
                        Draft Notifications ({draftNotifications.length})
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {draftNotifications.map((notification) => {
                        const ChannelIcon = getChannelIcon(
                          notification.channel,
                        );

                        return (
                          <div
                            key={notification.id}
                            className="p-4 border border-yellow-200 bg-yellow-50 rounded-xl"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className={`p-1.5 rounded-full ${getChannelColor(notification.channel)}`}
                                  >
                                    <ChannelIcon className="w-3 h-3 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900">
                                    {notification.title}
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                  {notification.message}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span>Last edited: 2 hours ago</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                                  Continue Editing
                                </button>
                                <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition text-sm">
                                  Delete Draft
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {filteredNotifications.length === 0 && (
                <div className="text-center py-8">
                  <BellOff className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No notifications found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or create a new notification
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-4 md:space-y-6">
            {/* Quick Templates */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Quick Templates
              </h2>
              <div className="space-y-3">
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
                  <div className="font-medium text-gray-900">
                    Exam Schedule Alert
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Notify students about exam schedules
                  </p>
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
                  <div className="font-medium text-gray-900">
                    Emergency Alert
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Send urgent notifications to all users
                  </p>
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
                  <div className="font-medium text-gray-900">
                    Event Reminder
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Remind users about upcoming events
                  </p>
                </button>
                <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
                  <div className="font-medium text-gray-900">
                    Fee Payment Reminder
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Send payment reminders to students
                  </p>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Recent Activity
                </div>
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="p-1.5 bg-gray-100 rounded-full">
                      <Bell className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </span>
                        <span className="text-xs text-gray-500">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        {activity.details}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        By {activity.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Insights */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Audience Insights
                </div>
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Most Active Time</span>
                    <span className="font-medium">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">
                      Best Performing Channel
                    </span>
                    <span className="font-medium">Push Notifications</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Average Open Rate</span>
                    <span className="font-medium">{stats.openRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${stats.openRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Performance Overview
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Users</span>
                  <span className="font-semibold text-gray-900">3,120</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Active Subscribers
                  </span>
                  <span className="font-semibold text-green-600">
                    2,980 (95.5%)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Opt-out Rate</span>
                  <span className="font-semibold text-red-600">1.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="font-semibold text-gray-900">2.3 mins</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                View Detailed Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Notification Modal */}
      {showNewNotificationModal && <NewNotificationModal />}
    </div>
  );
};

export default PushNotificationsPage;
