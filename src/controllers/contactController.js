const Contact = require("../models/contactModel");

// Fetch all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get single contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create a new contact
exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update contact
exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
