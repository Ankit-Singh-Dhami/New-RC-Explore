"use client";

import { useState } from "react";
import {
  Search,
  Users,
  Zap,
  Trophy,
  Shield,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";

const CollegeClubsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const clubs = [
    {
      id: 1,
      name: "Innovation E-Cell",
      description:
        "Promoting entrepreneurship and innovation among students. Organizes workshops, startup competitions, and mentorship programs.",
      icon: <Zap className="w-6 h-6" />,
      color: "orange",
      members: "150+",
      events: "Monthly",
      contact: "ecell@college.edu",
      location: "Tech Block, Room 301",
      active: true,
    },
    {
      id: 2,
      name: "Sports Club",
      description:
        "Organizes sports events, tournaments, and fitness activities across various sports disciplines.",
      icon: <Trophy className="w-6 h-6" />,
      color: "green",
      members: "200+",
      events: "Weekly",
      contact: "sports@college.edu",
      location: "Sports Complex",
      active: true,
    },
    {
      id: 3,
      name: "NCC Unit",
      description:
        "National Cadet Corps unit focusing on discipline, leadership, and national service activities.",
      icon: <Shield className="w-6 h-6" />,
      color: "blue",
      members: "100+",
      events: "Regular Drills",
      contact: "ncc@college.edu",
      location: "NCC Building",
      active: true,
    },
    {
      id: 4,
      name: "Cultural Club",
      description:
        "Promotes cultural activities, performing arts, music, dance, and drama events throughout the year.",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      members: "120+",
      events: "Monthly",
      contact: "cultural@college.edu",
      location: "Auditorium",
      active: true,
    },
  ];

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; light: string }> =
      {
        orange: {
          bg: "bg-orange-500",
          text: "text-orange-600",
          light: "bg-orange-50",
        },
        green: {
          bg: "bg-green-500",
          text: "text-green-600",
          light: "bg-green-50",
        },
        blue: { bg: "bg-blue-500", text: "text-blue-600", light: "bg-blue-50" },
        purple: {
          bg: "bg-purple-500",
          text: "text-purple-600",
          light: "bg-purple-50",
        },
      };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  College Clubs
                </h1>
              </div>
              <p className="text-gray-600">
                Join student clubs and participate in campus activities
              </p>
            </div>
            <div className="text-sm text-gray-600">
              Active Clubs:{" "}
              <span className="font-bold text-gray-900">{clubs.length}</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClubs.map((club) => {
            const colors = getColorClasses(club.color);

            return (
              <div
                key={club.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Club Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${colors.light}`}>
                        <div className={colors.text}>{club.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {club.name}
                        </h3>
                        {club.active && (
                          <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{club.description}</p>

                  {/* Club Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">
                        {club.members}
                      </div>
                      <div className="text-sm text-gray-600">Members</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">
                        {club.events}
                      </div>
                      <div className="text-sm text-gray-600">Events</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{club.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{club.contact}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                    <span>See More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No clubs found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords
            </p>
          </div>
        )}

        {/* Club Categories Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {clubs.map((club) => {
            const colors = getColorClasses(club.color);
            return (
              <div
                key={club.id}
                className="bg-white rounded-lg border border-gray-200 p-4 text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-lg ${colors.light} flex items-center justify-center`}
                >
                  <div className={colors.text}>{club.icon}</div>
                </div>
                <div className="font-medium text-gray-900">{club.name}</div>
                <div className="text-sm text-gray-600">
                  {club.members} members
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            Interested in joining? Contact the club coordinators or visit their
            locations during club hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeClubsPage;
