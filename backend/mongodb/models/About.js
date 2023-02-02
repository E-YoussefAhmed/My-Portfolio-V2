const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;
