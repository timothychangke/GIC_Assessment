import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI; 

const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads'); 
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: 'uploads', 
    };
  },
});

export const upload = multer({ storage });

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB is connected...');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export { gfs, connectDB };


