import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../../controllers/v1/userController.js";

const router = express.Router();

router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default router;
