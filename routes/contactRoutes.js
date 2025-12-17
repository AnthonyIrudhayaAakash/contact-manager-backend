const express = require("express");
const contactRouter = express.Router();

contactRouter.route("/").get((req, res) => {
  res.status(200).json({ message: "Contacts fetched successfully" });
});
contactRouter.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Contacts fetched successfully fpr ${req.params.id}` });
});
contactRouter.route("/delete").post((req, res) => {
  res.status(200).json({ message: `Contacts delete successfully ${req.body}` });
});

module.exports = contactRouter;
