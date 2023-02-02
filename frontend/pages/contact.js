import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowCircleLeft,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { useForm } from "@formspree/react";
import {
  contactVariants,
  formVariants,
  paginationVariants,
} from "../utils/motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState(null);
  const [state, handleSubmit] = useForm("mgeborrn");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      const { error } = await res.json();
      if (!res.ok) {
        setErrors(error);
        setTimeout(() => {
          setErrors(null);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      variants={contactVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden relative px-16 mobile:px-8 mobile:h-[calc(100vh-73px)] mobile:text-center w-screen h-[calc(100vh-85px)] flex flex-col items-center justify-evenly mobile:justify-start mobile:overflow-y-auto mobile:dark:scrollbar-track-gray-300/20 mobile:scrollbar-track-gray-600/30  mobile:dark:scrollbar-thumb-darkColor mobile:scrollbar-thumb-lightColor mobile:scrollbar-thin"
    >
      <motion.h1
        variants={formVariants}
        className="text-5xl mobile:text-2xl tablet:text-4xl mobile:m-4 font-bold"
      >
        Take A{" "}
        <span className="dark:text-darkColor text-lightColor">Coffee</span> &{" "}
        <span className="dark:text-darkColor text-lightColor">Chat</span> With
        Me
      </motion.h1>
      <motion.div
        variants={formVariants}
        className="flex mobile:flex-col tablet:flex-col"
      >
        <div className="p-4 m-4 mobile:m-3 mobile:p-3 bg-gray-300 dark:bg-[#333] transition duration-300 flex items-center hover:bg-gray-400 dark:hover:bg-[#222] rounded-lg mobile:min-w-[200px] min-w-[290px]">
          <a
            href="mailto:ya23122002@gmail.com"
            className="text-lg mobile:text-base flex items-center transition font-semibold duration-300 hover:text-lightColor dark:hover:text-darkColor"
          >
            <IoIosMail className="text-4xl mobile:text-2xl mr-2 " />
            ya23122002@gmail.com
          </a>
        </div>
        <div className="p-4 m-4 mobile:m-3 mobile:p-3 bg-gray-300 dark:bg-[#333] transition duration-300 flex items-center hover:bg-gray-400 dark:hover:bg-[#222] rounded-lg mobile:min-w-[200px] min-w-[290px]">
          <a
            href="tel:+201069036485"
            className="text-lg mobile:text-base flex items-center transition font-semibold duration-300 hover:text-lightColor dark:hover:text-darkColor"
          >
            <BsTelephoneFill className="text-3xl mobile:text-xl mr-2 " />
            (+20) 106-9036-485
          </a>
        </div>
      </motion.div>
      {!state.succeeded ? (
        <form
          className="flex flex-col items-center justify-evenly mobile:grid mobile:grid-cols-1 mobile:gap-5 mobile:mt-4  mobile:w-full mobile:h-[450px] tablet:h-[60%] w-[80%] h-[65%] lg:w-7/12"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              !(formData.email === "") &&
              !(formData.name === "") &&
              !(formData.message === "")
            ) {
              handleSubmit(formData);
            }
          }}
        >
          <motion.input
            variants={formVariants}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            className="outline-none dark:bg-[#333] bg-gray-300 placeholder:text-black/60 dark:placeholder:text-white/60 w-full p-4 rounded-lg focus:border-2 focus:border-lightColor dark:focus:border-darkColor"
            onChange={handleChange}
          />
          <motion.input
            variants={formVariants}
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            className="outline-none dark:bg-[#333] bg-gray-300 placeholder:text-black/60 dark:placeholder:text-white/60 w-full p-4 rounded-lg focus:border-2 focus:border-lightColor dark:focus:border-darkColor"
            onChange={handleChange}
          />
          <motion.input
            variants={formVariants}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            className="outline-none dark:bg-[#333] bg-gray-300 placeholder:text-black/60 dark:placeholder:text-white/60 w-full p-4 rounded-lg focus:border-2 focus:border-lightColor dark:focus:border-darkColor"
            onChange={handleChange}
          />
          <motion.textarea
            variants={formVariants}
            type="textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            className="outline-none dark:bg-[#333] bg-gray-300 placeholder:text-black/60 dark:placeholder:text-white/60 w-full sm:h-[200px] p-4 rounded-lg focus:border-2 focus:border-lightColor dark:focus:border-darkColor"
            onChange={handleChange}
          ></motion.textarea>
          {errors && (
            <motion.div
              variants={formVariants}
              className="bg-red-600 text-xs text-white p-2 rounded-md"
            >
              {errors}
            </motion.div>
          )}
          <motion.button
            variants={formVariants}
            type="submit"
            className="outline-none p-3 text-sm mobile:mx-auto mobile:mb-4 transition duration-300 hover:text-white bg-gray-400 hover:bg-lightColor active:bg-lightColor/75 dark:bg-[#222] dark:hover:bg-darkColor dark:active:bg-darkColor/75 w-fit rounded-lg"
            onClick={handleSubmit1}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      ) : (
        <motion.div variants={formVariants}>
          <h1 className="text-center text-5xl font-extrabold capitalize text-lightColor dark:text-darkColor">
            Thank you for getting in touch!
          </h1>
        </motion.div>
      )}
      <motion.div
        variants={formVariants}
        className="justify-evenly dark:text-white mobile:my-4 w-full flex items-center "
      >
        <Link href="/testimonials">
          <motion.span
            variants={paginationVariants}
            whileHover="hover"
            className="flex items-center transition-colors duration-300 hover:text-lightColor dark:hover:text-darkColor"
          >
            <FaArrowCircleLeft className="text-3xl mobile:text-lg tablet:text-2xl mr-2" />{" "}
            <span className="text-4xl mobile:text-2xl tablet:text-3xl font-bold uppercase">
              Testimonials
            </span>
          </motion.span>
        </Link>
      </motion.div>
      <motion.div
        variants={formVariants}
        className="sm:absolute flex mobile:mb-2 mobile:flex-row flex-col-reverse  tablet:bottom-4 tablet:left-4 bottom-8 left-8"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center text-2xl bg-gray-300 dark:bg-[#333] hover:bg-lightColor hover:text-white dark:hover:bg-darkColor dark:hover:text-black transition duration-300 m-2 rounded-full">
          <a
            href="https://www.facebook.com/profile.php?id=100011448804193"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
        <div className="w-[40px] h-[40px] flex items-center justify-center text-2xl bg-gray-300 dark:bg-[#333] hover:bg-lightColor hover:text-white dark:hover:bg-darkColor dark:hover:text-black transition duration-300 m-2 rounded-full">
          <a href="https://twitter.com/ya23122002" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <div className="w-[40px] h-[40px] flex items-center justify-center text-2xl bg-gray-300 dark:bg-[#333] hover:bg-lightColor hover:text-white dark:hover:bg-darkColor dark:hover:text-black transition duration-300 m-2 rounded-full">
          <a href="https://wa.me/+201069036485" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
        <div className="w-[40px] h-[40px] flex items-center justify-center text-2xl bg-gray-300 dark:bg-[#333] hover:bg-lightColor hover:text-white dark:hover:bg-darkColor dark:hover:text-black transition duration-300 m-2 rounded-full">
          <a href="https://www.instagram.com/youssef1125/" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <div className="w-[40px] h-[40px] flex items-center justify-center text-2xl bg-gray-300 dark:bg-[#333] hover:bg-lightColor hover:text-white dark:hover:bg-darkColor dark:hover:text-black transition duration-300 m-2 rounded-full">
          <a
            href="https://www.linkedin.com/in/youssef-ahmed-b7471224b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={formVariants}
        className="sm:absolute mobile:m-2 tablet:bottom-4 tablet:right-4 bottom-8 right-8 font-bold"
      >
        <p>
          &copy; 2023{" "}
          <a
            href="https://joe-official.vercel.app"
            target="_blank"
            className="text-lightColor dark:text-darkColor"
          >
            Youssef
          </a>
        </p>
        <p>All Rights Reserved</p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
