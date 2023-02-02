import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { testimonialsVariants } from "../utils/motion";
import PaginationLink from "../components/PaginationLink";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/testimonials`);
  const { testimonials } = await res.json();

  return {
    props: { testimonials },
    revalidate: 10,
  };
};

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const test = testimonials[currentIndex];

  return (
    <motion.section
      variants={testimonialsVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden px-16 mobile:px-8 mobile:h-[calc(100vh-73px)] mobile:text-center w-screen h-[calc(100vh-85px)] flex flex-col items-center justify-evenly"
    >
      <h1 className="text-5xl mobile:text-2xl tablet:text-4xl font-bold">
        It was a great{" "}
        <span className="dark:text-darkColor text-lightColor">Honor</span> to
        work with you
      </h1>
      <div className="lg:w-[800px] lg:h-[400px] md:w-[600px] md:h-[300px] bg-gray-300 dark:bg-[#333] rounded-3xl flex flex-col md:flex-row mobile:p-4 p-8">
        <img
          src={test.photo}
          alt={test.name}
          className="w-[100px] h-[100px] mobile:w-[60px] mobile:h-[60px] rounded-full"
        />
        <div className="flex flex-col px-8 mobile:px-4 mobile:mt-2 mobile:text-left items-start justify-around">
          <p className="text-xl mobile:text-base">{test.feedback}</p>
          <div className="flex flex-col mobile:mt-2">
            <p className="text-2xl mobile:text-xl dark:text-darkColor text-lightColor font-bold">
              {test.name}
            </p>
            <p className="text-sm">{test.company}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-14 h-14 rounded-full mx-4 bg-gray-300 hover:bg-lightColor dark:bg-[#333] dark:hover:bg-darkColor transition duration-300 flex items-center justify-center">
          <HiChevronLeft
            className="text-4xl hover:text-white dark:hover:text-[#111] transition duration-300 cursor-pointer"
            onClick={() =>
              currentIndex === 0
                ? setCurrentIndex(testimonials.length - 1)
                : setCurrentIndex(currentIndex - 1)
            }
          />
        </div>
        <div className="w-14 h-14 rounded-full mx-4 bg-gray-300 hover:bg-lightColor dark:bg-[#333] dark:hover:bg-darkColor transition duration-300 flex items-center justify-center">
          <HiChevronRight
            className="text-4xl hover:text-white dark:hover:text-[#111] transition duration-300 cursor-pointer"
            onClick={() =>
              currentIndex === testimonials.length - 1
                ? setCurrentIndex(0)
                : setCurrentIndex(currentIndex + 1)
            }
          />
        </div>
      </div>
      <PaginationLink
        link1={"/skills"}
        link2={"/contact"}
        title1={"Skills"}
        title2={"Contact"}
      />
      <div className="notPC:hidden absolute bottom-8 right-8 text-base font-bold">
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
      </div>
    </motion.section>
  );
};

export default Testimonials;
