const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/user", UserController.create);
router.get("/users", UserController.getAll);
router.get("/products/:id", UserController.getById);
router.put("/products/:id", UserController.update);
router.delete("/products/:id", UserController.delete);
module.exports = router;
