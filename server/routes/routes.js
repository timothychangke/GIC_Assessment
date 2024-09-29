import express from 'express';
import multer from 'multer';
import path from 'path';

import {
  getCafesByLocation,
  createCafe,
  updateCafe,
  deleteCafe,
} from '../controllers/cafeController.js';
import {
  getEmployeesByCafe,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeController.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../assets/img'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// GET methods
router.get('/cafes', getCafesByLocation);
router.get('/employees', getEmployeesByCafe);

// POST methods
router.post('/cafe', upload.single('logo'), createCafe);
router.post('/employee', createEmployee);

// PUT methods
router.put('/cafe/:id', updateCafe);
router.put('/employee/:id', updateEmployee);

// DELETE methods
router.delete('/cafe/:id', deleteCafe);
router.delete('/employee/:id', deleteEmployee);

export default router;
