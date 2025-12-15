const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Contacts fetched successfully" });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Contacts fetched successfully fpr ${req.params.id}` });
});
router.route("/delete").post((req, res) => {
  res.status(200).json({ message: `Contacts delete successfully ${req.body}` });
});

module.exports = router;
