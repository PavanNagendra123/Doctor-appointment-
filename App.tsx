import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DoctorCard from './components/DoctorCard';
import FilterPanel from './components/FilterPanel';
import BookingModal from './components/BookingModal';
import Dashboard from './components/Dashboard';
import Specialties from './components/Specialties';
import About from './components/About';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { Doctor, FilterOptions, Appointment } from './types';
import { mockDoctors } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(mockDoctors);
  const [filters, setFilters] = useState<FilterOptions>({
    specialty: '',
    location: '',
    availability: '',
    rating: 0,
    fees: { min: 0, max: 1000 }
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter doctors based on current filters
  React.useEffect(() => {
    let filtered = doctors;

    if (filters.specialty) {
      filtered = filtered.filter(doctor => doctor.specialty === filters.specialty);
    }

    if (filters.location) {
      filtered = filtered.filter(doctor => doctor.location === filters.location);
    }

    if (filters.rating > 0) {
      filtered = filtered.filter(doctor => doctor.rating >= filters.rating);
    }

    if (filters.fees.min > 0 || filters.fees.max < 1000) {
      filtered = filtered.filter(doctor => 
        doctor.fees >= filters.fees.min && doctor.fees <= filters.fees.max
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [filters, doctors, searchQuery]);

  const handleLogin = (userData?: any) => {
    setIsLoggedIn(true);
    if (userData) {
      setUserName(userData.name);
      setUserEmail(userData.email);
    } else {
      setUserName('John Doe');
      setUserEmail('john.doe@email.com');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserEmail('');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'dashboard' && !isLoggedIn) {
      setAuthMode('login');
      setIsAuthModalOpen(true);
    }
  };

  const handleBookAppointment = (doctor: Doctor) => {
    if (!isLoggedIn) {
      setAuthMode('login');
      setIsAuthModalOpen(true);
      // Store the doctor to book after login
      setSelectedDoctor(doctor);
      return;
    }
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleBookingConfirm = (appointmentData: any) => {
    console.log('Booking confirmed:', appointmentData);
    // In a real app, this would save to backend
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
  };

  const handleAuthSuccess = (userData: any) => {
    handleLogin(userData);
    setIsAuthModalOpen(false);
    
    // If there was a doctor selected for booking, open booking modal
    if (selectedDoctor && !isBookingModalOpen) {
      setIsBookingModalOpen(true);
    }
  };

  const handleShowLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleShowSignup = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <Hero onFindDoctors={() => setCurrentPage('doctors')} />
            {/* Featured Doctors Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Doctors</h2>
                <p className="text-lg text-gray-600">Meet our top-rated healthcare professionals</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockDoctors.slice(0, 3).map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onBookAppointment={handleBookAppointment}
                  />
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => setCurrentPage('doctors')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  View All Doctors
                </button>
              </div>
            </div>
          </div>
        );

      case 'doctors':
        return (
          <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Search Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Doctors</h1>
                <div className="max-w-md">
                  <input
                    type="text"
                    placeholder="Search doctors, specialties, or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                  <FilterPanel
                    filters={filters}
                    onFiltersChange={setFilters}
                    isOpen={isFilterOpen}
                    onToggle={() => setIsFilterOpen(!isFilterOpen)}
                  />
                </div>

                {/* Doctors Grid */}
                <div className="lg:col-span-3">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-gray-600">
                      Showing {filteredDoctors.length} of {doctors.length} doctors
                    </p>
                  </div>

                  {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                      {filteredDoctors.map((doctor) => (
                        <DoctorCard
                          key={doctor.id}
                          doctor={doctor}
                          onBookAppointment={handleBookAppointment}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
                      <p className="text-gray-600">Try adjusting your filters or search terms</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'specialties':
        return <Specialties onFindDoctors={() => setCurrentPage('doctors')} />;

      case 'about':
        return <About />;

      case 'contact':
        return <Contact />;

      case 'dashboard':
        return <Dashboard />;

      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h2>
              <p className="text-gray-600">This page is coming soon!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogin={handleShowLogin}
        onSignup={handleShowSignup}
        onLogout={handleLogout}
        userName={userName}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleAuthSuccess}
        initialMode={authMode}
      />

      <BookingModal
        doctor={selectedDoctor}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingConfirm={handleBookingConfirm}
      />
    </div>
  );
}

export default App;