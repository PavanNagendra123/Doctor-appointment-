import React from 'react';
import { Shield, Users, Award, Heart, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Patients', icon: Users },
    { number: '500+', label: 'Verified Doctors', icon: Shield },
    { number: '50+', label: 'Specialties', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Every decision we make is centered around improving patient outcomes and experiences.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of data security and patient confidentiality.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality healthcare accessible to everyone, everywhere, at any time.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DocSpot</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionizing healthcare by connecting patients with the right doctors 
              at the right time, making quality medical care accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At DocSpot, we believe that finding the right healthcare provider shouldn't be complicated or time-consuming. 
              Our platform bridges the gap between patients and healthcare professionals, making it easier than ever to 
              access quality medical care.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, we've grown from a simple appointment booking system to a comprehensive healthcare 
              platform that serves thousands of patients and hundreds of medical professionals across the country.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Healthcare for Everyone</h3>
                <p className="text-sm text-gray-600">Quality medical care should be accessible to all</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Healthcare team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that reflect our commitment to healthcare excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the people behind DocSpot's success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Mitchell</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-gray-600">Former Chief Medical Officer with 15+ years in healthcare innovation</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-blue-600 font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-gray-600">Technology leader with expertise in healthcare systems and AI</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CMO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Dr. Emily Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Chief Medical Officer</p>
              <p className="text-sm text-gray-600">Board-certified physician ensuring clinical excellence and safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;