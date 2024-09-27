import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const cafeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    match: /^[A-Za-z\s]+$/,
  },
  description: {
    type: String,
    required: true,
    minlength: 1, 
    maxlength: 500, 
  },
  logo: {
    type: String,
    required: false, 
  },
  location: {
    type: String,
    required: true,
    minlength: 1, 
    maxlength: 100, 
  },
  employeeCount: {
    type: Number,
    default: 0, 
  },
});

const Cafe = mongoose.model('Cafe', cafeSchema);
export default Cafe
