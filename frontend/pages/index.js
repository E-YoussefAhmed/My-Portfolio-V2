import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  paginationVariants,
  homeVariants,
  circleVariants,
} from "../utils/motion";

export default function Home() {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Freelancer"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <>
      <motion.section
        variants={homeVariants}
        initial="hide"
        animate="show"
        exit="exit"
        className="overflow-hidden relative mobile:text-2xl text-4xl font-bold w-screen tablet:h-[calc(100vh-73px)] h-[calc(100vh-85px)] flex flex-col items-center justify-center"
      >
        <p className="dark:text-white mb-2">Hello, I am Youssef 👋</p>
        <span className="dark:text-darkColor text-lightColor block">
          <span className="dark:text-white">I am a </span>
          {text}
          <Cursor cursorColor="#6F1AB6" />
        </span>
        <motion.div
          variants={circleVariants}
          initial="hide"
          animate="show"
          className="absolute flex justify-center items-center"
        >
          <div className="absolute border border-black/50 dark:border-[#333] mobile:w-[250px] mobile:h-[250px]  w-[500px] h-[500px] rounded-full" />
          <div className="absolute border opacity-20 animate-pulse border-black/50 dark:border-[#333] mobile:w-[300px] mobile:h-[300px] w-[650px] h-[650px] rounded-full" />
          <div className="absolute border border-black/50 dark:border-[#333] mobile:w-[350px] mobile:h-[350px] w-[800px] h-[800px] rounded-full" />
        </motion.div>
        <div className="dark:text-white  absolute bottom-[70px]  w-full flex items-center justify-center ">
          <Link href="/about">
            <motion.span
              variants={paginationVariants}
              whileHover="hover"
              className="flex items-center uppercase transition-colors duration-300 hover:text-lightColor dark:hover:text-darkColor"
            >
              About{" "}
              <FaArrowCircleRight className="text-3xl mobile:text-lg tablet:text-2xl ml-2" />
            </motion.span>
          </Link>
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 mobile:text-xs  text-base font-bold">
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
    </>
  );
}
