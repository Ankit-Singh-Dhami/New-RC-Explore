"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  Tag,
  Upload,
  X,
  ChevronDown,
  Globe,
  Lock,
  Bell,
  Repeat,
  Link as LinkIcon,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

const AddEventPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    title: "",
    description: "",
    category: "academic",
    tags: [] as string[],
    currentTag: "",

    // Step 2: Date & Time
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    timezone: "IST",
    isRecurring: false,
    recurrence: {
      frequency: "weekly",
      interval: 1,
      endDate: "",
    },

    // Step 3: Location & Details
    locationType: "physical",
    physicalLocation: "",
    onlineLink: "",
    maxAttendees: "",
    registrationRequired: true,
    registrationDeadline: "",

    // Step 4: Additional Details
    organizer: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    visibility: "public",
    allowRegistration: true,
    allowWaitlist: true,

    // Image
    image: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    { id: "academic", name: "Academic", color: "bg-blue-100 text-blue-800" },
    { id: "sports", name: "Sports", color: "bg-green-100 text-green-800" },
    {
      id: "cultural",
      name: "Cultural",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "technical",
      name: "Technical",
      color: "bg-orange-100 text-orange-800",
    },
    { id: "career", name: "Career", color: "bg-red-100 text-red-800" },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      color: "bg-yellow-100 text-yellow-800",
    },
    { id: "social", name: "Social", color: "bg-pink-100 text-pink-800" },
    {
      id: "workshop",
      name: "Workshop",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: "conference",
      name: "Conference",
      color: "bg-teal-100 text-teal-800",
    },
  ];

  const timezones = [
    { value: "IST", label: "Indian Standard Time (IST)" },
    { value: "EST", label: "Eastern Standard Time (EST)" },
    { value: "PST", label: "Pacific Standard Time (PST)" },
    { value: "GMT", label: "Greenwich Mean Time (GMT)" },
    { value: "CET", label: "Central European Time (CET)" },
  ];

  const recurrenceOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.title.trim()) {
        newErrors.title = "Event title is required";
      }
      if (!formData.description.trim()) {
        newErrors.description = "Event description is required";
      }
      if (formData.description.length < 50) {
        newErrors.description = "Description should be at least 50 characters";
      }
    }

    if (step === 2) {
      if (!formData.startDate) {
        newErrors.startDate = "Start date is required";
      }
      if (!formData.endDate) {
        newErrors.endDate = "End date is required";
      }
      if (!formData.startTime) {
        newErrors.startTime = "Start time is required";
      }
      if (!formData.endTime) {
        newErrors.endTime = "End time is required";
      }

      // Validate dates
      if (formData.startDate && formData.endDate) {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);
        if (end < start) {
          newErrors.endDate = "End date cannot be before start date";
        }
      }
    }

    if (step === 3) {
      if (
        formData.locationType === "physical" &&
        !formData.physicalLocation.trim()
      ) {
        newErrors.physicalLocation = "Location is required for physical events";
      }
      if (formData.locationType === "online" && !formData.onlineLink.trim()) {
        newErrors.onlineLink = "Meeting link is required for online events";
      }
      if (formData.registrationRequired && !formData.maxAttendees) {
        newErrors.maxAttendees =
          "Maximum attendees is required when registration is required";
      }
    }

    if (step === 4) {
      if (!formData.organizer.trim()) {
        newErrors.organizer = "Organizer name is required";
      }
      if (!formData.contactEmail.trim()) {
        newErrors.contactEmail = "Contact email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        newErrors.contactEmail = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Event created successfully!");
      // Redirect will be handled by the Link component or we can use window.location
      window.location.href = "/dashboard/features/event-calendar";
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert("Image size should be less than 5MB");
        return;
      }

      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setPreviewImage(null);
  };

  const addTag = () => {
    if (
      formData.currentTag.trim() &&
      !formData.tags.includes(formData.currentTag.trim())
    ) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.currentTag.trim()],
        currentTag: "",
      });
    }
  };

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && formData.currentTag.trim()) {
      e.preventDefault();
      addTag();
    }
  };

  // Calculate progress percentage
  const progress = (step / 4) * 100;

  const StepIndicator = () => (
    <div className="mb-6 md:mb-8">
      <div className="flex justify-between items-center mb-4">
        {["Basic Info", "Date & Time", "Location", "Additional"].map(
          (label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
                  index + 1 === step
                    ? "bg-blue-600 text-white"
                    : index + 1 < step
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {index + 1 < step ? "✓" : index + 1}
              </div>
              <span
                className={`text-xs font-medium ${
                  index + 1 === step ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          ),
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard/features/events"
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Create New Event
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Fill in the details to create your event
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/features/events"
              className="px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium hover:bg-gray-100 rounded-lg transition"
            >
              Cancel
            </Link>
          </div>

          <StepIndicator />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Basic Information
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Event Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.title ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter event title"
                  />
                  {errors.title && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Event Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.description ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Describe your event in detail..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.description ? (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.description}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {formData.description.length}/1000 characters
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {formData.description.length} characters
                    </p>
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, category: category.id })
                        }
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.category === category.id
                            ? `${category.color} border-transparent ring-2 ring-offset-2 ring-blue-500`
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Tags
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.currentTag}
                      onChange={(e) =>
                        setFormData({ ...formData, currentTag: e.target.value })
                      }
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Add tags (press Enter to add)"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                    >
                      Add
                    </button>
                  </div>

                  {/* Tags List */}
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 hover:text-blue-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Event Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Event Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition">
                    {previewImage ? (
                      <div className="relative">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full max-w-xs mx-auto rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 mb-2">
                          Drag & drop an image or click to browse
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Recommended: 1200x630px, max 5MB
                        </p>
                        <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                          <Upload className="w-4 h-4 inline mr-2" />
                          Choose Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Date & Time
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Start Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Start Date *
                    </label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startDate: e.target.value,
                          })
                        }
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.startDate
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.startDate && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.startDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Start Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startTime: e.target.value,
                          })
                        }
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.startTime
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.startTime && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.startTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* End Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      End Date *
                    </label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        min={formData.startDate}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.endDate ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.endDate && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.endDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      End Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) =>
                          setFormData({ ...formData, endTime: e.target.value })
                        }
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.endTime ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.endTime && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.endTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timezone */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Timezone
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.timezone}
                      onChange={(e) =>
                        setFormData({ ...formData, timezone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                    >
                      {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Recurring Event */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isRecurring}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          isRecurring: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      This is a recurring event
                    </span>
                    <Repeat className="w-4 h-4 text-gray-400" />
                  </label>

                  {formData.isRecurring && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Frequency
                          </label>
                          <select
                            value={formData.recurrence.frequency}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                recurrence: {
                                  ...formData.recurrence,
                                  frequency: e.target.value,
                                },
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          >
                            {recurrenceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Every (interval)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="12"
                            value={formData.recurrence.interval}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                recurrence: {
                                  ...formData.recurrence,
                                  interval: parseInt(e.target.value),
                                },
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          End Date (Optional)
                        </label>
                        <input
                          type="date"
                          value={formData.recurrence.endDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              recurrence: {
                                ...formData.recurrence,
                                endDate: e.target.value,
                              },
                            })
                          }
                          min={formData.startDate}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location & Details */}
          {step === 3 && (
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Location & Details
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Location Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Event Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, locationType: "physical" })
                      }
                      className={`p-4 rounded-lg border text-left transition-all ${
                        formData.locationType === "physical"
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            formData.locationType === "physical"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <MapPin
                            className={`w-5 h-5 ${
                              formData.locationType === "physical"
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Physical Event
                          </p>
                          <p className="text-sm text-gray-600">
                            In-person gathering
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, locationType: "online" })
                      }
                      className={`p-4 rounded-lg border text-left transition-all ${
                        formData.locationType === "online"
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            formData.locationType === "online"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <Globe
                            className={`w-5 h-5 ${
                              formData.locationType === "online"
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Online Event
                          </p>
                          <p className="text-sm text-gray-600">
                            Virtual meeting/stream
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Location Input */}
                {formData.locationType === "physical" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Physical Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.physicalLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            physicalLocation: e.target.value,
                          })
                        }
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.physicalLocation
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter venue name, address, or building"
                      />
                    </div>
                    {errors.physicalLocation && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.physicalLocation}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Online Meeting Link *
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        value={formData.onlineLink}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            onlineLink: e.target.value,
                          })
                        }
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.onlineLink
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                        placeholder="https://meet.google.com/xxx-xxxx-xxx"
                      />
                    </div>
                    {errors.onlineLink && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.onlineLink}
                      </p>
                    )}
                  </div>
                )}

                {/* Registration Required */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={formData.registrationRequired}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          registrationRequired: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Require registration
                    </span>
                  </label>

                  {formData.registrationRequired && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Maximum Attendees *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            min="1"
                            max="10000"
                            value={formData.maxAttendees}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                maxAttendees: e.target.value,
                              })
                            }
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                              errors.maxAttendees
                                ? "border-red-300"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter maximum number of attendees"
                          />
                        </div>
                        {errors.maxAttendees && (
                          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.maxAttendees}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Registration Deadline
                        </label>
                        <input
                          type="datetime-local"
                          value={formData.registrationDeadline}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              registrationDeadline: e.target.value,
                            })
                          }
                          min={`${formData.startDate}T${formData.startTime}`}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Additional Details
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Organizer Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Organizer Name *
                    </label>
                    <input
                      type="text"
                      value={formData.organizer}
                      onChange={(e) =>
                        setFormData({ ...formData, organizer: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.organizer ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Department, club, or organization"
                    />
                    {errors.organizer && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.organizer}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Website (Optional)
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactEmail: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.contactEmail
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                      placeholder="contact@example.com"
                    />
                    {errors.contactEmail && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.contactEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Contact Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactPhone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Visibility Settings */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Visibility
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, visibility: "public" })
                      }
                      className={`p-4 rounded-lg border text-left transition-all ${
                        formData.visibility === "public"
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            formData.visibility === "public"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <Globe
                            className={`w-5 h-5 ${
                              formData.visibility === "public"
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Public</p>
                          <p className="text-sm text-gray-600">
                            Visible to everyone
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, visibility: "private" })
                      }
                      className={`p-4 rounded-lg border text-left transition-all ${
                        formData.visibility === "private"
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            formData.visibility === "private"
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <Lock
                            className={`w-5 h-5 ${
                              formData.visibility === "private"
                                ? "text-blue-600"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Private</p>
                          <p className="text-sm text-gray-600">
                            Invite-only event
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.allowRegistration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          allowRegistration: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Allow online registration
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.allowWaitlist}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          allowWaitlist: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Enable waitlist when full
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Send email notifications to attendees
                    </span>
                    <Bell className="w-4 h-4 text-gray-400" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Event...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Create Event
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Quick Preview */}
        <div className="mt-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Preview
          </h3>
          <div className="bg-white rounded-lg p-4 border border-gray-300">
            {formData.title ? (
              <>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {formData.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {formData.description || "No description yet"}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  {formData.category && (
                    <span
                      className={`px-2 py-1 rounded-full ${
                        categories.find((c) => c.id === formData.category)
                          ?.color
                      }`}
                    >
                      {categories.find((c) => c.id === formData.category)?.name}
                    </span>
                  )}
                  {formData.startDate && (
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      {new Date(formData.startDate).toLocaleDateString()}
                    </span>
                  )}
                  {formData.physicalLocation && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {formData.physicalLocation}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center py-4">
                Start filling the form to see preview
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventPage;
