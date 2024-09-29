import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

app.use('/assets/img', express.static(path.join(__dirname, './assets/img')));
app.use(express.json());
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to Server Port: ${PORT}...`));
