const { Router } = require("express");
const {
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
} = require("../controllers/routesControllers");

const router = Router();

// works routes
router.get("/works", getWorks);
router.post("/works", postWork);

// about routes
router.get("/about", getAbout);
router.post("/about", postAbout);

// skills routes
router.get("/skills", getSkills);
router.post("/skills", postSkill);

// experiences routes
router.get("/experiences", getExperiences);
router.post("/experiences", postExperience);

// testimonials routes
router.get("/testimonials", getTestimonials);
router.post("/testimonials", postTestimonial);

// contacts routes
router.post("/contacts", postContact);
router.get("/contacts", getContacts);

module.exports = router;
