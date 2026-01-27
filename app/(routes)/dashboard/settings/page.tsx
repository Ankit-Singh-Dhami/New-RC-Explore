"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Lock,
  Mail,
  Phone,
  Save,
  X,
  Check,
  Key,
  Trash2,
  Image,
  Sun,
  Moon,
  Smartphone,
  Download,
  Database,
} from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [isSaving, setIsSaving] = useState(false);
  const [theme, setTheme] = useState("light");

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reminders: true,
  });

  const [account, setAccount] = useState({
    name: "Ankit Kumar",
    email: "ankit.kumar@email.com",
    phone: "+91 98765 43210",
    language: "English",
    timezone: "IST (UTC+5:30)",
  });

  const tabs = [
    { id: "account", label: "Account", icon: <User className="w-4 h-4" /> },
    {
      id: "appearance",
      label: "Appearance",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="w-4 h-4" />,
    },
    { id: "privacy", label: "Privacy", icon: <Shield className="w-4 h-4" /> },
    { id: "security", label: "Security", icon: <Lock className="w-4 h-4" /> },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully!");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Settings
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your account preferences
              </p>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200">
              {/* Account Settings */}
              {activeTab === "account" && (
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Account Settings
                  </h2>

                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-10 h-10 text-gray-500" />
                        </div>
                        <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition">
                          <Image className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Profile Picture
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          JPG, PNG or GIF. Max size 2MB
                        </p>
                        <div className="flex gap-2 mt-3">
                          <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition text-sm">
                            Upload
                          </button>
                          <button className="px-3 py-1.5 text-gray-600 rounded-md hover:bg-gray-100 transition text-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Account Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={account.name}
                          onChange={(e) =>
                            setAccount({ ...account, name: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={account.email}
                          onChange={(e) =>
                            setAccount({ ...account, email: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={account.phone}
                          onChange={(e) =>
                            setAccount({ ...account, phone: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Timezone
                        </label>
                        <select
                          value={account.timezone}
                          onChange={(e) =>
                            setAccount({ ...account, timezone: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                        >
                          <option>IST (UTC+5:30)</option>
                          <option>PST (UTC-8)</option>
                          <option>EST (UTC-5)</option>
                          <option>GMT (UTC+0)</option>
                        </select>
                      </div>
                    </div>

                    {/* Delete Account */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        Delete Account
                      </h3>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-red-800 mb-3">
                          Once you delete your account, there is no going back.
                          Please be certain.
                        </p>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance */}
              {activeTab === "appearance" && (
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Appearance
                  </h2>

                  <div className="space-y-6">
                    {/* Theme Selection */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Theme
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          {
                            id: "light",
                            label: "Light",
                            icon: <Sun className="w-5 h-5" />,
                          },
                          {
                            id: "dark",
                            label: "Dark",
                            icon: <Moon className="w-5 h-5" />,
                          },
                          {
                            id: "system",
                            label: "System",
                            icon: <Smartphone className="w-5 h-5" />,
                          },
                        ].map((themeOption) => (
                          <button
                            key={themeOption.id}
                            onClick={() => setTheme(themeOption.id)}
                            className={`p-4 rounded-lg border transition ${
                              theme === themeOption.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <div className="p-2 rounded-md bg-gray-100 text-gray-700">
                                {themeOption.icon}
                              </div>
                              <span className="font-medium">
                                {themeOption.label}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Display Settings */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Display
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">
                              Animations
                            </div>
                            <div className="text-sm text-gray-600">
                              Enable smooth transitions
                            </div>
                          </div>
                          <ToggleSwitch enabled={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">
                              Reduced Motion
                            </div>
                            <div className="text-sm text-gray-600">
                              Minimize animations
                            </div>
                          </div>
                          <ToggleSwitch enabled={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === "notifications" && (
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Notifications
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          Email Notifications
                        </div>
                        <div className="text-sm text-gray-600">
                          Receive updates via email
                        </div>
                      </div>
                      <ToggleSwitch
                        enabled={notifications.email}
                        onChange={() =>
                          setNotifications({
                            ...notifications,
                            email: !notifications.email,
                          })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          Push Notifications
                        </div>
                        <div className="text-sm text-gray-600">
                          Get alerts on your device
                        </div>
                      </div>
                      <ToggleSwitch
                        enabled={notifications.push}
                        onChange={() =>
                          setNotifications({
                            ...notifications,
                            push: !notifications.push,
                          })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          Reminders
                        </div>
                        <div className="text-sm text-gray-600">
                          Deadline and event reminders
                        </div>
                      </div>
                      <ToggleSwitch
                        enabled={notifications.reminders}
                        onChange={() =>
                          setNotifications({
                            ...notifications,
                            reminders: !notifications.reminders,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy */}
              {activeTab === "privacy" && (
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Privacy</h2>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Show Email Address
                          </div>
                          <div className="text-sm text-gray-600">
                            Allow others to see your email
                          </div>
                        </div>
                        <ToggleSwitch enabled={false} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Show Activity Status
                          </div>
                          <div className="text-sm text-gray-600">
                            Display when you're online
                          </div>
                        </div>
                        <ToggleSwitch enabled={true} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security */}
              {activeTab === "security" && (
                <div className="p-6 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900">Security</h2>

                  <div className="space-y-6">
                    {/* Password */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-gray-900">
                            Password
                          </div>
                          <div className="text-sm text-gray-600">
                            Last changed 30 days ago
                          </div>
                        </div>
                        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">
                          Change
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-4/5"></div>
                        </div>
                        <span className="text-xs font-medium text-green-600">
                          Strong
                        </span>
                      </div>
                    </div>

                    {/* Two-Factor */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          Two-Factor Authentication
                        </div>
                        <div className="text-sm text-gray-600">
                          Add an extra layer of security
                        </div>
                      </div>
                      <ToggleSwitch enabled={true} />
                    </div>

                    {/* Active Sessions */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        Active Sessions
                      </h3>
                      <div className="space-y-3">
                        {[
                          { device: "Windows Desktop", location: "New Delhi" },
                          { device: "iPhone 14", location: "Mumbai" },
                          { device: "MacBook Pro", location: "Bangalore" },
                        ].map((session, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <div className="font-medium">
                                {session.device}
                              </div>
                              <div className="text-sm text-gray-600">
                                {session.location}
                              </div>
                            </div>
                            <button className="text-red-600 hover:text-red-700 text-sm">
                              Logout
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Toggle Switch
const ToggleSwitch = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange?: () => void;
}) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      enabled ? "bg-blue-600" : "bg-gray-300"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

export default SettingsPage;
