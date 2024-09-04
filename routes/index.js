const router = require("express").Router();
const {todo} = require("../controllers/todoController");
const { register, login } = require("../controllers/userController");

router.get("/todos", todo);
router.post("/register", register);
router.post("/login", login);
router.get("/login", login);

module.exports = router;