const express = require("express");
const { protect, restrictTo } = require("../middleware/authMiddleware");
const {
    registerUser,
    loginUser,
    getUsers,
    deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, restrictTo(["admin"]), getUsers);
router.delete("/:id", protect, restrictTo(["admin"]), deleteUser);

module.exports = router;
