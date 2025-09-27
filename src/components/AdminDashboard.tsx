import React, { useState } from 'react';
import { X, Plus, Calendar, MapPin, Clock, FileText, Building } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  department: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price?: number;
}

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: Omit<Event, 'id'>) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose, onAddEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    date: '',
    time: '',
    location: '',
    description: '',
    price: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      name: formData.name,
      department: formData.department,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      description: formData.description,
      // Ensure price is a number or undefined, not an empty string
      price: formData.price ? parseFloat(formData.price) : 0 
    };
    onAddEvent(eventData);
    // Reset form after submission
    setFormData({
      name: '',
      department: '',
      date: '',
      time: '',
      location: '',
      description: '',
      price: ''
    });
    alert('Event created successfully!');
    onClose(); // Optionally close modal on success
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-black rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 hover:bg-gray-800 rounded-lg transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="bg-orange-950/50 border border-orange-800/50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-2">Create New Event</h3>
            <p className="text-orange-200/80">Fill out the details below to add a new event to the platform.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Event Name</label>
                <div className="relative">
                  <FileText className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="e.g., Coding Hackathon 2025"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                <div className="relative">
                  <Building className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Tech">Tech</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                <div className="relative">
                  <Clock className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price (₹)</label>
                <div className="relative">
                  <span className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2">₹</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="0 for FREE"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <div className="relative">
                <MapPin className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="e.g., Main Auditorium, Lab 301"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Event Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Provide a brief description of the event..."
                required
              ></textarea>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;