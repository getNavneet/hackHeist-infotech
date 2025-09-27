import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignup: (name: string, email: string, password: string) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onSignup(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-black border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
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
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
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
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
          >
            Create Account
          </button>

          <p className="text-center mt-4 text-sm text-gray-400">
            By signing up, you agree to our{' '}
            <a href="#" className="text-orange-500 hover:text-orange-400 transition">
              Terms of Service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;