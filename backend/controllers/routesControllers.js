require("dotenv").config();
const {
  About,
  Contact,
  Experience,
  Skill,
  Testimonial,
  Work,
} = require("../mongodb/models");
const cloudinary = require("cloudinary");

// cloud images saving
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// handle works
const getWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json({ works });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const postWork = async (req, res) => {
  try {
    const work = req.body;
    const photoUrl = await cloudinary.uploader.upload(work.photo);
    const data = await Work.create({ ...work, photo: photoUrl.url });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// handle about
const getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json({ about });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const postAbout = async (req, res) => {
  try {
    const about = req.body;
    const photoUrl = await cloudinary.uploader.upload(about.photo);
    const data = await About.create({ ...about, photo: photoUrl.url });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// handle skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json({ skills });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const postSkill = async (req, res) => {
  try {
    const skill = req.body;
    const photoUrl = await cloudinary.uploader.upload(skill.photo);
    const data = await Skill.create({ ...skill, photo: photoUrl.url });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// handle experiences
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json({ experiences });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const postExperience = async (req, res) => {
  try {
    const experience = req.body;
    const data = await Experience.create(experience);
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// handle testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ testimonials });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const postTestimonial = async (req, res) => {
  try {
    const testimonial = req.body;
    const photoUrl = await cloudinary.uploader.upload(testimonial.photo);
    const data = await Testimonial.create({
      ...testimonial,
      photo: photoUrl.url,
    });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// handle contacts
const postContact = async (req, res) => {
  try {
    const contact = req.body;
    const data = await Contact.create(contact);
    res.status(201).json({ data });
  } catch (error) {
    if (error.errors.name) {
      res.status(400).json({ error: error.errors.name.message });
    } else if (error.errors.email) {
      res.status(400).json({ error: error.errors.email.message });
    } else if (error.errors.message) {
      res.status(400).json({ error: error.errors.message.message });
    } else {
      res.status(400).json({ error });
    }
  }
};
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAbout,
  getContacts,
  getExperiences,
  getSkills,
  getTestimonials,
  getWorks,
  postAbout,
  postContact,
  postExperience,
  postSkill,
  postTestimonial,
  postWork,
};
