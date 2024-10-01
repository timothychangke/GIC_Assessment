import {
    getEmployeesByCafe,
    createEmployee,
    updateEmployee,
    deleteEmployee
  } from '../controllers/employeeController';
  import Employee from '../models/Employee';
  import Cafe from '../models/Cafe';
  
  jest.mock('../models/Employee');
  jest.mock('../models/Cafe');
  jest.mock('../helpers/calculateDaysWorked', () => jest.fn(() => 5));
  
  describe('Employee Controller', () => {
    let req, res;
  
    beforeEach(() => {
      req = { query: {}, body: {}, params: {} };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
    });
  
    describe('getEmployeesByCafe', () => {
      it('should return employees and cafes', async () => {
        Employee.find.mockResolvedValue([{ id: '1', name: 'John', start_date: new Date() }]);
        Cafe.find.mockResolvedValue([{ name: 'Cafe A' }]);
  
        await getEmployeesByCafe(req, res);
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
      });
    });
  
    describe('createEmployee', () => {
      it('should create a new employee', async () => {
        req.body = {
          name: 'John',
          email_address: 'john@example.com',
          phone_number: '1234567890',
          gender: 'Male',
          cafe: 'Cafe A',
          start_date: new Date()
        };
        Cafe.findOne.mockResolvedValue({ name: 'Cafe A', save: jest.fn() });
        Employee.findOne.mockResolvedValue(null);
        Employee.prototype.save = jest.fn();
  
        await createEmployee(req, res);
  
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();
      });
    });
  
    describe('updateEmployee', () => {
      it('should update an employee', async () => {
        req.body = { id: '1', name: 'John Updated' };
        Employee.findOne.mockResolvedValue({
          id: '1',
          name: 'John',
          cafe: 'Cafe A',
          toObject: jest.fn().mockReturnThis(),
          set: jest.fn(),
          save: jest.fn()
        });
  
        await updateEmployee(req, res);
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
      });
    });
  
    describe('deleteEmployee', () => {
      it('should delete an employee', async () => {
        req.params = { id: '1' };
        Employee.findOne.mockResolvedValue({ id: '1', cafe: 'Cafe A' });
        Cafe.findOne.mockResolvedValue({ name: 'Cafe A', save: jest.fn() });
        Employee.deleteOne.mockResolvedValue({});
  
        await deleteEmployee(req, res);
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Employee deleted successfully.' });
      });
    });
  });