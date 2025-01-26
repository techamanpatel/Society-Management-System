const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
    description: { type: String, required: true },
    category: { type: String, enum: ["plumbing", "electrical", "other"], required: true },
    residentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    societyId: { type: mongoose.Schema.Types.ObjectId, ref: "Society" },
    status: { type: String, enum: ["pending", "in-progress", "resolved"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Issue", IssueSchema);
