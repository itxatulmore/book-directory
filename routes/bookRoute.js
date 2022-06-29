const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.book_create);
router.get("/", bookController.book_all);
router.get("/:productId", bookController.book_details);
router.put("/:productId", bookController.book_update);
router.delete("/:productId", bookController.book_delete);

module.exports = router;
