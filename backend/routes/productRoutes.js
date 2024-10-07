const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/userController");

router.post("/users", ProductController.create);
router.get("/users", ProductController.getAll);
router.get("/products/:id", ProductController.getById);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
module.exports = router;
