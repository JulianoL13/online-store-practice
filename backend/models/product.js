const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);

productSchema.plugin(autoIncrement.plugin, {
  model: "User ",

  field: "id",
  startAt: 1,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
