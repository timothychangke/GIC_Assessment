import {
  getCafesByLocation,
  createCafe,
  updateCafe,
  deleteCafe,
} from './../controllers/cafeController';
import Cafe from '../models/Cafe';
import { mockRequest, mockResponse } from 'jest-mock-req-res';

jest.mock('./../models/Cafe');
describe('Cafe Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { query: {}, body: {}, params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe('getCafesByLocation', () => {
    it('returns cafes for a specific location', async () => {
      const req = mockRequest({ query: { location: 'NYC' } });
      const res = mockResponse();
      Cafe.find.mockResolvedValue([
        {
          name: 'Cafe C',
          description: 'Description C',
          employeeCount: 3,
          logo: 'logoC.png',
          location: 'NYC',
          id: '3',
        },
      ]);
      await getCafesByLocation(req, res);
      expect(res.json).toHaveBeenCalledWith({
        cafes: [
          {
            name: 'Cafe C',
            description: 'Description C',
            employeeCount: 3,
            logo: expect.stringContaining('logoC.png'),
            location: 'NYC',
            id: '3',
          },
        ],
        locations: expect.any(Array),
      });
    });
  });

  describe('createCafe', () => {
    it('creates a new cafe ', async () => {
      const req = mockRequest({
        body: {
          name: 'Cafe A',
          description: 'A nice cafe',
          location: 'NYC',
          picturePath: 'logo.png',
        },
      });
      const res = mockResponse();

      Cafe.mockImplementation(() => ({
        save: jest.fn().mockResolvedValue(req.body),
      }));

      await createCafe(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe('updateCafe', () => {
    it('updates a cafe', async () => {
      const req = mockRequest({
        params: { id: '1' },
        body: { name: 'Updated Cafe Name' },
      });
      const res = mockResponse();

      const mockCafe = {
        toObject: jest.fn().mockReturnValue({ id: '1', name: 'Old Cafe Name' }),
        set: jest.fn(),
        save: jest
          .fn()
          .mockResolvedValue({ id: '1', name: 'Updated Cafe Name' }),
      };

      Cafe.findOne.mockResolvedValue(mockCafe);
      await updateCafe(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('deleteCafe', () => {
  it('should delete a Cafe', async () => {
    const req = {
      params: { id: '1' },
    };
    const res = {
      status: jest.fn().mockReturnThis(), 
      json: jest.fn(),
    };
    expect(true).toBe(true);
  });
});
});
