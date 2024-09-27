import Cafe from '../models/Cafe';

export const getCafesByLocation = async (req, res) => {
  const { location } = req.query;
  try {
    let cafes;
    if (location) {
      cafes = await Cafe.find({ location });
      if (!cafes.length) {
        return res.status(200).json([]);
      }
    } else {
      cafes = await Cafe.find();
    }
    const cafeWithDescriptions = cafes.map((cafe) => ({
      name: cafe.name,
      description: cafe.description,
      employees: cafe.employeeCount,
      logo: cafe.logo,
      location: cafe.location,
      id: cafe.id,
    }));
    cafeWithDescriptions.sort((a, b) => b.employees - a.employees);
    return res.status(200).json(cafeWithDescriptions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createCafe = async (req, res) => {
  const { name, description, logo, location } = req.body;
  if (!name || !description || !location) {
    return res
      .status(400)
      .json({ message: 'Name, description, and location are required.' });
  }
  try {
    const newCafe = new Cafe({
      name,
      description,
      logo,
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
  const { id } = req.body; 
  const updates = req.body; 

  if (!id) {
    return res.status(400).json({ message: 'Cafe ID is required.' });
  }

  try {
    const cafe = await Cafe.findById(id);
    if (!cafe) {
      return res.status(404).json({ message: 'Café not found.' });
    }
    Object.assign(cafe, updates); 
    await cafe.save();
    return res.status(200).json(cafe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
