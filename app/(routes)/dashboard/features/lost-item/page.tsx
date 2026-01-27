"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Share2,
} from "lucide-react";
import Link from "next/link";

const LostPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const lostItems = [
    {
      id: 1,
      title: "MacBook Pro 14-inch",
      description:
        "Space Gray, 2023 model with M2 Pro chip. Found in Computer Lab 302.",
      location: "Computer Lab Building",
      date: "2024-01-15",
      time: "14:30",
      contact: "ankit@email.com",
      reward: "₹5,000",
      urgent: true,
    },
    {
      id: 2,
      title: "Calculus Textbook",
      description:
        "Thomas' Calculus 14th Edition, has handwritten notes inside.",
      location: "Library - 2nd Floor",
      date: "2024-01-14",
      time: "10:15",
      contact: "+91 98765 43210",
      reward: null,
      urgent: false,
    },
    {
      id: 3,
      title: "Student ID Card",
      description: "Name: Rahul Sharma, ID: 20230045. Photo attached.",
      location: "Cafeteria",
      date: "2024-01-13",
      time: "18:45",
      contact: "rahul@email.com",
      reward: null,
      urgent: true,
    },
    {
      id: 4,
      title: "Wireless Earphones",
      description: "White Sony WF-1000XM4 in a black case.",
      location: "Gym",
      date: "2024-01-12",
      time: "20:00",
      contact: "gym@college.edu",
      reward: "₹2,000",
      urgent: false,
    },
    {
      id: 5,
      title: "Blue Hoodie",
      description: "Nike hoodie with college logo on left chest.",
      location: "Basketball Court",
      date: "2024-01-11",
      time: "16:30",
      contact: "sports@college.edu",
      reward: null,
      urgent: false,
    },
    {
      id: 6,
      title: "Scientific Calculator",
      description: "Casio FX-991EX, has stickers on the back.",
      location: "Physics Lab",
      date: "2024-01-10",
      time: "11:00",
      contact: "+91 98765 12345",
      reward: "₹1,500",
      urgent: false,
    },
  ];

  const filteredItems = lostItems.filter((item) => {
    if (!searchQuery) return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Lost Items</h1>
          <p className="text-gray-600 mt-1">
            Find and report lost items on campus
          </p>
        </div>
        {/* Search and Report */}
        <div className="mb-6 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search lost items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
            />
          </div>
          <Link href="/dashboard/features/lost-item/report-item">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Report Lost
            </button>
          </Link>
        </div>
        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Item Header */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      {item.urgent && (
                        <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    {item.reward && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Reward: {item.reward}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{item.time}</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Contact:</span>{" "}
                      {item.contact}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                      Claim Item
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords.
            </p>
          </div>
        )}
        {/* Footer */}
        import Link from "next/link";
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Found something?{" "}
            <Link
              href="/dashboard/features/found-item"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Report it
            </Link>{" "}
            to help others find their lost items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LostPage;
