const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema();

module.exports = mongoose.model("accounts", userSchema);