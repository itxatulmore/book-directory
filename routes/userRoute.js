const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.users_create);
router.get("/", userController.users_all);
router.get("/:id", userController.users_details);
router.put("/:id", userController.users_update);
router.delete("/:id", userController.users_delete);

module.exports = router;
