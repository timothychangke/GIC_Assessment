import Employee from '../models/Employee';
import Cafe from '../models/Cafe';
import calculateDaysWorked from '../helpers/calculateDaysWorked.js';

export const getEmployeesByCafe = async (req, res) => {
  const { cafe } = req.query;
  try {
    const employees = cafe
      ? await Employee.find({ cafe }).populate('cafe')
      : await Employee.find().populate('cafe');
    const employeesWithDaysWorked = employees.map((employee) => {
      return {
        id: employee.id,
        name: employee.name,
        email_address: employee.email_address,
        phone_number: employee.phone_number,
        days_worked: calculateDaysWorked(employee.startDate),
        cafe: employee.cafe ? employee.cafe.name : '',
      };
    });
    employeesWithDaysWorked.sort((a, b) => b.days_worked - a.days_worked);
    return res.status(200).json(employeesWithDaysWorked);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createEmployee = async (req, res) => {
  const { name, email_address, phone_number, gender, cafe, start_date } =
    req.body;
  if (
    !name ||
    !email_address ||
    !phone_number ||
    !gender ||
    !cafe ||
    !start_date
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const foundCafe = await Cafe.findOne({ name: cafeName });
    if (!foundCafe) {
      return res.status(404).json({ message: 'Cafe not found.' });
    }
    const newEmployee = new Employee({
      name,
      email_address,
      phone_number,
      gender,
      cafe,
      start_date,
    });
    await newEmployee.save();
    foundCafe.employeeCount += 1;
    await foundCafe.save();
    return res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
