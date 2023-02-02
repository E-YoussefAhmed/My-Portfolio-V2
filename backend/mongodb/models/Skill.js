const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
