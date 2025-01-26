const mongoose = require("mongoose");

const SocietySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Society", SocietySchema);
