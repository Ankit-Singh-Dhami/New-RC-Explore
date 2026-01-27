"use client";

import { useState, useRef } from "react";
import {
  Send,
  Star,
  AlertCircle,
  CheckCircle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Upload,
  X,
  Mail,
  User,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

type FeedbackType = "general" | "suggestion" | "bug" | "complaint" | "praise";
type UrgencyLevel = "low" | "medium" | "high" | "critical";
type Sentiment = "positive" | "negative" | "neutral";

interface FeedbackForm {
  type: FeedbackType;
  title: string;
  description: string;
  urgency: UrgencyLevel;
  sentiment: Sentiment;
  rating: number;
  email: string;
  name: string;
  department: string;
  allowContact: boolean;
  attachments: File[];
}

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FeedbackForm>({
    type: "general",
    title: "",
    description: "",
    urgency: "medium",
    sentiment: "neutral",
    rating: 3,
    email: "",
    name: "",
    department: "",
    allowContact: true,
    attachments: [],
  });

  const feedbackTypes = [
    {
      id: "general",
      label: "General Feedback",
      icon: "💬",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "suggestion",
      label: "Suggestion",
      icon: "💡",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "bug",
      label: "Bug Report",
      icon: "🐛",
      color: "bg-red-100 text-red-800",
    },
    {
      id: "complaint",
      label: "Complaint",
      icon: "⚠️",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "praise",
      label: "Praise",
      icon: "⭐",
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  const urgencyLevels = [
    {
      id: "low",
      label: "Low",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: "medium",
      label: "Medium",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      id: "high",
      label: "High",
      color: "bg-orange-100 text-orange-800 border-orange-300",
    },
    {
      id: "critical",
      label: "Critical",
      color: "bg-red-100 text-red-800 border-red-300",
    },
  ];

  const sentiments = [
    {
      id: "positive",
      label: "Positive",
      icon: ThumbsUp,
      color: "text-green-600 bg-green-50",
    },
    {
      id: "neutral",
      label: "Neutral",
      icon: MessageSquare,
      color: "text-gray-600 bg-gray-50",
    },
    {
      id: "negative",
      label: "Negative",
      icon: ThumbsDown,
      color: "text-red-600 bg-red-50",
    },
  ];

  const departments = [
    "Select Department",
    "Computer Science",
    "Engineering",
    "Business",
    "Arts & Humanities",
    "Science",
    "Medicine",
    "Law",
    "Student Services",
    "Administration",
    "Library",
    "IT Services",
    "Facilities",
    "Other",
  ];

  const handleInputChange = (field: keyof FeedbackForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit

    if (validFiles.length !== files.length) {
      toast.error("Some files exceed 5MB limit");
    }

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Please fill in required fields");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send to your backend
      // const formDataToSend = new FormData();
      // Object.entries(formData).forEach(([key, value]) => {
      //   formDataToSend.append(key, value);
      // });
      // uploadedFiles.forEach(file => {
      //   formDataToSend.append('attachments', file);
      // });

      toast.success("Feedback submitted successfully!");
      setSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          type: "general",
          title: "",
          description: "",
          urgency: "medium",
          sentiment: "neutral",
          rating: 3,
          email: "",
          name: "",
          department: "",
          allowContact: true,
          attachments: [],
        });
        setUploadedFiles([]);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      type: "general",
      title: "",
      description: "",
      urgency: "medium",
      sentiment: "neutral",
      rating: 3,
      email: "",
      name: "",
      department: "",
      allowContact: true,
      attachments: [],
    });
    setUploadedFiles([]);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-4 md:p-6">
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Campus Feedback Portal
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Help us improve your college experience. Share your thoughts,
            suggestions, or report issues.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You for Your Feedback!
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Your feedback has been submitted successfully. Our team will
                    review it and take appropriate action.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Submit Feedback
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <AlertCircle className="w-4 h-4" />
                      <span>All fields marked with * are required</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Feedback Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Feedback Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {feedbackTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handleInputChange("type", type.id)}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${formData.type === type.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"} ${type.color}`}
                          >
                            <span className="text-2xl mb-2">{type.icon}</span>
                            <span className="text-sm font-medium">
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Overall Satisfaction
                      </label>
                      <div className="flex items-center justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleInputChange("rating", star)}
                            className={`p-2 rounded-full transition-transform hover:scale-110 ${star <= formData.rating ? "text-yellow-500" : "text-gray-300"}`}
                          >
                            <Star className="w-8 h-8 fill-current" />
                          </button>
                        ))}
                      </div>
                      <div className="text-center mt-2 text-sm text-gray-500">
                        {formData.rating === 1 && "Very Dissatisfied"}
                        {formData.rating === 2 && "Dissatisfied"}
                        {formData.rating === 3 && "Neutral"}
                        {formData.rating === 4 && "Satisfied"}
                        {formData.rating === 5 && "Very Satisfied"}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title *
                        </label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          placeholder="Brief summary of your feedback"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          maxLength={100}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Detailed Description *
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                          placeholder="Please provide detailed information about your feedback..."
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                          maxLength={1000}
                        />
                        <div className="text-right text-sm text-gray-500 mt-1">
                          {formData.description.length}/1000 characters
                        </div>
                      </div>
                    </div>

                    {/* Urgency & Sentiment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Urgency Level
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {urgencyLevels.map((level) => (
                            <button
                              key={level.id}
                              type="button"
                              onClick={() =>
                                handleInputChange("urgency", level.id)
                              }
                              className={`px-4 py-3 text-center rounded-lg border-2 transition ${formData.urgency === level.id ? "ring-2 ring-offset-2 ring-blue-500" : ""} ${level.color}`}
                            >
                              <span className="font-medium">{level.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Sentiment
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {sentiments.map((sentiment) => {
                            const Icon = sentiment.icon;
                            return (
                              <button
                                key={sentiment.id}
                                type="button"
                                onClick={() =>
                                  handleInputChange("sentiment", sentiment.id)
                                }
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition ${formData.sentiment === sentiment.id ? "ring-2 ring-offset-2 ring-blue-500" : "border-gray-200"} ${sentiment.color}`}
                              >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">
                                  {sentiment.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="student@college.edu"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) =>
                            handleInputChange("department", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        >
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center md:items-end">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.allowContact}
                            onChange={(e) =>
                              handleInputChange(
                                "allowContact",
                                e.target.checked,
                              )
                            }
                            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">
                            Allow us to contact you for follow-up
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Attachments (Optional)
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          <span className="text-blue-600 font-medium">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          PNG, JPG, PDF up to 5MB each
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                        />
                      </div>

                      {/* Uploaded Files Preview */}
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded">
                                  <span className="text-sm font-medium">
                                    {file.name.split(".").pop()?.toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">
                                    {file.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-gray-200 rounded-full transition"
                              >
                                <X className="w-5 h-5 text-gray-500" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-gray-500">
                          Your feedback helps us improve the campus experience
                          for everyone.
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Submit Feedback
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Sidebar - Info & Stats */}
          <div className="space-y-8">
            {/* Statistics Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Feedback Statistics
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Total Submissions",
                    value: "2,847",
                    color: "bg-blue-500",
                  },
                  {
                    label: "Average Response Time",
                    value: "2.3 days",
                    color: "bg-green-500",
                  },
                  {
                    label: "Satisfaction Rate",
                    value: "86%",
                    color: "bg-yellow-500",
                  },
                  {
                    label: "Issues Resolved",
                    value: "94%",
                    color: "bg-purple-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                      <span className="font-bold text-gray-900">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tips for Effective Feedback
              </h3>
              <ul className="space-y-3">
                {[
                  "Be specific and provide concrete examples",
                  "Focus on the issue, not individuals",
                  "Suggest possible solutions",
                  "Include relevant department/service names",
                  "Attach screenshots for bug reports",
                  "Check for existing similar feedback",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need Immediate Help?
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">IT Support:</p>
                  <a
                    href="tel:+15551234567"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Student Services:</p>
                  <a
                    href="mailto:studentservices@college.edu"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    studentservices@college.edu
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Urgent Facilities:</p>
                  <a
                    href="tel:+15551234568"
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    (555) 123-4568
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl border border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Privacy & Confidentiality
              </h3>
              <p className="text-sm text-gray-600">
                All feedback is treated confidentially. Personal information is
                protected under our privacy policy. Anonymous submissions are
                allowed for general feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>
            This feedback system is managed by the Campus Improvement Committee.
            We review all submissions weekly and prioritize based on urgency and
            impact.
          </p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString()} • Average response
            time: 2-3 business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
