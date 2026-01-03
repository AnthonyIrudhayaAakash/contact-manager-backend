const express = require("express");
const contactRouter = express.Router();
const {getAllContacts, getUserContacts, deleteContact, createContact, editContact} = require("../controllers/contactControllers")

contactRouter.route("/").get(getAllContacts);
contactRouter.route("/:id").get(getUserContacts);
contactRouter.route("/delete").post(deleteContact);
contactRouter.route("/create").post(createContact);
contactRouter.route("/edit").post(editContact)

module.exports = contactRouter;
