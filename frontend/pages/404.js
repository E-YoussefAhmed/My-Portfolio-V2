import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { homeVariants, paginationVariants } from "../utils/motion";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <motion.section
      variants={homeVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden relative mobile:text-2xl text-4xl font-bold w-screen tablet:h-[calc(100vh-73px)] h-[calc(100vh-85px)] flex flex-col items-center justify-evenly"
    >
      <h1 className="dark:text-white mb-2">
        <span className="text-lightColor dark:text-darkColor">404</span> This
        page does Not Exist
      </h1>
      <p>about to redirect in few seconds</p>
      <div className="dark:text-white  w-full flex items-center justify-center ">
        <Link href="/">
          <motion.span
            variants={paginationVariants}
            whileHover="hover"
            className="flex items-center uppercase transition-colors duration-300 hover:text-lightColor dark:hover:text-darkColor"
          >
            Home{" "}
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
  );
};

export default NotFound;
