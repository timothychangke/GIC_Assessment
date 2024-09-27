import express from 'express';
import connectDB from './config/db';

dotenv.config();
const app = express();

// Connect to the database
connectDB();

//Middleware
app.use(express.json());

// Import routes
app.use('/api/cafes', require('./routes/cafeRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to Server Port: ${PORT}...`));
