import mongoose from 'mongoose';
import Cafe from '../models/Cafe.js';
import Employee from '../models/Employee.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const cafes = [
  {
    id: 'e7d62b34-4b3b-4c09-96b8-9e7fcd27b63a',
    name: 'The Whimsical Bean',
    description: 'A magical café where every cup tells a story.',
    employees: 12,
    logo: '79f6916c-1e0e-465a-ae2f-6b17c869d4e9.JPG',
    location: 'Ang Mo Kio',
  },
  {
    id: 'd1f8f4f2-2047-4d61-ae51-5375d4dbb881',
    name: 'Urban Grind',
    description:
      'A vibrant café specializing in gourmet coffee and fresh bites.',
    employees: 15,
    logo: '44ea068a-a0f9-48d0-9368-65617c2e133b.JPG',
    location: 'Bouna Vista',
  },
  {
    id: '6f87a5eb-f8b6-4536-88f4-7d43a3f83d87',
    name: 'Green Leaf Cafe',
    description:
      'Where healthy meets delicious, featuring organic ingredients.',
    employees: 10,
    logo: 'eddcec1b-a742-402b-9a8e-e35127922fe3.JPG',
    location: 'Bishan',
  },
  {
    id: '8a8b62c1-3b34-4d9f-89a7-6f8b324e2abc',
    name: 'Sunset Cafe',
    description:
      'Enjoy breathtaking views while sipping on our signature blends.',
    employees: 10,
    logo: 'ba3fb32b-31ec-4a31-8690-46109cdcfe14.JPG',
    location: 'Bishan',
  },
  {
    id: '3a8f83a4-9f7c-4a91-a489-6a26dbde8eb8',
    name: 'Cafe Symphony',
    description:
      'Harmonize your senses with our artisanal brews and live music.',
    employees: 20,
    logo: '50841b77-ff37-4ea8-bb9d-db33548adcbe.JPG',
    location: 'Bouna Vista',
  },
  {
    id: 'c1de56e8-5764-4b7a-98a6-50efb8a1ac55',
    name: 'The Cozy Nook',
    description:
      'Your perfect escape with homemade pastries and friendly vibes.',
    employees: 8,
    logo: 'e9fad830-b924-4900-aa25-3fe7620bd76c.JPG',
    location: 'Bishan',
  },
  {
    id: '5b19c3a8-d3e8-4f18-ae7f-51cb5a57fdec',
    name: 'Pineapple Express Cafe',
    description: 'Tropical vibes and delicious desserts to brighten your day.',
    employees: 8,
    logo: 'f5392047-e01e-4e87-aa88-afce6b3c822a.JPG',
    location: 'Orchard Road',
  },
  {
    id: 'c1d6d8ab-3d54-4316-b3d4-b64bc4e65abc',
    name: 'The Vintage Cup',
    description:
      'A cozy spot with a collection of vintage teas and baked goods.',
    employees: 7,
    logo: '85eaa8c6-419d-43ee-ad82-f878161b7095.JPG',
    location: 'Bishan',
  },
];

const employees = [
  {
    id: 'UIA1B2C3D',
    name: 'Alice Johnson',
    email_address: 'alice.johnson@example.com',
    phone_number: '91234567',
    start_date: '2023-08-10',
    cafe: 'Green Leaf Cafe',
    gender: 'Female',
  },
  {
    id: 'UIA4E5F6G',
    name: 'Mark Smith',
    email_address: 'mark.smith@example.com',
    phone_number: '98765432',
    start_date: '2023-09-01',
    cafe: 'Urban Grind',
    gender: 'Male',
  },
  {
    id: 'UIH7I8J9K',
    name: 'Sarah Lee',
    email_address: 'sarah.lee@example.com',
    phone_number: '96543210',
    start_date: '2023-07-01',
    cafe: 'The Cozy Nook',
    gender: 'Female',
  },
  {
    id: 'UIL1M2N3O',
    name: 'James Wong',
    email_address: 'james.wong@example.com',
    phone_number: '92345678',
    start_date: '2023-09-15',
    cafe: 'Cafe Symphony',
    gender: 'Male',
  },
  {
    id: 'UIP4Q5R6S',
    name: 'Emma Tan',
    email_address: 'emma.tan@example.com',
    phone_number: '87654321',
    start_date: '2023-09-10',
    cafe: 'The Whimsical Bean',
    gender: 'Female',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Cafe.deleteMany({});
    await Employee.deleteMany({});

    await Cafe.insertMany(cafes);
    await Employee.insertMany(employees);

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
