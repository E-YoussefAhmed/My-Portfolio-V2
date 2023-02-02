import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const WorksCard = ({
  title,
  description,
  projectLink,
  codeLink,
  photo,
  tags,
}) => {
  return (
    <div className="work-card relative rounded-xl text-white mobile:w-[300px] mobile:h-[280px] w-[500px] h-[450px] dark:bg-[#333] overflow-hidden snap-center  ">
      <img src={photo} alt="work" className="object-cover" />
      <div className="card-info justify-evenly items-center p-4 opacity-0 absolute w-full h-full top-0 left-0 z-50 bg-[rgba(0,0,0,0.8)] transition duration-300 flex flex-col">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center justify-evenly w-full">
          <a
            // className="p-[25px] bg-[#111] rounded-full"
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={{ scale: [0.9, 0.7, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="w-[100px] h-[100px] rounded-full bg-[#111] flex items-center justify-center"
            >
              <AiFillEye className="w-1/2 h-1/2" />
            </motion.div>
          </a>
          <a
            // className="p-[25px] bg-[#111] rounded-full"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={{ scale: [0.9, 0.7, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="w-[100px] h-[100px] rounded-full bg-[#111] flex items-center justify-center"
            >
              <AiFillGithub className="w-1/2 h-1/2" />
            </motion.div>
          </a>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WorksCard;
