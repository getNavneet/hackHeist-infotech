import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
    setEmail('');
    setPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 hover:bg-gray-800 rounded-lg transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-950/50 border border-orange-800/50 rounded-lg p-4">
            <h4 className="font-medium text-orange-400 mb-2">Admin Login:</h4>
            <p className="text-sm text-orange-200/80">
              Email: <code className="bg-black/50 px-2 py-1 rounded">event@gmail.com</code><br />
              Password: <code className="bg-black/50 px-2 py-1 rounded">1234</code>
            </p>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-orange-500 hover:text-orange-400 text-sm transition">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;