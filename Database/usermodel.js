const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtube");

const userSchema = new mongoose.Schema({
    name: String,
    usernme: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);