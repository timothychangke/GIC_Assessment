import mongoose from 'mongoose';
import Cafe from '../models/Cafe.js';
import Employee from '../models/Employee.js';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const cafes = [
  {
    id: 'e7d62b34-4b3b-4c09-96b8-9e7fcd27b63a',
    name: 'The Whimsical Bean',
    description: 'A magical café where every cup tells a story.',
    employees: 12,
    logo: '../assets/img/79f6916c-1e0e-465a-ae2f-6b17c869d4e9.JPG',
    location: 'Fairyland Avenue',
  },
  {
    id: '3a8f83a4-9f7c-4a91-a489-6a26dbde8eb8',
    name: 'Cafe Symphony',
    description:
      'Harmonize your senses with our artisanal brews and live music.',
    employees: 20,
    logo: '../assets/img/50841b77-ff37-4ea8-bb9d-db33548adcbe.JPG',
    location: 'Music Square',
  },
  {
    id: 'c1de56e8-5764-4b7a-98a6-50efb8a1ac55',
    name: 'The Cozy Nook',
    description:
      'Your perfect escape with homemade pastries and friendly vibes.',
    employees: 8,
    logo: '../assets/img/e9fad830-b924-4900-aa25-3fe7620bd76c.JPG',
    location: 'Quiet Street',
  },
  {
    id: 'd1f8f4f2-2047-4d61-ae51-5375d4dbb881',
    name: 'Urban Grind',
    description:
      'A vibrant café specializing in gourmet coffee and fresh bites.',
    employees: 15,
    logo: '../assets/img/44ea068a-a0f9-48d0-9368-65617c2e133b.JPG',
    location: 'City Center',
  },
  {
    id: '6f87a5eb-f8b6-4536-88f4-7d43a3f83d87',
    name: 'Green Leaf Cafe',
    description:
      'Where healthy meets delicious, featuring organic ingredients.',
    employees: 10,
    logo: '../assets/img/eddcec1b-a742-402b-9a8e-e35127922fe3.JPG',
    location: 'Nature Park',
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
    // Clear existing data
    await Cafe.deleteMany({});
    await Employee.deleteMany({});

    // Insert cafes and employees
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
