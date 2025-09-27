import React, { useState } from 'react';
import { X, User, Hash } from 'lucide-react';

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

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onRegister: (name: string, rollNo: string) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, event, onRegister }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(name, rollNo);
    setName('');
    setRollNo('');
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Register for Event</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 hover:bg-gray-800 rounded-lg transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gradient-to-br from-orange-950 to-black rounded-xl p-4 mb-6 border border-gray-800">
            <h3 className="font-semibold text-white mb-2">{event.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{event.department}</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{event.date} at {event.time}</span>
              {event.price != null && (
                <span className="font-semibold text-green-400">
                  {event.price > 0 ? `₹${event.price}` : 'Free'}
                </span>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Student Name</label>
                <div className="relative">
                  <User className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Roll Number</label>
                <div className="relative">
                  <Hash className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your roll number"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
              >
                Confirm Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;