import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about events or want to organize one? We're here to help you connect and engage.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-orange-950/80 to-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">events@cgc.edu.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+91 00000 00000</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-gray-400">Block3, cgc landran</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 9:15 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-gradient-to-br from-orange-950/80 to-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;