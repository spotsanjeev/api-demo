import User from "../models/userModel.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = async (req, res, next) => {
    try {
        console.log("📢 Fetching all users...");
        const users = await User.find();
        console.log(`✅ Found ${users.length} users`);
        res.json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error.message);
        next(error);
    }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
export const getUserById = async (req, res, next) => {
    try {
        console.log(`📢 Fetching user with ID: ${req.params.id}`);
        const user = await User.findById(req.params.id);
        if (!user) {
            console.warn(`⚠️ User with ID ${req.params.id} not found`);
            return res.status(404).json({ message: "User not found" });
        }
        console.log(`✅ User found: ${user.firstName} ${user.lastName}`);
        res.json(user);
    } catch (error) {
        console.error("❌ Error fetching user:", error.message);
        next(error);
    }
};

// @desc    Create user
// @route   POST /api/users
export const createUser = async (req, res, next) => {
    try {
        console.log("📢 Creating new user:", req.body);
        const { firstName, lastName, email } = req.body;
        const user = await User.create({ firstName, lastName, email });
        console.log(`✅ User created: ${user._id}`);
        res.status(201).json(user);
    } catch (error) {
        console.error("❌ Error creating user:", error.message);
        next(error);
    }
};

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = async (req, res, next) => {
    try {
        console.log(`📢 Updating user with ID: ${req.params.id}`);
        const { firstName, lastName, email } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, email },
            { new: true }
        );
        if (!user) {
            console.warn(`⚠️ User with ID ${req.params.id} not found`);
            return res.status(404).json({ message: "User not found" });
        }
        console.log(`✅ User updated: ${user._id}`);
        res.json(user);
    } catch (error) {
        console.error("❌ Error updating user:", error.message);
        next(error);
    }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = async (req, res, next) => {
    try {
        console.log(`📢 Deleting user with ID: ${req.params.id}`);
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            console.warn(`⚠️ User with ID ${req.params.id} not found`);
            return res.status(404).json({ message: "User not found" });
        }
        console.log(`✅ User deleted: ${user._id}`);
        res.json({ message: "User removed" });
    } catch (error) {
        console.error("❌ Error deleting user:", error.message);
        next(error);
    }
};
