import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, DollarSign, Upload, FileText } from 'lucide-react';
import { Doctor } from '../types';

interface BookingModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingConfirm: (appointmentData: any) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  doctor, 
  isOpen, 
  onClose, 
  onBookingConfirm 
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [documents, setDocuments] = useState<File[]>([]);

  if (!isOpen || !doctor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const appointmentData = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: selectedDate,
      time: selectedTime,
      status: 'pending',
      location: `${doctor.hospital}, ${doctor.location}`,
      fees: doctor.fees,
      patientNotes,
      documents
    };

    onBookingConfirm(appointmentData);
    onClose();
    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setPatientNotes('');
    setDocuments([]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocuments([...documents, ...Array.from(e.target.files)]);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const selectedDateSlots = doctor.availability.find(slot => slot.date === selectedDate)?.slots || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Book Appointment</h2>
            <p className="text-sm text-gray-600">with {doctor.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Doctor Info */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {doctor.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  ${doctor.fees}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {doctor.availability.map((slot) => (
                <button
                  key={slot.date}
                  type="button"
                  onClick={() => {
                    setSelectedDate(slot.date);
                    setSelectedTime(''); // Reset time when date changes
                  }}
                  className={`p-3 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedDate === slot.date
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(slot.date).toLocaleDateString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedDateSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedTime === time
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {time}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Patient Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit (Optional)
            </label>
            <textarea
              value={patientNotes}
              onChange={(e) => setPatientNotes(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your symptoms or reason for the appointment..."
            />
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors duration-200">
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload medical records, insurance cards, etc.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, JPG, PNG, DOC (max 10MB each)
                </p>
              </label>
            </div>

            {/* Uploaded Files */}
            {documents.length > 0 && (
              <div className="mt-3 space-y-2">
                {documents.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeDocument(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Booking Summary */}
          {selectedDate && selectedTime && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Doctor:</span> {doctor.name}</p>
                <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString()}</p>
                <p><span className="font-medium">Time:</span> {selectedTime}</p>
                <p><span className="font-medium">Location:</span> {doctor.hospital}, {doctor.location}</p>
                <p><span className="font-medium">Consultation Fee:</span> ${doctor.fees}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;