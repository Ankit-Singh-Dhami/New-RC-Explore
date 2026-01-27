"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  User,
  Send,
  HelpCircle,
  Headphones,
} from "lucide-react";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
  });

  const categories = [
    "Technical Issue",
    "Account Problem",
    "Feature Request",
    "Bug Report",
    "General Inquiry",
    "Feedback",
    "Other",
  ];

  const supportContacts = [
    {
      title: "Technical Support",
      email: "techsupport@college.edu",
      phone: "+91 98765 43210",
      hours: "Mon-Fri: 9 AM - 6 PM",
      icon: <Headphones className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: "Academic Support",
      email: "academics@college.edu",
      phone: "+91 98765 43211",
      hours: "Mon-Sat: 10 AM - 4 PM",
      icon: <HelpCircle className="w-5 h-5 text-green-600" />,
      color: "bg-green-50",
    },
    {
      title: "General Inquiries",
      email: "info@college.edu",
      phone: "+91 98765 43212",
      hours: "Mon-Fri: 8 AM - 5 PM",
      icon: <Mail className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-50",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "",
    });
  };

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 24 hours on weekdays.",
    },
    {
      question: "Can I reset my password myself?",
      answer: "Yes, use the 'Forgot Password' link on the login page.",
    },
    {
      question: "Where can I find study materials?",
      answer: "Check the 'Digital Study Materials' section in Features.",
    },
    {
      question: "How do I report a bug?",
      answer: "Use the contact form below and select 'Bug Report' category.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Contact & Support
          </h1>
          <p className="text-gray-600 mt-1">
            Get help or share your feedback with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {supportContacts.map((contact, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${contact.color} border-gray-200`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-white">
                        {contact.icon}
                      </div>
                      <h3 className="font-medium text-gray-900">
                        {contact.title}
                      </h3>
                    </div>
                    <div className="space-y-2 pl-11">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{contact.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Location */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-blue-50">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  Campus Office
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700">
                  Admin Building, Room 205
                  <br />
                  RC College Campus
                  <br />
                  New Delhi, India - 110001
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Visit during office hours for in-person support
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-green-50">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">FAQ</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-200 pl-4 py-1"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Mail className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
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
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition"
                    placeholder="Brief description of your issue"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition resize-none"
                      placeholder="Describe your issue or inquiry in detail..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </form>

              {/* Response Time Info */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-800">
                      Response Time
                    </p>
                    <p className="text-sm text-blue-600">
                      We aim to respond to all inquiries within 24 hours on
                      weekdays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
