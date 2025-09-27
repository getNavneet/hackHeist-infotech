import React from 'react';
import { ChevronDown, Calendar, Users, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black py-20 sm:py-24 overflow-hidden">
      {/* Optional: Add a subtle background pattern if needed */}
      <div className="absolute inset-0 bg-grid-orange-900/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-3">
              <div className="bg-orange-600/20 border border-orange-500/30 p-3 rounded-2xl shadow-lg shadow-orange-500/10 animate-bounce">
                <Calendar className="h-6 w-6 text-orange-400" />
              </div>
              <div className="bg-orange-600/20 border border-orange-500/30 p-3 rounded-2xl shadow-lg shadow-orange-500/10 animate-bounce [animation-delay:75ms]">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <div className="bg-orange-600/20 border border-orange-500/30 p-3 rounded-2xl shadow-lg shadow-orange-500/10 animate-bounce [animation-delay:150ms]">
                <Zap className="h-6 w-6 text-orange-400" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Upcoming
            <span className="
              text-transparent bg-clip-text 
              bg-gradient-to-r from-orange-400 to-orange-600 
              block drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]
            ">
              Department Events
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stay updated with workshops, hackathons, and fests. 
            Join your community and never miss an opportunity to learn and grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToEvents}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30"
            >
              View Events
            </button>
            <div className="flex items-center text-gray-400">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Live events updating</span>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;