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
    employeeCount: 4,
    logo: '79f6916c-1e0e-465a-ae2f-6b17c869d4e9.JPG',
    location: 'Ang Mo Kio',
  },
  {
    id: 'd1f8f4f2-2047-4d61-ae51-5375d4dbb881',
    name: 'Urban Grind',
    description:
      'A vibrant café specializing in gourmet coffee and fresh bites.',
    employeeCount: 4,
    logo: '44ea068a-a0f9-48d0-9368-65617c2e133b.JPG',
    location: 'Bouna Vista',
  },
  {
    id: '6f87a5eb-f8b6-4536-88f4-7d43a3f83d87',
    name: 'Green Leaf Cafe',
    description:
      'Where healthy meets delicious, featuring organic ingredients.',
    employeeCount: 5,
    logo: 'eddcec1b-a742-402b-9a8e-e35127922fe3.JPG',
    location: 'Bishan',
  },
  {
    id: '8a8b62c1-3b34-4d9f-89a7-6f8b324e2abc',
    name: 'Sunset Cafe',
    description:
      'Enjoy breathtaking views while sipping on our signature blends.',
    employeeCount: 3,
    logo: 'ba3fb32b-31ec-4a31-8690-46109cdcfe14.JPG',
    location: 'Bishan',
  },
  {
    id: '3a8f83a4-9f7c-4a91-a489-6a26dbde8eb8',
    name: 'Cafe Symphony',
    description:
      'Harmonize your senses with our artisanal brews and live music.',
    employeeCount: 3,
    logo: '50841b77-ff37-4ea8-bb9d-db33548adcbe.JPG',
    location: 'Bouna Vista',
  },
  {
    id: 'c1de56e8-5764-4b7a-98a6-50efb8a1ac55',
    name: 'The Cozy Nook',
    description:
      'Your perfect escape with homemade pastries and friendly vibes.',
    employeeCount: 4,
    logo: 'e9fad830-b924-4900-aa25-3fe7620bd76c.JPG',
    location: 'Bishan',
  },
  {
    id: '5b19c3a8-d3e8-4f18-ae7f-51cb5a57fdec',
    name: 'Pineapple Express Cafe',
    description: 'Tropical vibes and delicious desserts to brighten your day.',
    employeeCount: 3,
    logo: 'f5392047-e01e-4e87-aa88-afce6b3c822a.JPG',
    location: 'Orchard Road',
  },
  {
    id: 'c1d6d8ab-3d54-4316-b3d4-b64bc4e65abc',
    name: 'The Vintage Cup',
    description:
      'A cozy spot with a collection of vintage teas and baked goods.',
    employeeCount: 3,
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
  {
    id: 'UIA2B3C4D',
    name: 'David Chen',
    email_address: 'david.chen@example.com',
    phone_number: '91234568',
    start_date: '2023-08-20',
    cafe: 'Sunset Cafe',
    gender: 'Male',
  },
  {
    id: 'UIA5E6F7G',
    name: 'Linda Park',
    email_address: 'linda.park@example.com',
    phone_number: '98765433',
    start_date: '2023-08-30',
    cafe: 'Pineapple Express Cafe',
    gender: 'Female',
  },
  {
    id: 'UIH8I9J0K',
    name: 'Michael Brown',
    email_address: 'michael.brown@example.com',
    phone_number: '96543211',
    start_date: '2023-09-05',
    cafe: 'The Vintage Cup',
    gender: 'Male',
  },
  {
    id: 'UIL2M3N4O',
    name: 'Laura White',
    email_address: 'laura.white@example.com',
    phone_number: '92345679',
    start_date: '2023-09-12',
    cafe: 'Green Leaf Cafe',
    gender: 'Female',
  },
  {
    id: 'UIP5Q6R7S',
    name: 'Peter Kim',
    email_address: 'peter.kim@example.com',
    phone_number: '87654322',
    start_date: '2023-09-18',
    cafe: 'Urban Grind',
    gender: 'Male',
  },
  {
    id: 'UIA3B4C5D',
    name: 'Jessica Lim',
    email_address: 'jessica.lim@example.com',
    phone_number: '91234569',
    start_date: '2023-08-25',
    cafe: 'The Cozy Nook',
    gender: 'Female',
  },
  {
    id: 'UIA6E7F8G',
    name: 'Tom Lee',
    email_address: 'tom.lee@example.com',
    phone_number: '98765434',
    start_date: '2023-09-03',
    cafe: 'The Whimsical Bean',
    gender: 'Male',
  },
  {
    id: 'UIH9I0J1K',
    name: 'Nora Zhang',
    email_address: 'nora.zhang@example.com',
    phone_number: '96543212',
    start_date: '2023-08-15',
    cafe: 'Pineapple Express Cafe',
    gender: 'Female',
  },
  {
    id: 'UIL3M4N5O',
    name: 'Alex Wong',
    email_address: 'alex.wong@example.com',
    phone_number: '92345680',
    start_date: '2023-09-09',
    cafe: 'Cafe Symphony',
    gender: 'Male',
  },
  {
    id: 'UIP6Q7R8S',
    name: 'Grace Yeo',
    email_address: 'grace.yeo@example.com',
    phone_number: '87654323',
    start_date: '2023-09-14',
    cafe: 'The Vintage Cup',
    gender: 'Female',
  },
  {
    id: 'UIA4B5C6D',
    name: 'Ethan Tan',
    email_address: 'ethan.tan@example.com',
    phone_number: '91234570',
    start_date: '2023-09-07',
    cafe: 'Sunset Cafe',
    gender: 'Male',
  },
  {
    id: 'UIA7E8F9G',
    name: 'Megan Ong',
    email_address: 'megan.ong@example.com',
    phone_number: '98765435',
    start_date: '2023-09-20',
    cafe: 'Green Leaf Cafe',
    gender: 'Female',
  },
  {
    id: 'UIH0I1J2K',
    name: 'Henry Lim',
    email_address: 'henry.lim@example.com',
    phone_number: '96543213',
    start_date: '2023-09-21',
    cafe: 'Urban Grind',
    gender: 'Male',
  },
  {
    id: 'UIL4M5N6O',
    name: 'Sophia Lim',
    email_address: 'sophia.lim@example.com',
    phone_number: '92345681',
    start_date: '2023-09-22',
    cafe: 'The Cozy Nook',
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
