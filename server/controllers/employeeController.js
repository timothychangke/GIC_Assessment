import Employee from '../models/Employee.js';
import Cafe from '../models/Cafe.js';
import calculateDaysWorked from '../helpers/calculateDaysWorked.js';

export const getEmployeesByCafe = async (req, res) => {
  const { cafe } = req.query;
  try {
    let employees;
    const allCafes = await Cafe.find();
    if (cafe) {
      employees = await Employee.find({ cafe });
    } else {
      employees = await Employee.find();
    }
    const employeesWithDaysWorked = employees.map(
      ({ id, name, email_address, phone_number, start_date, cafe }) => ({
        id,
        name,
        email_address,
        phone_number,
        days_worked: calculateDaysWorked(start_date),
        cafe: cafe || '',
      })
    );
    employeesWithDaysWorked.sort((a, b) => b.days_worked - a.days_worked);
    const uniqueCafes = [...new Set(allCafes.map((cafe) => cafe.name))];
    return res.status(200).json({
      employees: employeesWithDaysWorked,
      cafes: uniqueCafes,
    });
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

export const updateEmployee = async (req, res) => {
  const { id, cafe, ...updates } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Employee ID is required.' });
  }

  try {
    let employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    const oldCafeId = employee.cafe;
    if (cafe) {
      const newCafe = await Cafe.findById(cafe);
      if (!newCafe) {
        return res.status(404).json({ message: 'Cafe not found.' });
      }
      if (oldCafeId !== cafe) {
        newCafe.employeeCount += 1;
        await newCafe.save();
        if (oldCafeId) {
          const oldCafe = await Cafe.findById(oldCafeId);
          if (oldCafe) {
            oldCafe.employeeCount -= 1;
            await oldCafe.save();
          }
        }
      }
    }
    employee = { ...employee.toObject(), ...updates };
    await employee.save();
    return res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Employee ID is required.' });
  }
  try {
    const foundEmployee = await Employee.findOne({ id });
    if (!foundEmployee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    const cafeId = foundEmployee.cafe;
    await Cafe.findById(cafeId, (err, cafe) => {
      if (err || !cafe) {
        return res.status(404).json({ message: 'Cafe not found.' });
      }
      cafe.employeeCount -= 1;
      cafe.save();
    });
    await Employee.deleteOne({ id });
    return res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
