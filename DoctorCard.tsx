import React from 'react';
import { Star, MapPin, Clock, DollarSign, Calendar } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  const nextAvailableSlot = doctor.availability.find(slot => slot.slots.length > 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
      {/* Doctor Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          <p className="text-sm text-gray-600">{doctor.qualification}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
          </div>
          <p className="text-xs text-gray-500">({doctor.reviews} reviews)</p>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          <span>{doctor.hospital}, {doctor.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span>{doctor.experience} years of experience</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
          <span>Consultation fee: ${doctor.fees}</span>
        </div>
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-4">
        {doctor.languages.map((language) => (
          <span
            key={language}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {language}
          </span>
        ))}
      </div>

      {/* Next Available */}
      {nextAvailableSlot && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <div className="flex items-center text-sm text-green-800">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="font-medium">Next available:</span>
            <span className="ml-1">
              {new Date(nextAvailableSlot.date).toLocaleDateString()} at {nextAvailableSlot.slots[0]}
            </span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3">
        <button
          onClick={() => onBookAppointment(doctor)}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Book Appointment
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;