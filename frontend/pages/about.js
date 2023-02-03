import React from "react";
import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";
import { aboutVariants, cardVariants } from "../utils/motion";
import PaginationLink from "../components/PaginationLink";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/about`);
  const data = await res.json();
  const { about } = await data;

  return {
    props: { about },
    revalidate: 10,
  };
};

const About = ({ about }) => {
  return (
    <motion.section
      variants={aboutVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden py-4 mobile:px-8 mobile:h-[calc(100vh-73px)] mobile:text-center px-16 w-screen h-[calc(100vh-85px)] flex flex-col items-center justify-evenly"
    >
      <h1 className="text-5xl mobile:text-2xl tablet:text-4xl font-bold">
        I Know That{" "}
        <span className="dark:text-darkColor text-lightColor">
          Good Development
        </span>{" "}
        Means{" "}
        <span className="dark:text-darkColor text-lightColor">
          {" "}
          Good Business
        </span>
      </h1>
      <div className="flex mobile:p-3 overflow-x-auto dark:scrollbar-track-gray-300/20 scrollbar-track-gray-600/30  dark:scrollbar-thumb-darkColor scrollbar-thumb-lightColor scrollbar-thin md:scrollbar overflow-y-hidden max-w-full">
        {about?.map((el, i) => (
          <motion.div variants={cardVariants} key={el._id}>
            <AboutCard {...el} />
          </motion.div>
        ))}
      </div>
      <PaginationLink
        link1={"/"}
        link2={"/works"}
        title1={"Home"}
        title2={"Works"}
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

export default About;
