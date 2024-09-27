import express from 'express';

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

const router = express.Router();

// GET methods
router.get('/cafes', getCafesByLocation);
router.get('/employees', getEmployeesByCafe);

// POST methods
router.post('/cafe', createCafe);
router.post('/employee', createEmployee);

// PUT methods
router.put('/cafe', updateCafe);
router.put('/employee', updateEmployee);

// DELETE methods
router.delete('/cafe', deleteCafe);
router.delete('/employee', deleteEmployee);

export default router;
