const mongoose = require("mongoose");
const { isEmail } = require("validator");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  phone: String,
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
