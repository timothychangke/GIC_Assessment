
import { getEmployeesByCafe } from '../controllers/employeeController';
import Employee from '../models/Employee';
import calculateDaysWorked from '../helpers/calculateDaysWorked';

jest.mock('../models/Employee');
// jest.mock('../helpers/calculateDaysWorked'); 

describe('getEmployeesByCafe', () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('should return all employees when no cafe is provided', async () => {
    const mockEmployees = [
      {
        id: 'UI0000001',
        name: 'Alice',
        email_address: 'alice@example.com',
        phone_number: '12345678',
        startDate: new Date('2022-01-01'),
        cafe: { name: 'Cafe A' },
      },
      {
        id: 'UI0000002',
        name: 'Bob',
        email_address: 'bob@example.com',
        phone_number: '87654321',
        startDate: new Date('2022-06-01'),
        cafe: null,
      },
    ];

    Employee.find.mockResolvedValue(mockEmployees);

    await getEmployeesByCafe(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        id: 'UI0000001',
        name: 'Alice',
        email_address: 'alice@example.com',
        phone_number: '12345678',
        days_worked: calculateDaysWorked(mockEmployees[0].startDate),
        cafe: 'Cafe A',
      },
      {
        id: 'UI0000002',
        name: 'Bob',
        email_address: 'bob@example.com',
        phone_number: '87654321',
        days_worked: calculateDaysWorked(mockEmployees[1].startDate),
        cafe: '',
      },
    ]);
  });

  test('should return employees filtered by cafe', async () => {
    req.query.cafe = 'Cafe A';
    const mockEmployees = [
      {
        id: 'UI0000001',
        name: 'Alice',
        email_address: 'alice@example.com',
        phone_number: '12345678',
        startDate: new Date('2022-01-01'),
        cafe: { name: 'Cafe A' },
      },
      {
        id: 'UI0000002',
        name: 'Bob',
        email_address: 'bob@example.com',
        phone_number: '87654321',
        startDate: new Date('2022-06-01'),
        cafe: { name: 'Cafe A' },
      },
    ];

    Employee.find.mockResolvedValue(mockEmployees);

    await getEmployeesByCafe(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        id: 'UI0000002',
        name: 'Bob',
        email_address: 'bob@example.com',
        phone_number: '87654321',
        days_worked: calculateDaysWorked(mockEmployees[1].startDate),
        cafe: 'Cafe A',
      },
      {
        id: 'UI0000001',
        name: 'Alice',
        email_address: 'alice@example.com',
        phone_number: '12345678',
        days_worked: calculateDaysWorked(mockEmployees[0].startDate),
        cafe: 'Cafe A',
      },
    ]);
  });

  test('should return an empty array when no employees found for the provided cafe', async () => {
    req.query.cafe = 'Invalid Cafe';
    Employee.find.mockResolvedValue([]);

    await getEmployeesByCafe(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });

  test('should handle errors gracefully', async () => {
    const errorMessage = 'Database error';
    Employee.find.mockRejectedValue(new Error(errorMessage));

    await getEmployeesByCafe(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
  });
});

