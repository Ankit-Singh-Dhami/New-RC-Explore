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
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const FoundPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const foundItems = [
    {
      id: 1,
      title: "Water Bottle",
      description:
        "Blue steel bottle with college logo. Found near the gym entrance.",
      location: "Sports Complex",
      date: "2024-01-16",
      time: "09:30",
      contact: "sports@college.edu",
      status: "unclaimed",
      urgent: false,
    },
    {
      id: 2,
      title: "Textbook - Physics",
      description:
        "HC Verma Physics Part 1, has some notes on the first few pages.",
      location: "Library - Reading Room",
      date: "2024-01-15",
      time: "15:45",
      contact: "+91 98765 43210",
      status: "unclaimed",
      urgent: false,
    },
    {
      id: 3,
      title: "Student ID Card",
      description: "Name: Priya Singh, ID: 20230123. Found in the cafeteria.",
      location: "Main Cafeteria",
      date: "2024-01-14",
      time: "13:20",
      contact: "security@college.edu",
      status: "claimed",
      urgent: true,
    },
    {
      id: 4,
      title: "USB Drive",
      description: "SanDisk 32GB, blue color. Found in Computer Lab 201.",
      location: "Computer Science Block",
      date: "2024-01-13",
      time: "11:00",
      contact: "lab@college.edu",
      status: "unclaimed",
      urgent: false,
    },
    {
      id: 5,
      title: "Glasses Case",
      description: "Black leather case with spectacles inside.",
      location: "Auditorium",
      date: "2024-01-12",
      time: "19:30",
      contact: "+91 98765 67890",
      status: "unclaimed",
      urgent: false,
    },
    {
      id: 6,
      title: "Keys",
      description: "Set of 4 keys on a car keychain.",
      location: "Parking Lot A",
      date: "2024-01-11",
      time: "08:15",
      contact: "security@college.edu",
      status: "claimed",
      urgent: true,
    },
  ];

  const filteredItems = foundItems.filter((item) => {
    if (!searchQuery) return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Found Items</h1>
          <p className="text-gray-600 mt-1">
            Items found on campus - Help return them to their owners
          </p>
        </div>

        {/* Search and Post */}
        <div className="mb-6 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search found items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition"
            />
          </div>
          <Link href="/dashboard/features/found-item/post-found-item">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Post Found Item
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
                      <div className="flex items-center gap-2 mt-1">
                        {item.urgent && (
                          <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                            Urgent
                          </span>
                        )}
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            item.status === "claimed"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.status === "claimed"
                            ? "Claimed"
                            : "Not Claimed"}
                        </span>
                      </div>
                    </div>
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
                      <span className="font-medium">Found by:</span>{" "}
                      {item.contact}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    {item.status === "unclaimed" ? (
                      <>
                        <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Claim Item
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded text-sm text-center">
                        Item has been returned to owner
                      </div>
                    )}
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
              Try searching with different keywords or post a found item.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">
              {foundItems.length}
            </div>
            <div className="text-sm text-gray-600">Total Items Found</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {foundItems.filter((item) => item.status === "claimed").length}
            </div>
            <div className="text-sm text-gray-600">Items Returned</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {foundItems.filter((item) => item.status === "unclaimed").length}
            </div>
            <div className="text-sm text-gray-600">Awaiting Claim</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Found something? Post it here to help return it to the rightful
            owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundPage;
