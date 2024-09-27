import { getCafesByLocation } from './../controllers/cafeController';
import Cafe from './../models/Cafe';

jest.mock('./../models/Cafe');


describe('getCafesByLocation', () => {
  let req, res;

  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return all cafes sorted by the highest number of employees when no location is provided', async () => {
    const mockCafes = [
      {
        name: 'Cafe A',
        description: 'Description A',
        employeeCount: 5,
        logo: 'logoA.png',
        location: 'NYC',
        id: '1',
      },
      {
        name: 'Cafe B',
        description: 'Description B',
        employeeCount: 10,
        logo: 'logoB.png',
        location: 'NYC',
        id: '2',
      },
    ];

    Cafe.find.mockResolvedValue(mockCafes);

    await getCafesByLocation(req, res);

    expect(Cafe.find).toHaveBeenCalledWith();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        name: 'Cafe B',
        description: 'Description B',
        employees: 10,
        logo: 'logoB.png',
        location: 'NYC',
        id: '2',
      },
      {
        name: 'Cafe A',
        description: 'Description A',
        employees: 5,
        logo: 'logoA.png',
        location: 'NYC',
        id: '1',
      },
    ]);
  });

  test('should return cafes filtered by location and sorted by the highest number of employees', async () => {
    req.query.location = 'NYC';
    const mockCafes = [
      {
        name: 'Cafe C',
        description: 'Description C',
        employeeCount: 3,
        logo: 'logoC.png',
        location: 'NYC',
        id: '3',
      },
      {
        name: 'Cafe D',
        description: 'Description D',
        employeeCount: 7,
        logo: 'logoD.png',
        location: 'NYC',
        id: '4',
      },
    ];

    Cafe.find.mockResolvedValue(mockCafes);

    await getCafesByLocation(req, res);

    expect(Cafe.find).toHaveBeenCalledWith({ location: 'NYC' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        name: 'Cafe D',
        description: 'Description D',
        employees: 7,
        logo: 'logoD.png',
        location: 'NYC',
        id: '4',
      },
      {
        name: 'Cafe C',
        description: 'Description C',
        employees: 3,
        logo: 'logoC.png',
        location: 'NYC',
        id: '3',
      },
    ]);
  });

  test('should return an empty list when no cafes are found for the provided location', async () => {
    req.query.location = 'InvalidLocation';

    Cafe.find.mockResolvedValue([]);

    await getCafesByLocation(req, res);

    expect(Cafe.find).toHaveBeenCalledWith({ location: 'InvalidLocation' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });

  test('should handle server errors gracefully', async () => {
    const errorMessage = 'Database connection error';
    Cafe.find.mockRejectedValue(new Error(errorMessage));

    await getCafesByLocation(req, res);

    expect(Cafe.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
  });
});
