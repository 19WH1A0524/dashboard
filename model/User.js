const mongoose = require('mongoose');

const userData = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model("User", userData);
// const mongoose = require("mongoose");


// const userSchema = mongoose.Schema({
//     name: { type: String }
// });

// module.exports = mongoose.model("User", userSchema);