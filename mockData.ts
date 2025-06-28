import { Doctor, Appointment } from '../types';

export const specialties = [
  'Cardiology',
  'Dermatology',
  'Endocrinology',
  'Gastroenterology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'General Practice'
];

export const locations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA'
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    qualification: 'MD, FACC',
    experience: 12,
    rating: 4.9,
    reviews: 324,
    location: 'New York, NY',
    hospital: 'Mount Sinai Hospital',
    fees: 300,
    avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-15', slots: ['09:00', '10:30', '14:00', '15:30'] },
      { date: '2025-01-16', slots: ['09:30', '11:00', '13:30', '16:00'] }
    ],
    about: 'Dr. Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology and non-invasive cardiac procedures.',
    languages: ['English', 'Spanish']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    qualification: 'MD, FAAD',
    experience: 8,
    rating: 4.8,
    reviews: 256,
    location: 'Los Angeles, CA',
    hospital: 'Cedars-Sinai Medical Center',
    fees: 250,
    avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-15', slots: ['08:30', '10:00', '13:00', '15:00'] },
      { date: '2025-01-17', slots: ['09:00', '11:30', '14:30', '16:30'] }
    ],
    about: 'Dr. Chen is a dermatologist specializing in medical and cosmetic dermatology. He has extensive experience in treating skin conditions and performing aesthetic procedures.',
    languages: ['English', 'Mandarin']
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    qualification: 'MD, FAAP',
    experience: 10,
    rating: 4.9,
    reviews: 412,
    location: 'Chicago, IL',
    hospital: 'Chicago Children\'s Hospital',
    fees: 200,
    avatar: 'https://images.pexels.com/photos/5452216/pexels-photo-5452216.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-15', slots: ['08:00', '09:30', '11:00', '14:00'] },
      { date: '2025-01-16', slots: ['08:30', '10:00', '13:30', '15:00'] }
    ],
    about: 'Dr. Rodriguez is a pediatrician with a passion for child healthcare. She focuses on preventive care and has expertise in childhood development and immunizations.',
    languages: ['English', 'Spanish']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    qualification: 'MD, FAAOS',
    experience: 15,
    rating: 4.7,
    reviews: 189,
    location: 'Houston, TX',
    hospital: 'Houston Methodist Hospital',
    fees: 350,
    avatar: 'https://images.pexels.com/photos/5452258/pexels-photo-5452258.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-16', slots: ['09:00', '10:30', '13:00', '15:30'] },
      { date: '2025-01-17', slots: ['08:30', '11:00', '14:00', '16:00'] }
    ],
    about: 'Dr. Wilson is an orthopedic surgeon specializing in sports medicine and joint replacement. He has performed over 2,000 successful surgeries throughout his career.',
    languages: ['English']
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    specialty: 'Neurology',
    qualification: 'MD, FAAN',
    experience: 11,
    rating: 4.8,
    reviews: 298,
    location: 'Phoenix, AZ',
    hospital: 'Mayo Clinic Arizona',
    fees: 400,
    avatar: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-15', slots: ['10:00', '11:30', '14:30', '16:00'] },
      { date: '2025-01-18', slots: ['09:00', '10:30', '13:00', '15:30'] }
    ],
    about: 'Dr. Park is a neurologist with expertise in treating neurological disorders including epilepsy, migraines, and movement disorders. She is also involved in clinical research.',
    languages: ['English', 'Korean']
  },
  {
    id: '6',
    name: 'Dr. Robert Thompson',
    specialty: 'General Practice',
    qualification: 'MD, AAFP',
    experience: 20,
    rating: 4.6,
    reviews: 567,
    location: 'Philadelphia, PA',
    hospital: 'Jefferson Health',
    fees: 150,
    avatar: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: [
      { date: '2025-01-15', slots: ['08:00', '09:30', '11:00', '13:30', '15:00', '16:30'] },
      { date: '2025-01-16', slots: ['08:30', '10:00', '11:30', '14:00', '15:30'] }
    ],
    about: 'Dr. Thompson is a family medicine physician with two decades of experience providing comprehensive primary care for patients of all ages.',
    languages: ['English']
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    date: '2025-01-15',
    time: '10:30',
    status: 'scheduled',
    location: 'Mount Sinai Hospital, New York, NY',
    fees: 300,
    patientNotes: 'Routine cardiac checkup'
  },
  {
    id: '2',
    doctorId: '3',
    doctorName: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    date: '2025-01-08',
    time: '14:00',
    status: 'completed',
    location: 'Chicago Children\'s Hospital, Chicago, IL',
    fees: 200,
    patientNotes: 'Annual physical examination for my daughter'
  }
];