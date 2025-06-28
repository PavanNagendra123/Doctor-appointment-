export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: number;
  rating: number;
  reviews: number;
  location: string;
  hospital: string;
  fees: number;
  avatar: string;
  availability: TimeSlot[];
  about: string;
  languages: string[];
}

export interface TimeSlot {
  date: string;
  slots: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'pending';
  location: string;
  fees: number;
  patientNotes?: string;
  documents?: File[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  emergencyContact: string;
  medicalHistory?: string[];
  role: 'patient' | 'doctor' | 'admin';
}

export interface FilterOptions {
  specialty: string;
  location: string;
  availability: string;
  rating: number;
  fees: { min: number; max: number };
}