import React from 'react';
import { Heart, Brain, Baby, Eye, Bone, Stethoscope, Activity, Pill, Users, ArrowRight } from 'lucide-react';

interface SpecialtiesProps {
  onFindDoctors: () => void;
}

const Specialties: React.FC<SpecialtiesProps> = ({ onFindDoctors }) => {
  const specialties = [
    {
      name: 'Cardiology',
      icon: Heart,
      description: 'Heart and cardiovascular system care',
      doctors: 45,
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Neurology',
      icon: Brain,
      description: 'Brain and nervous system disorders',
      doctors: 32,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      description: 'Healthcare for infants, children, and adolescents',
      doctors: 58,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Ophthalmology',
      icon: Eye,
      description: 'Eye and vision care',
      doctors: 28,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Orthopedics',
      icon: Bone,
      description: 'Bone, joint, and muscle treatment',
      doctors: 41,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'General Practice',
      icon: Stethoscope,
      description: 'Primary healthcare and family medicine',
      doctors: 72,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Emergency Medicine',
      icon: Activity,
      description: 'Urgent and emergency medical care',
      doctors: 35,
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Pharmacy',
      icon: Pill,
      description: 'Medication management and consultation',
      doctors: 24,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Specialties</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find specialized healthcare professionals across various medical fields. 
              Our network includes board-certified doctors in over 50+ specialties.
            </p>
            <button
              onClick={onFindDoctors}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Find Specialists
            </button>
          </div>
        </div>
      </div>

      {/* Specialties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Specialty</h2>
          <p className="text-lg text-gray-600">Choose from our comprehensive range of medical specialties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={specialty.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
                onClick={onFindDoctors}
              >
                <div className={`w-12 h-12 ${specialty.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{specialty.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{specialty.doctors} doctors</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Specialists?</h2>
            <p className="text-lg text-gray-600">Quality healthcare with experienced professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Certified</h3>
              <p className="text-gray-600">All our specialists are board-certified with extensive training and experience in their respective fields.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Our specialists use cutting-edge medical technology and evidence-based practices for optimal patient care.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">We prioritize personalized treatment plans and compassionate care tailored to each patient's unique needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;