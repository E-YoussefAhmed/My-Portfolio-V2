const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    require: true,
  },
  feedback: {
    type: String,
    require: true,
  },
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;
