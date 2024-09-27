import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import routes from './routes/routes.js'

dotenv.config();
const app = express();

connectDB();

app.use(express.json())

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to Server Port: ${PORT}...`));
