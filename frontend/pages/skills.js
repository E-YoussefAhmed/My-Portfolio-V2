import React from "react";
import { motion } from "framer-motion";
import {
  experienceVariants,
  skillsVariants,
  firstVariant,
  secondVariant,
} from "../utils/motion";
import PaginationLink from "../components/PaginationLink";

export const getStaticProps = async () => {
  const res1 = await fetch(`${process.env.BACKEND_API_URL}/skills`);
  const { skills } = await res1.json();

  const res2 = await fetch(`${process.env.BACKEND_API_URL}/experiences`);
  const { experiences } = await res2.json();

  return {
    props: { skills, experiences },
    revalidate: 10,
  };
};

const Skills = ({ skills, experiences }) => {
  return (
    <motion.section
      variants={skillsVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden px-16 mobile:px-8 mobile:h-[calc(100vh-73px)] mobile:text-center w-screen h-[calc(100vh-85px)] flex flex-col items-center justify-evenly"
    >
      <h1 className="text-5xl mobile:text-2xl tablet:text-4xl font-bold">
        Skills & Experience
      </h1>
      <div className="flex w-full mobile:flex-col justify-evenly">
        <div>
          <motion.div
            variants={firstVariant}
            className="grid gap-3 grid-cols-5"
          >
            {skills?.map((skill, i) => {
              if (i < 10) {
                return (
                  <div key={skill._id} className="flex flex-col items-center">
                    <div className="overflow-hidden mobile:w-[40px]  mobile:h-[40px] w-[70px] h-[70px] bg-gray-300 hover:bg-gray-400 dark:bg-[#333] dark:hover:bg-[#222] transition duration-300 rounded-full flex items-center justify-center">
                      <img
                        src={skill.photo}
                        alt="skill"
                        className="w-5/6 h-5/6 "
                      />
                    </div>
                    <p className="mt-1 mobile:hidden text-sm">{skill.title}</p>
                  </div>
                );
              }
            })}
          </motion.div>
          <motion.div
            variants={secondVariant}
            className="grid gap-3 grid-cols-5 mt-3"
          >
            {skills?.map((skill, i) => {
              if (!(i < 10)) {
                return (
                  <div key={skill._id} className="flex flex-col items-center">
                    <div className="overflow-hidden mobile:w-[40px]  mobile:h-[40px] w-[70px] h-[70px] bg-gray-300 hover:bg-gray-400 dark:bg-[#333] dark:hover:bg-[#222] transition duration-300 rounded-full flex items-center justify-center">
                      <img
                        src={skill.photo}
                        alt="skill"
                        className="w-4/6 h-4/6 "
                      />
                    </div>
                    <p className="mt-1 mobile:hidden text-sm">{skill.title}</p>
                  </div>
                );
              }
            })}
          </motion.div>
        </div>
        <motion.div
          variants={experienceVariants}
          className="flex flex-col mobile:mt-5 mobile:h-[80px] mobile:overflow-y-auto md:ml-2 lg:ml-0 dark:scrollbar-track-gray-300/20 scrollbar-track-gray-600/30  dark:scrollbar-thumb-darkColor scrollbar-thumb-lightColor scrollbar-thin md:scrollbar justify-start"
        >
          {experiences?.map((ex) => (
            <div key={ex._id}>
              <h1 className="dark:text-darkColor text-lightColor font-bold text-xl">
                {ex.year}
              </h1>
              <p className="tracking-wider">{ex.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <PaginationLink
        link1={"/works"}
        link2={"/testimonials"}
        title1={"Works"}
        title2={"Testimonials"}
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

export default Skills;
