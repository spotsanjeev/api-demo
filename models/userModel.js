import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: [true, "First Name is required"] },
        lastName: { type: String, required: false },
        age: { type: Number, required: false },
        email: { type: String, required: [true, "Email is required"], unique: true },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
