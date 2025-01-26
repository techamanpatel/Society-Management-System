const express = require("express");
const { protect, restrictTo } = require("../middleware/authMiddleware");
const {
    getIssues,
    createIssue,
    updateIssueStatus,
} = require("../controllers/issueController");

const router = express.Router();

router.get("/", protect, getIssues); // Accessible by all authenticated users
router.post("/", protect, restrictTo(["resident"]), createIssue);
router.put("/:id", protect, restrictTo(["worker"]), updateIssueStatus);

module.exports = router;
