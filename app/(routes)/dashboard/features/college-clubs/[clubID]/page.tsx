"use client";

import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Zap,
  Trophy,
  Shield,
  Users,
  Calendar,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Globe,
  Facebook,
  Youtube,
  User,
  Award,
  Clock,
  Users as UsersIcon,
} from "lucide-react";
import Link from "next/link";

// Define proper TypeScript interfaces
interface CommitteeMember {
  role: string;
  name: string;
}

interface Event {
  name: string;
  date: string;
  time?: string;
  description?: string;
}

interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  website?: string;
  facebook?: string;
  youtube?: string;
}

interface Club {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  color: string;
  members: string;
  events: string;
  contact: string;
  location: string;
  active: boolean;
  category: string;
  established: string;
  president: string;
  vicePresident?: string;
  facultyCoordinator?: string;
  social: SocialLinks;
  upcomingEvents: Event[];
  pastEvents?: Event[];
  achievements: string[];
  committee?: CommitteeMember[];
  requirements?: string[];
}

const ClubDetailsPage = () => {
  const params = useParams();
  const clubId = params?.clubId as string;

  // Mock data with proper typing
  const clubs: Club[] = [
    {
      id: 1,
      name: "Innovation E-Cell",
      description:
        "Promoting entrepreneurship and innovation among students. Organizes workshops, startup competitions, and mentorship programs.",
      longDescription: `The Innovation Entrepreneurship Cell (E-Cell) is a student-run organization dedicated to fostering entrepreneurial spirit and innovation on campus. We provide a platform for students to transform their ideas into viable business ventures through mentorship, funding opportunities, and networking events.

Our mission is to create a vibrant entrepreneurial ecosystem where students can learn, experiment, and grow. We believe that entrepreneurship is not just about starting businesses, but about developing a mindset that embraces innovation, problem-solving, and leadership.

Join us to be part of a community that shapes the future of entrepreneurship!`,
      icon: <Zap className="w-6 h-6" />,
      color: "orange",
      members: "150+",
      events: "Monthly",
      contact: "ecell@college.edu",
      location: "Tech Block, Room 301",
      active: true,
      category: "Entrepreneurship",
      established: "2018",
      president: "Aarav Sharma",
      vicePresident: "Neha Patel",
      facultyCoordinator: "Dr. Rajesh Kumar",
      social: {
        instagram: "@innovate_ecell",
        linkedin: "innovation-ecell",
        website: "ecell.college.edu",
      },
      upcomingEvents: [
        {
          name: "Startup Pitch Day",
          date: "2024-03-15",
          time: "2:00 PM - 5:00 PM",
          description: "Pitch your startup idea to investors and win funding",
        },
        {
          name: "Entrepreneur Talk Series",
          date: "2024-03-22",
          time: "4:00 PM - 6:00 PM",
          description: "Session with successful alumni entrepreneurs",
        },
        {
          name: "Business Model Workshop",
          date: "2024-04-05",
          time: "10:00 AM - 1:00 PM",
          description: "Learn to create effective business models",
        },
      ],
      pastEvents: [
        { name: "Hackathon 2023", date: "2023-11-15" },
        { name: "Funding Fair", date: "2023-09-20" },
        { name: "Mentorship Program", date: "2023-08-01" },
      ],
      achievements: [
        "Winner of National Startup Challenge 2023",
        "10+ startups incubated successfully",
        "Raised $500,000+ in funding for student startups",
        "Featured in Entrepreneur Magazine 2022",
        "Best E-Cell Award at National Level",
      ],
      committee: [
        { role: "President", name: "Aarav Sharma" },
        { role: "Vice President", name: "Neha Patel" },
        { role: "Events Head", name: "Rohan Mehta" },
        { role: "Marketing Head", name: "Priya Singh" },
        { role: "Tech Head", name: "Karan Verma" },
      ],
      requirements: [
        "Open to all undergraduate students",
        "No prior experience required",
        "Willingness to learn and collaborate",
        "Passion for innovation and problem-solving",
      ],
    },
    {
      id: 2,
      name: "Sports Club",
      description:
        "Organizes sports events, tournaments, and fitness activities across various sports disciplines.",
      longDescription: `The Sports Club is dedicated to promoting physical fitness, sportsmanship, and competitive spirit among students. We organize various sports activities, tournaments, and fitness programs throughout the year.

Our facilities include access to the college sports complex, gymnasium, swimming pool, and multiple courts for different sports. We participate in inter-college tournaments and have produced several national-level athletes.

Join us to stay fit, make friends, and represent your college in various competitions!`,
      icon: <Trophy className="w-6 h-6" />,
      color: "green",
      members: "200+",
      events: "Weekly",
      contact: "sports@college.edu",
      location: "Sports Complex",
      active: true,
      category: "Sports",
      established: "2015",
      president: "Raj Patel",
      social: {
        instagram: "@college_sports",
        linkedin: "college-sports-club",
      },
      upcomingEvents: [
        { name: "Annual Sports Meet", date: "2024-04-01" },
        { name: "Inter-College Cricket", date: "2024-03-20" },
      ],
      achievements: [
        "University Champions 2022-23",
        "5 National level players",
      ],
      committee: [],
      requirements: [],
    },
    {
      id: 3,
      name: "NCC Unit",
      description:
        "National Cadet Corps unit focusing on discipline, leadership, and national service activities.",
      longDescription: `The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces. Our unit focuses on developing character, discipline, leadership, and a spirit of adventure among students.

We conduct regular drills, adventure activities, and community service programs. NCC cadets get opportunities to participate in national camps, mountaineering expeditions, and social service initiatives.

Join NCC to develop leadership qualities and serve the nation!`,
      icon: <Shield className="w-6 h-6" />,
      color: "blue",
      members: "100+",
      events: "Regular Drills",
      contact: "ncc@college.edu",
      location: "NCC Building",
      active: true,
      category: "Discipline & Service",
      established: "2010",
      president: "Captain Anjali Singh",
      social: {
        instagram: "@ncc_unit_college",
      },
      upcomingEvents: [
        { name: "Republic Day Parade", date: "2024-01-26" },
        { name: "Annual Camp", date: "2024-12-15" },
      ],
      achievements: [
        "Best NCC Unit State Award 2022",
        "100% selection in SSB interviews",
      ],
      committee: [],
      requirements: [],
    },
    {
      id: 4,
      name: "Cultural Club",
      description:
        "Promotes cultural activities, performing arts, music, dance, and drama events throughout the year.",
      longDescription: `The Cultural Club is the heart of artistic expression on campus. We celebrate diversity through various cultural activities including music, dance, drama, fine arts, and literary events.

We organize annual fests, cultural nights, and inter-college competitions. Our members get opportunities to showcase their talents and represent the college at various cultural events.

Join us to explore your artistic side and be part of memorable cultural experiences!`,
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      members: "120+",
      events: "Monthly",
      contact: "cultural@college.edu",
      location: "Auditorium",
      active: true,
      category: "Arts & Culture",
      established: "2016",
      president: "Priya Verma",
      social: {
        instagram: "@cultural_club",
        facebook: "collegecultural",
        youtube: "CollegeCulturalEvents",
      },
      upcomingEvents: [
        { name: "Annual Fest", date: "2024-02-20" },
        { name: "Music Night", date: "2024-03-10" },
      ],
      achievements: [
        "Best Cultural Club State Level",
        "National Dance Competition Winners",
      ],
      committee: [],
      requirements: [],
    },
  ];

  const club = clubs.find((c) => c.id === parseInt(clubId || "1"));

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Club Not Found
          </h2>
          <Link
            href="/dashboard/features/college-clubs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Clubs
          </Link>
        </div>
      </div>
    );
  }

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

  const colors = getColorClasses(club.color);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/dashboard/features/college-clubs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Clubs
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Club Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${colors.light}`}>
                  <div className={colors.text}>{club.icon}</div>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {club.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {club.category}
                    </span>
                    {club.active && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Active
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      Est. {club.established}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {club.members}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    Members
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {club.events}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Events
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {club.upcomingEvents.length}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4" />
                    Upcoming
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {club.achievements.length}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                    <Award className="w-4 h-4" />
                    Achievements
                  </div>
                </div>
              </div>
            </div>

            {/* Join Button */}
            <div className="md:w-48">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium mb-4">
                Join Club
              </button>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the Club
              </h2>
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {club.longDescription}
              </p>

              {/* Requirements */}
              {club.requirements && club.requirements.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Membership Requirements
                  </h3>
                  <ul className="space-y-2">
                    {club.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {club.upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {event.name}
                        </h3>
                        {event.description && (
                          <p className="text-gray-600 text-sm mt-1">
                            {event.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 font-medium">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        {event.time && (
                          <div className="text-gray-600 text-sm">
                            {event.time}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {club.achievements && club.achievements.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Achievements & Awards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {club.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <Award
                        className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <a
                    href={`mailto:${club.contact}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {club.contact}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{club.location}</span>
                </div>
              </div>

              {/* Committee */}
              {club.committee && club.committee.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                    Club Committee
                  </h4>
                  <div className="space-y-3">
                    {club.committee.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-gray-900">
                            {member.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {member.role}
                          </div>
                        </div>
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="space-y-3">
                {club.social.instagram && (
                  <a
                    href={`https://instagram.com/${club.social.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">
                      {club.social.instagram}
                    </span>
                  </a>
                )}
                {club.social.linkedin && (
                  <a
                    href={`https://linkedin.com/company/${club.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    <span className="text-gray-700">LinkedIn</span>
                  </a>
                )}
                {club.social.website && (
                  <a
                    href={`https://${club.social.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Globe className="w-5 h-5 text-gray-700" />
                    <span className="text-gray-700">Website</span>
                  </a>
                )}
              </div>
            </div>

            {/* Meeting Schedule */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Regular Meetings
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">
                      Weekly Meeting
                    </div>
                    <div className="text-sm text-gray-600">Every Friday</div>
                  </div>
                  <div className="text-gray-700">4:00 PM</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">
                      Training Session
                    </div>
                    <div className="text-sm text-gray-600">Every Tuesday</div>
                  </div>
                  <div className="text-gray-700">5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailsPage;
