const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  codeLink: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  tags: [String],
});

const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
