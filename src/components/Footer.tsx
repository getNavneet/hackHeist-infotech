import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CEC University</h3>
                <p className="text-sm text-gray-400">Department Events Portal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting students with opportunities, fostering community, and building the future through engaging departmental events and workshops.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Departments</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Computer Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Mechanical</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Biotechnology</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 InfoTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;