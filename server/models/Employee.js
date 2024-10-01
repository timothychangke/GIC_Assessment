import mongoose from 'mongoose';
import generateCustomId from '../helpers/generateCustomId.js';

const employeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: generateCustomId,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    match: /^[A-Za-z\s]+$/,
  },
  email_address: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  phone_number: {
    type: String,
    required: true,
    match: /^[89][0-9]{7}$/,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  cafe: {
    type: mongoose.Schema.Types.String, 
    ref: 'Cafe', 
    required: true, 
  },
  start_date: {
    type: Date,
    required: true, 
  },
});

employeeSchema.index({ cafe: 1, email_address: 1 }, { unique: true });

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee
