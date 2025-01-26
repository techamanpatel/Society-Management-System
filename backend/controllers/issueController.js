const Issue = require("../models/Issue");

// Get all issues
const getIssues = async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Create a new issue
const createIssue = async (req, res) => {
    const { userId, title, description } = req.body;

    try {
        const issue = await Issue.create({
            userId,
            title,
            description,
            status: "pending",
        });
        res.status(201).json(issue);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update issue status
const updateIssueStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const issue = await Issue.findById(req.params.id);
        if (!issue) {
            return res.status(404).json({ message: "Issue not found" });
        }
        issue.status = status;
        await issue.save();
        res.json(issue);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { getIssues, createIssue, updateIssueStatus };
