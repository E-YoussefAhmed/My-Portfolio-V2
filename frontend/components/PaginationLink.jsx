import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { paginationVariants } from "../utils/motion";

const PaginationLink = ({ link1, link2, title1, title2 }) => {
  const router = useRouter();

  return (
    <div className="justify-evenly dark:text-white w-full flex items-center ">
      <Link href={link1}>
        <motion.span
          variants={paginationVariants}
          whileHover="hover"
          className="flex items-center transition-colors duration-300 hover:text-lightColor dark:hover:text-darkColor"
        >
          <FaArrowCircleLeft className="text-3xl mobile:text-lg tablet:text-2xl mr-2" />{" "}
          <span
            className={`text-4xl ${
              router.asPath === "/skills" ? "mobile:text-lg" : "mobile:text-2xl"
            } tablet:text-3xl font-bold uppercase`}
          >
            {title1}
          </span>
        </motion.span>
      </Link>
      <Link href={link2}>
        <motion.span
          variants={paginationVariants}
          whileHover="hover"
          className="flex items-center transition-colors duration-300 hover:text-lightColor dark:hover:text-darkColor"
        >
          <span
            className={`text-4xl ${
              router.asPath === "/skills" ? "mobile:text-lg" : "mobile:text-2xl"
            } tablet:text-3xl font-bold uppercase`}
          >
            {title2}
          </span>{" "}
          <FaArrowCircleRight className="text-3xl mobile:text-lg tablet:text-2xl ml-2" />
        </motion.span>
      </Link>
    </div>
  );
};

export default PaginationLink;
