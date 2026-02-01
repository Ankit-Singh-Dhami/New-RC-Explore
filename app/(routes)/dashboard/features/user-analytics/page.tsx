"use client";

import { useState } from "react";
import {
  Users,
  TrendingUp,
  Clock,
  BookOpen,
  GraduationCap,
  Calendar,
  Activity,
  BarChart3,
  PieChart,
  Download,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Eye,
  UserCheck,
  UserX,
  Smartphone,
  Monitor,
  Globe,
  Target,
  Award,
  Clock3,
  MoreVertical,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const UserAnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeTab, setActiveTab] = useState("overview");

  const stats = {
    totalUsers: 15428,
    activeUsers: 8421,
    newUsers: 1245,
    avgSessionDuration: "12m 34s",
    retentionRate: 78.5,
    userGrowth: 15.2,
  };

  const userSegments = [
    { label: "Students", value: 65, color: "bg-blue-500" },
    { label: "Faculty", value: 20, color: "bg-purple-500" },
    { label: "Staff", value: 10, color: "bg-green-500" },
    { label: "Alumni", value: 5, color: "bg-orange-500" },
  ];

  const activityData = [
    { time: "12 AM", users: 120, active: 45 },
    { time: "2 AM", users: 85, active: 32 },
    { time: "4 AM", users: 65, active: 18 },
    { time: "6 AM", users: 210, active: 125 },
    { time: "8 AM", users: 1840, active: 1250 },
    { time: "10 AM", users: 3250, active: 2840 },
    { time: "12 PM", users: 4210, active: 3780 },
    { time: "2 PM", users: 3890, active: 3210 },
    { time: "4 PM", users: 4215, active: 3890 },
    { time: "6 PM", users: 2980, active: 2450 },
    { time: "8 PM", users: 1850, active: 1420 },
    { time: "10 PM", users: 920, active: 680 },
  ];

  const topPages = [
    { page: "Student Portal", views: 25480, users: 12450, avgTime: "4m 20s" },
    { page: "Course Catalog", views: 18720, users: 8920, avgTime: "3m 45s" },
    { page: "Library", views: 15430, users: 7450, avgTime: "8m 15s" },
    { page: "Events Calendar", views: 12890, users: 6210, avgTime: "2m 30s" },
    { page: "Grades", views: 11240, users: 5980, avgTime: "1m 50s" },
    { page: "Campus News", views: 9850, users: 4520, avgTime: "3m 10s" },
  ];

  const deviceStats = [
    { device: "Desktop", percentage: 55, users: 8483 },
    { device: "Mobile", percentage: 38, users: 5862 },
    { device: "Tablet", percentage: 7, users: 1079 },
  ];

  const userList = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@college.edu",
      role: "Student",
      lastActive: "2 minutes ago",
      status: "active",
      department: "Computer Science",
      sessions: 24,
      totalTime: "5h 42m",
    },
    {
      id: 2,
      name: "Dr. Sarah Miller",
      email: "sarah.miller@college.edu",
      role: "Faculty",
      lastActive: "15 minutes ago",
      status: "active",
      department: "Engineering",
      sessions: 18,
      totalTime: "12h 30m",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@college.edu",
      role: "Student",
      lastActive: "1 hour ago",
      status: "inactive",
      department: "Business",
      sessions: 12,
      totalTime: "3h 15m",
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "robert.wilson@college.edu",
      role: "Staff",
      lastActive: "2 hours ago",
      status: "inactive",
      department: "Administration",
      sessions: 8,
      totalTime: "6h 45m",
    },
    {
      id: 5,
      name: "Emma Davis",
      email: "emma.davis@college.edu",
      role: "Student",
      lastActive: "Just now",
      status: "active",
      department: "Arts",
      sessions: 32,
      totalTime: "15h 20m",
    },
    {
      id: 6,
      name: "Prof. James Brown",
      email: "james.brown@college.edu",
      role: "Faculty",
      lastActive: "30 minutes ago",
      status: "active",
      department: "Science",
      sessions: 28,
      totalTime: "42h 10m",
    },
  ];

  const conversionMetrics = [
    { label: "Portal Login", rate: 92, trend: "up" },
    { label: "Course Enrollment", rate: 78, trend: "up" },
    { label: "Resource Access", rate: 65, trend: "stable" },
    { label: "Event Registration", rate: 45, trend: "down" },
    { label: "Form Submission", rate: 85, trend: "up" },
  ];

  const TimeRangeButton = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <button
      onClick={() => setTimeRange(value)}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        timeRange === value
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, change, color }: any) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {change && (
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-600 font-medium">{change}</span>
          <span className="text-sm text-gray-500 ml-1">from last period</span>
        </div>
      )}
    </div>
  );

  const ProgressBar = ({
    percentage,
    color,
  }: {
    percentage: number;
    color: string;
  }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  User Analytics
                </h1>
                <p className="text-gray-600">
                  Monitor user activity, engagement, and platform usage
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <TimeRangeButton label="7D" value="7d" />
                <TimeRangeButton label="30D" value="30d" />
                <TimeRangeButton label="90D" value="90d" />
                <TimeRangeButton label="1Y" value="1y" />
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
            {["overview", "users", "behavior", "devices", "segments"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-medium capitalize transition ${
                    activeTab === tab
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Users"
            value={stats.totalUsers.toLocaleString()}
            icon={Users}
            change="+12.5%"
            color="bg-blue-500"
          />
          <StatCard
            title="Active Users"
            value={stats.activeUsers.toLocaleString()}
            icon={UserCheck}
            change="+8.3%"
            color="bg-green-500"
          />
          <StatCard
            title="Avg Session Duration"
            value={stats.avgSessionDuration}
            icon={Clock3}
            color="bg-purple-500"
          />
          <StatCard
            title="Retention Rate"
            value={`${stats.retentionRate}%`}
            icon={Target}
            change="+4.2%"
            color="bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* User Activity Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                User Activity (24h)
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Total Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Active Users</span>
                </div>
              </div>
            </div>

            <div className="h-64 relative">
              {/* Chart Area */}
              <div className="absolute inset-0 flex items-end">
                {activityData.map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center justify-end h-full px-1"
                  >
                    <div className="flex flex-col items-center w-full">
                      <div
                        className="w-6 bg-blue-200 rounded-t-lg mb-1"
                        style={{ height: `${item.users / 50}px` }}
                      ></div>
                      <div
                        className="w-6 bg-green-500 rounded-t-lg"
                        style={{ height: `${item.active / 50}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4,215</div>
                <div className="text-sm text-gray-600">Peak Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8:30 AM</div>
                <div className="text-sm text-gray-600">Peak Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">89.4%</div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
              </div>
            </div>
          </div>

          {/* User Segments */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              User Segments
            </h2>
            <div className="space-y-4 mb-6">
              {userSegments.map((segment, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${segment.color}`}
                      ></div>
                      <span className="font-medium text-gray-700">
                        {segment.label}
                      </span>
                    </div>
                    <span className="font-bold text-gray-900">
                      {segment.value}%
                    </span>
                  </div>
                  <ProgressBar
                    percentage={segment.value}
                    color={segment.color}
                  />
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Registered</span>
                <span className="font-bold text-gray-900">15,428</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Pages & Conversion Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Top Pages */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">
                Top Pages by Engagement
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {topPages.map((page, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {page.page}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {page.users.toLocaleString()} users
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">
                        {page.views.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">views</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Avg time: {page.avgTime}</span>
                    <span>
                      Engagement: {Math.round((page.users / page.views) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Metrics */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">
                Conversion Metrics
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {conversionMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          {metric.rate}%
                        </span>
                        {metric.trend === "up" && (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        )}
                        {metric.trend === "down" && (
                          <ChevronDown className="w-4 h-4 text-red-500" />
                        )}
                        {metric.trend === "stable" && (
                          <div className="w-4 h-4 text-gray-500">–</div>
                        )}
                      </div>
                    </div>
                    <ProgressBar
                      percentage={metric.rate}
                      color={
                        metric.trend === "up"
                          ? "bg-green-500"
                          : metric.trend === "down"
                            ? "bg-red-500"
                            : "bg-gray-400"
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Conversion Optimization
                    </h4>
                    <p className="text-sm text-gray-600">
                      Focus on improving event registration rates. Current rate
                      is below target.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Usage & Active Users */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Usage */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Device Usage
            </h2>
            <div className="space-y-4">
              {deviceStats.map((device, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {device.device === "Desktop" && (
                        <Monitor className="w-5 h-5 text-gray-600" />
                      )}
                      {device.device === "Mobile" && (
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      )}
                      {device.device === "Tablet" && (
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      )}
                      <span className="font-medium text-gray-700">
                        {device.device}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        {device.percentage}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {device.users.toLocaleString()} users
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                    percentage={device.percentage}
                    color={
                      device.device === "Desktop"
                        ? "bg-blue-500"
                        : device.device === "Mobile"
                          ? "bg-green-500"
                          : "bg-purple-500"
                    }
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Mobile Growth</div>
                  <div className="text-sm text-gray-600">
                    Increased by 18% this month
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Active Users List */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Recent User Activity
                </h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {userList.map((user) => (
                <div key={user.id} className="p-4 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          user.role === "Student"
                            ? "bg-blue-100 text-blue-600"
                            : user.role === "Faculty"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900">
                            {user.name}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              user.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {user.email}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${
                              user.role === "Student"
                                ? "bg-blue-100 text-blue-800"
                                : user.role === "Faculty"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900 font-medium">
                        {user.lastActive}
                      </div>
                      <div className="text-sm text-gray-500">
                        {user.sessions} sessions
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {user.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Total: {user.totalTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium py-2">
                View all users
              </button>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Bounce Rate</div>
            <div className="text-xl font-bold text-gray-900">24.3%</div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <ChevronDown className="w-4 h-4" />
              3.2% lower
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Pages/Session</div>
            <div className="text-xl font-bold text-gray-900">5.8</div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              0.7 higher
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">New vs Returning</div>
            <div className="text-xl font-bold text-gray-900">65% / 35%</div>
            <div className="text-sm text-gray-600">More returning users</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Goal Completions</div>
            <div className="text-xl font-bold text-gray-900">8,450</div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              12% increase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnalyticsPage;
