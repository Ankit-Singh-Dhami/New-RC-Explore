"use client";

import { useState } from "react";
import { ArrowLeft, Upload, Camera, X } from "lucide-react";
import { useRouter } from "next/navigation";

const PostFoundPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    date: "",
    time: "",
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    storageLocation: "",
    claimDeadline: "",
    willHandover: true,
  });

  const [image, setImage] = useState<string | null>(null);

  const categories = [
    "Electronics",
    "Books & Notes",
    "Accessories",
    "Clothing",
    "Documents",
    "Keys",
    "Wallet/Purse",
    "Jewelry",
    "Others",
  ];

  const locations = [
    "Library",
    "Computer Lab",
    "Classroom",
    "Cafeteria",
    "Sports Complex",
    "Parking Lot",
    "Auditorium",
    "Admin Building",
    "Hostel",
    "Bus Stand",
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Found item posted:", { ...formData, image });
    alert("Found item posted successfully!");
    router.push("/dashboard/lost");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.push("/dashboard/features/found-item")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to found Items
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Post Found Item</h1>
          <p className="text-gray-600 mt-1">
            Help return lost items to their owners
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Photo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {image ? (
                <div className="relative">
                  <img
                    src={image}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Upload a photo of the found item
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG or GIF. Max size 5MB
                    </p>
                  </div>
                  <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Choose File
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-4">
            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name *
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                placeholder="e.g., Smartphone, Wallet, Book"
              />
            </div>

            {/* Category and Found Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Found Location *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time Found */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Found *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Found *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="Describe the item in detail (color, brand, condition, identifying marks)"
              />
            </div>

            {/* Your Information */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="yourPhone"
                    value={formData.yourPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Item Storage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Storage Location *
              </label>
              <input
                type="text"
                name="storageLocation"
                value={formData.storageLocation}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                placeholder="e.g., With security guard, Admin office, My hostel room"
              />
            </div>

            {/* Claim Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Claim Deadline (Optional)
                </label>
                <input
                  type="date"
                  name="claimDeadline"
                  value={formData.claimDeadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <div className="flex items-center pt-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="willHandover"
                    checked={formData.willHandover}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Will hand over to owner
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Post Found Item
              </button>
            </div>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Your contact information will be shown to
            help the owner claim their item. Please keep the item safe until
            claimed. If valuable items are not claimed within 30 days, they will
            be handed over to campus security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostFoundPage;
