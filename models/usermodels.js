import mongoose from "mongoose"; // Import mongoose

// Define user schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true, // Ensure consistency
      trim: true, // Remove extra spaces
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["male", "female"],
        message: "{VALUE} is not a valid gender",
      },
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Export user model
const User = mongoose.model("User", userSchema);
export default User;
