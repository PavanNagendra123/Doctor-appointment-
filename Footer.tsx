import React from 'react';
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DocSpot</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted healthcare companion. Book appointments with top-rated doctors 
              and healthcare providers quickly and effortlessly.
            </p>
            <div className="flex space-x-4">
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'Find Doctors',
                'Specialties',
                'Book Appointment',
                'Emergency Care',
                'Health Records',
                'Insurance'
              ].map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Online Consultation',
                'Lab Tests',
                'Pharmacy',
                'Mental Health',
                'Preventive Care',
                'Chronic Care'
              ].map((service) => (
                <li key={service}>
                  <button className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">1-800-DOCSPOT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">support@docspot.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Healthcare Ave<br />
                  Medical District<br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 p-3 bg-red-900 border border-red-700 rounded-lg">
              <p className="text-red-100 text-xs font-medium">
                🚨 For medical emergencies, call 911 immediately
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 DocSpot. All rights reserved. | Healthcare simplified.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                HIPAA Compliance
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;