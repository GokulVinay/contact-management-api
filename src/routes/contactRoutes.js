const express = require("express");
const { body } = require("express-validator");
const {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");

const router = express.Router();

// Routes
router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phoneNumber").notEmpty().withMessage("Phone number is required"),
], createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
