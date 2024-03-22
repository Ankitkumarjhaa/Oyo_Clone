import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

let cachedDB = null;

const connectDB = async () => {
  if (cachedDB) {
    return cachedDB;
  } else {
    try {
      const newDB = await mongoose.connect(URI);
      cachedDB = newDB;
      return newDB;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
};

export default connectDB;
