import express from 'express';
import { getCafesByLocation, getEmployeesByCafe } from '../controllers/cafeController.js'; // Adjust the path as necessary

const router = express.Router();

router.get('/cafes', getCafesByLocation);
router.get('employees', getEmployeesByCafe)

export default router;
