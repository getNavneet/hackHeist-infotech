import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

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

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2"></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {event.name}
            </h3>
            <div className="flex items-center text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
              <Users className="h-4 w-4 mr-1" />
              {event.department}
            </div>
          </div>
          {event.price && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ₹{event.price}
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="bg-gray-100 p-2 rounded-lg mr-3">
              <Calendar className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="bg-gray-100 p-2 rounded-lg mr-3">
              <Clock className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-sm">{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="bg-gray-100 p-2 rounded-lg mr-3">
              <MapPin className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <button
          onClick={() => onRegister(event)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;