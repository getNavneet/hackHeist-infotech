import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventList from './components/EventList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import RegisterModal from './components/RegisterModal';
import AdminDashboard from './components/AdminDashboard';

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

function App() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: 'AI & Machine Learning Workshop',
      department: 'Computer Science Dept.',
      date: 'March 15, 2025',
      time: '10:00 AM',
      location: 'Computer Lab 301',
      description: 'Deep dive into modern AI techniques and hands-on machine learning projects with industry experts.',
      price: 299
    },
    {
      id: 2,
      name: 'Robotics Innovation Challenge',
      department: 'Electronics & Communication Dept.',
      date: 'March 22, 2025',
      time: '9:00 AM',
      location: 'Engineering Workshop',
      description: 'Build and program autonomous robots in teams. Compete for prizes and showcase your creativity.',
      price: 499
    },
    {
      id: 3,
      name: 'Cultural Fest 2025 - "Harmony"',
      department: 'Arts & Humanities Dept.',
      date: 'April 5, 2025',
      time: '6:00 PM',
      location: 'Main Auditorium',
      description: 'Celebrate diversity through music, dance, drama, and art. Open to all departments and students.'
    },
    {
      id: 4,
      name: 'Startup Pitch Competition',
      department: 'Business Administration Dept.',
      date: 'April 12, 2025',
      time: '2:00 PM',
      location: 'Business Center Hall',
      description: 'Present your innovative business ideas to venture capitalists and win funding for your startup.',
      price: 199
    }
  ]);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email: string, password: string) => {
    if (email === 'event@gmail.com' && password === '1234') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setIsLoginOpen(false);
      alert('Welcome Admin!');
    } else {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setIsLoginOpen(false);
      alert('Login successful!');
    }
  };

  const handleSignup = (name: string, email: string, password: string) => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setIsSignupOpen(false);
    alert(`Welcome ${name}! Your account has been created successfully.`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    alert('You have been logged out successfully.');
  };

  const handleEventRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsRegisterOpen(true);
  };

  const handleRegisterSubmit = (name: string, rollNo: string) => {
    if (selectedEvent) {
      alert(`You have registered for ${selectedEvent.name}!`);
      setIsRegisterOpen(false);
      setSelectedEvent(null);
    }
  };

  const handleAddEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent = {
      ...eventData,
      id: events.length + 1
    };
    setEvents(prev => [...prev, newEvent]);
    setIsAdminDashboardOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onSignupClick={() => setIsSignupOpen(true)}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogout={handleLogout}
        onAdminDashboard={() => setIsAdminDashboardOpen(true)}
      />
      
      <HeroSection />
      
      <EventList
        events={events}
        onRegister={handleEventRegister}
      />
      
      <About />
      
      <Contact />
      
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSignup={handleSignup}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        event={selectedEvent}
        onRegister={handleRegisterSubmit}
      />

      <AdminDashboard
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        onAddEvent={handleAddEvent}
      />
    </div>
  );
}

export default App;