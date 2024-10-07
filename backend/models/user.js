const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, {
  model: "User ",
  field: "id",
  startAt: 1,
});

const User = mongoose.model("User ", userSchema);

module.exports = User;
