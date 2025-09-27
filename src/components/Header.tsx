import React, { useState } from 'react';
import { CircuitBoard, Menu, X } from 'lucide-react'; // Changed icon

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-orange-600 p-2 rounded-lg">
              <CircuitBoard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CEC</h1>
              <p className="text-xs text-gray-400 hidden sm:block">Events Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <button
                    onClick={onAdminDashboard}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button
                  onClick={onLogout}
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="text-gray-300 hover:text-orange-500 transition px-4 py-2"
                >
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-orange-500 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-black">
          <div className="flex flex-col space-y-2 mt-2">
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <button
                    onClick={() => {
                      onAdminDashboard();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium w-full"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onSignupClick();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;