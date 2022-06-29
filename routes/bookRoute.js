const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.book_create);
router.get("/", bookController.book_all);
router.get("/:id", bookController.book_details);
router.put("/:id", bookController.book_update);
router.delete("/:id", bookController.book_delete);

module.exports = router;
