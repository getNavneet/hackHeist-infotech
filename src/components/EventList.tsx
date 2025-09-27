import React from 'react';
import EventCard from './EventCard';
import { PackageOpen } from 'lucide-react'; // Using a more fitting icon

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

interface EventListProps {
  events: Event[];
  onRegister: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onRegister }) => {
  return (
    <section id="events-section" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join exciting events across different departments and expand your horizons.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-black rounded-2xl shadow-lg p-12 max-w-md mx-auto border border-gray-800">
              <div className="text-gray-600 mb-4">
                <PackageOpen className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Events Yet</h3>
              <p className="text-gray-400">Events will appear here once they are created by administrators.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onRegister={onRegister} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventList;