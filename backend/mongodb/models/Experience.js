const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;
