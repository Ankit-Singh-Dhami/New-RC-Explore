import Link from "next/link";
import { Building2, School, Eye } from "lucide-react";

const Page = () => {
  const campusModels = [
    {
      id: "college",
      title: "College Campus 3D",
      description:
        "Explore the entire college campus in an interactive 3D environment.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/dashboard/3d-campus/college",
      color: "blue",
    },
    {
      id: "classroom",
      title: "Classroom 3D Model",
      description: "View classrooms, labs, and seating layouts in 3D.",
      icon: <School className="w-6 h-6" />,
      link: "/dashboard/3d-campus/classroom",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              3D Campus Explorer
            </h1>
          </div>
          <p className="text-gray-600">
            Interactive 3D visualization of college facilities
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campusModels.map((model) => (
            <Link key={model.id} href={model.link}>
              <div className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        model.color === "blue" ? "bg-blue-50" : "bg-green-50"
                      }`}
                    >
                      <div
                        className={
                          model.color === "blue"
                            ? "text-blue-600"
                            : "text-green-600"
                        }
                      >
                        {model.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {model.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                          model.color === "blue"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-green-100 text-green-700 border border-green-200"
                        }`}
                      >
                        3D Model
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1">
                    →
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {model.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Click to explore
                  </span>
                  <button
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      model.color === "blue"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
                    } transition`}
                  >
                    View Model
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Requirements Note */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <span className="text-sm">ℹ️</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Requirements</h3>
              <p className="text-sm text-gray-600">
                Best viewed on desktop with modern browsers (Chrome, Firefox,
                Edge). WebGL support required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
