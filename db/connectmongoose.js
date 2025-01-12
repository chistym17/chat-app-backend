import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectmongoose = async () => {
  try {
    const uri =
      "mongodb+srv://skyla:skyla@cluster0.baquy.mongodb.net/<databaseName>?retryWrites=true&w=majority&appName=Cluster0";

    console.log("MongoDB URI:", uri); // Log URI for debugging

    // Connect to MongoDB without deprecated options
    await mongoose.connect(uri);

    console.log("Connected to database successfully!");
  } catch (err) {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectmongoose;
