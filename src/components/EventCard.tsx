import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

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

  // Helper function to determine the event's status based on the current date
  const getEventStatus = () => {
    const now = new Date();
    // Combine event date and time into a single Date object
    const eventDateTime = new Date(`${event.date}T${event.time}`);

    // // If the date is invalid, return a default state
    if (isNaN(eventDateTime.getTime())) {
      return { text: 'Upcoming', color: 'bg-green-600', isPast: false };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the current day

    const eventDateOnly = new Date(event.date);
    eventDateOnly.setUTCHours(0, 0, 0, 0); // Use UTC hours to avoid timezone issues with date-only strings

    // 1. Check if the event is in the past
    if (eventDateTime < now) {
      return { text: 'Past Event', color: 'bg-gray-700 text-gray-300', isPast: true };
    }
    
    // 2. Check if the event is happening right now (within a 3-hour window)
    const eventEndTime = new Date(eventDateTime.getTime() + 3 * 60 * 60 * 1000); // 3 hours duration
    if (now >= eventDateTime && now <= eventEndTime) {
      return { text: 'Live Now', color: 'bg-red-600 animate-pulse', isPast: false };
    }

    // 3. Check if the event is today but hasn't started yet
    if (eventDateOnly.getTime() === today.getTime()) {
      return { text: 'Happening Today', color: 'bg-blue-600', isPast: false };
    }

    // 4. Otherwise, it's an upcoming event
    return { text: 'Upcoming', color: 'bg-green-600', isPast: false };
  };

  // const status = getEventStatus();
  const status = "";

  return (
    <div 
      className={`relative bg-gradient-to-br from-orange-950 to-black p-6 rounded-lg transition-all duration-300 border border-gray-800 group 
      ${status.isPast ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'}`}
    >
      {/* --- New Status Badge --- */}
      <div className={`absolute top-0 right-0 m-4 px-3 py-1 text-xs font-bold text-white rounded-full ${status.color}`}>
        {status.text}
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-xl font-bold text-white mb-2 ${!status.isPast && 'group-hover:text-orange-500'} transition-colors`}>
            {event.name}
          </h3>
          <div className="inline-block px-3 py-1 bg-orange-600/80 text-white rounded-full text-sm font-medium">
            {event.department}
          </div>
        </div>
        {event.price != null && event.price > 0 && (
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ₹{event.price}
          </div>
        )}
         {event.price === 0 && (
          <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Free
          </div>
        )}
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed text-sm">{event.description}</p>

      <div className="space-y-3 mb-6 border-t border-gray-800 pt-4">
        <div className="flex items-center text-gray-300">
          <Calendar className="h-4 w-4 text-orange-400 mr-3" />
          <span className="text-sm">{event.date}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="h-4 w-4 text-orange-400 mr-3" />
          <span className="text-sm">{event.time}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <MapPin className="h-4 w-4 text-orange-400 mr-3" />
          <span className="text-sm">{event.location}</span>
        </div>
      </div>

      <button
        onClick={() => onRegister(event)}
        disabled={status.isPast}
        className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100 transform hover:scale-105"
      >
        {status.isPast ? 'Event Ended' : 'Register Now'}
      </button>
    </div>
  );
};

export default EventCard;