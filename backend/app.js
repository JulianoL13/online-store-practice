const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");

app.use("/users", UserController);
app.use("/products", ProductController);

app.listen(port, () => {
  console.log(`Server started in http://localhost:${port}`);
});
