import React from 'react';
import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogout: () => void;
  onAdminDashboard: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onSignupClick,
  isLoggedIn,
  isAdmin,
  onLogout,
  onAdminDashboard,
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CEC</h1>
              <p className="text-xs text-gray-600">Department Events Portal</p>
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                {isAdmin && (
                  <button
                    onClick={onAdminDashboard}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onLoginClick}
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
                >
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm"
                >
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;