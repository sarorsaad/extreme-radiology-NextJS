import { User, Patient, Examination, Report, Appointment } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Dr. John Smith',
    email: 'john.smith@radiology.com',
    role: 'doctor',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'patient',
    createdAt: '2023-01-02T00:00:00Z',
    updatedAt: '2023-01-02T00:00:00Z',
  },
];

export const patients: Patient[] = [
  {
    id: '1',
    userId: '2',
    medicalRecordNumber: 'MRN001',
    dateOfBirth: '1990-05-15',
    gender: 'female',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    emergencyContact: '+1987654321',
    medicalHistory: ['Hypertension', 'Diabetes'],
    createdAt: '2023-01-02T00:00:00Z',
    updatedAt: '2023-01-02T00:00:00Z',
  },
];

export const examinations: Examination[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    type: 'X-Ray',
    status: 'completed',
    scheduledDate: '2023-12-15T10:00:00Z',
    completedDate: '2023-12-15T10:30:00Z',
    findings: 'Normal chest X-ray findings',
    recommendations: 'No follow-up required',
    images: ['chest-xray-1.jpg', 'chest-xray-2.jpg'],
    createdAt: '2023-12-15T10:00:00Z',
    updatedAt: '2023-12-15T10:30:00Z',
  },
];

export const reports: Report[] = [
  {
    id: '1',
    examinationId: '1',
    doctorId: '1',
    content: 'Normal chest X-ray with no significant findings.',
    status: 'final',
    createdAt: '2023-12-15T11:00:00Z',
    updatedAt: '2023-12-15T11:00:00Z',
  },
];

export const appointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    examinationType: 'X-Ray',
    date: '2023-12-20',
    time: '10:00',
    status: 'scheduled',
    notes: 'Follow-up examination',
    createdAt: '2023-12-15T12:00:00Z',
    updatedAt: '2023-12-15T12:00:00Z',
  },
];
