export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient' | 'staff';
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: string;
  userId: string;
  medicalRecordNumber: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  phone: string;
  emergencyContact: string;
  medicalHistory: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Examination {
  id: string;
  patientId: string;
  doctorId: string;
  type: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  scheduledDate: string;
  completedDate?: string;
  findings?: string;
  recommendations?: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Report {
  id: string;
  examinationId: string;
  doctorId: string;
  content: string;
  status: 'draft' | 'final' | 'amended';
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  examinationType: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
