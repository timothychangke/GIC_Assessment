import Cafe from '../models/Cafe.js';
import Employee from '../models/Employee.js';

export const getCafesByLocation = async (req, res) => {
  const { location } = req.query;
  try {
    let cafes;
    const allCafes = await Cafe.find();
    if (location) {
      cafes = await Cafe.find({ location });
      if (!cafes.length) {
        return res.status(200).json([]);
      }
    } else {
      cafes = allCafes;
    }
    const cafeWithDescriptions = cafes.map((cafe) => {
      const logoUrl = `${req.protocol}://${req.get('host')}/assets/img/${
        cafe.logo
      }`;
      return {
        name: cafe.name,
        description: cafe.description,
        employees: cafe.employeeCount,
        logo: logoUrl,
        location: cafe.location,
        id: cafe.id,
      };
    });
    cafeWithDescriptions.sort((a, b) => b.employees - a.employees);
    const locations = [...new Set(allCafes.map((cafe) => cafe.location))];
    return res.status(200).json({ cafes: cafeWithDescriptions, locations });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createCafe = async (req, res) => {
  console.log(req.body)
  const { name, description, location, logo, picturePath } = req.body;
  if (!name || !description || !location) {
    return res
      .status(400)
      .json({ message: 'Name, description, and location are required.' });
  }
  try {
    const newCafe = new Cafe({
      name,
      description,
      logo: picturePath,
      location,
    });

    await newCafe.save();
    return res.status(201).json(newCafe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateCafe = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Cafe ID is required.' });
  }
  try {
    let cafe = await Cafe.findOne({ id });
    if (!cafe) {
      return res.status(404).json({ message: 'Cafe not found.' });
    }
    const updatedCafe = { ...cafe.toObject(), ...updates };
    cafe.set(updatedCafe);
    await cafe.save();
    return res.status(200).json(cafe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteCafe = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'Cafe ID is required.' });
  }
  try {
    const foundCafe = await Cafe.findOne({ id });
    if (!foundCafe) {
      return res.status(404).json({ message: 'Cafe not found.' });
    }
    await Employee.deleteMany({ cafe: foundCafe.id });
    await Cafe.deleteOne({ id: foundCafe.id });
    return res
      .status(200)
      .json({ message: 'Cafe and associated employees deleted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
