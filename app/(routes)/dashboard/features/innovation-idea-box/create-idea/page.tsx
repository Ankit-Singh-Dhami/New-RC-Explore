"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateIdeaPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    problem: "",
    solution: "",
    benefits: "",
    tags: "",
    anonymous: false,
  });

  const categories = [
    "Campus",
    "Academic",
    "Technology",
    "Sustainability",
    "Community",
    "Facilities",
    "Sports",
    "Events",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Idea submitted:", formData);
    alert("Idea submitted successfully! It will be reviewed by the committee.");
    router.push("/dashboard/innovation");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/dashboard/features/innovation-idea-box">
            <button
              onClick={() => router.push("/dashboard/innovation")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Ideas
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Submit New Idea</h1>
          <p className="text-gray-600 mt-1">
            Share your innovative idea to improve campus life
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Idea Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                placeholder="Brief, descriptive title of your idea"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Problem Statement */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Problem Statement *
              </label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="What problem are you trying to solve? Why is this important?"
              />
            </div>

            {/* Solution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Solution *
              </label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="Describe your proposed solution in detail"
              />
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Benefits *
              </label>
              <textarea
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="How will this benefit students and the campus community?"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="Any additional information, implementation steps, or requirements"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags (Optional)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                placeholder="Add relevant tags separated by commas (e.g., technology, sustainability, app)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Tags help others find your idea
              </p>
            </div>

            {/* Anonymous Option */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Submit anonymously
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Submit Idea
              </button>
            </div>
          </div>
        </form>

        {/* Guidelines */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">
            Submission Guidelines
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Be clear and specific about your idea</li>
            <li>• Explain how it benefits the campus community</li>
            <li>• Consider feasibility and implementation steps</li>
            <li>• Ideas will be reviewed by the campus committee</li>
            <li>• Top voted ideas may be implemented</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateIdeaPage;
