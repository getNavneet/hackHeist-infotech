import React, { useState } from 'react';
// --- 1. Import toast and Toaster from react-hot-toast ---
import toast, { Toaster } from 'react-hot-toast';

// --- Import all your components ---
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
import ChatBot from './components/ChatBot';

interface Event {
  id: number;
  name: string;
  department: string;
  // --- 2. Changed date format to YYYY-MM-DD for status logic ---
  date: string; 
  time: string;
  location: string;
  description: string;
  price?: number;
}

// --- Initial sample data with corrected date format ---
const initialEvents: Event[] = [
  {
    id: 1,
    name: 'AI & Machine Learning Workshop',
    department: 'Tech',
    date: '2025-10-15',
    time: '10:00',
    location: 'Computer Lab 301',
    description: 'Deep dive into modern AI techniques and hands-on machine learning projects with industry experts.',
    price: 299
  },
  {
    id: 2,
    name: 'Robotics Innovation Challenge',
    department: 'Gaming',
    date: '2025-11-22',
    time: '09:00',
    location: 'Engineering Workshop',
    description: 'Build and program autonomous robots in teams. Compete for prizes and showcase your creativity.',
    price: 499
  },
  {
    id: 3,
    name: 'Cultural Fest 2025 - "Harmony"',
    department: 'Design',
    date: '2025-12-05',
    time: '18:00',
    location: 'Main Auditorium',
    description: 'Celebrate diversity through music, dance, drama, and art. Open to all departments and students.',
    price: 0
  },
  {
    id: 4,
    name: 'Startup Pitch Competition',
    department: 'Business',
    date: '2026-01-10',
    time: '14:00',
    location: 'Business Center Hall',
    description: 'Present your innovative business ideas to venture capitalists and win funding for your startup.',
    price: 199
  }
];

function App() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // --- 3. Replaced all alerts with toast notifications ---
  const handleLogin = (email: string, password: string) => {
    if (email === 'event@gmail.com' && password === '1234') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setIsLoginOpen(false);
      toast.success('Welcome Admin!');
    } else {
      setIsLoggedIn(true); // Simulating regular user login
      setIsAdmin(false);
      setIsLoginOpen(false);
      toast.success('Login successful!');
    }
  };

  const handleSignup = (name: string, email: string, password: string) => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setIsSignupOpen(false);
    toast.success(`Welcome ${name}! Your account has been created.`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    toast('You have been logged out.', { icon: '👋' });
  };
  
  const handleEventRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsRegisterOpen(true);
  };

  const handleRegisterSubmit = (name: string, rollNo: string) => {
    if (selectedEvent) {
      toast.success(`Registered for ${selectedEvent.name}!`);
      setIsRegisterOpen(false);
      setSelectedEvent(null);
    }
  };
  
  // --- 4. Using Date.now() for robust unique IDs ---
  const handleAddEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent = { ...eventData, id: Date.now() };
    setEvents(prev => [newEvent, ...prev]);
    setIsAdminDashboardOpen(false);
    toast.success('Event created successfully!');
  };

  return (
    // --- 5. Changed to bg-black for theme consistency ---
    <div className="min-h-screen bg-black">
      {/* --- 6. Added Toaster component for notifications to render --- */}
      <Toaster position="top-center" reverseOrder={false} toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
      }}/>

      <Header
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLoginClick={() => setIsLoginOpen(true)}
        onSignupClick={() => setIsSignupOpen(true)}
        onLogout={handleLogout}
        onAdminDashboard={() => setIsAdminDashboardOpen(true)}
      />
      
      <main>
        <HeroSection />
        <EventList events={events} onRegister={handleEventRegister} />
        <About />
        <Contact />
      </main>
      
      <Footer />
      <ChatBot />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLogin={handleLogin} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onSignup={handleSignup} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} event={selectedEvent} onRegister={handleRegisterSubmit} />
      <AdminDashboard isOpen={isAdminDashboardOpen} onClose={() => setIsAdminDashboardOpen(false)} onAddEvent={handleAddEvent} />
    </div>
  );
}

export default App;