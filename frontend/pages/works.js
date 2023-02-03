import React, { useState } from "react";
import { motion } from "framer-motion";
import WorksCard from "../components/WorksCard";
import { worksVariants, cardVariants } from "../utils/motion";
import PaginationLink from "../components/PaginationLink";

const filters = [
  "All",
  "MERN Stack",
  "React",
  "Templates",
  "E-commerce",
  "Web Apps",
];

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/works`);
  const data = await res.json();
  const { works } = await data;

  return {
    props: { works },
    revalidate: 10,
  };
};

const Works = ({ works }) => {
  const [filter, setFilter] = useState("All");
  const [filteredWork, setFilteredWork] = useState(works);

  const handleFilterWorks = (item) => {
    setFilter(item);
    if (item === "All") {
      setFilteredWork(works);
    } else {
      setFilteredWork(works.filter((work) => work.tags.includes(item)));
    }
  };

  return (
    <motion.section
      variants={worksVariants}
      initial="hide"
      animate="show"
      exit="exit"
      className="overflow-hidden px-16 mobile:px-8 mobile:h-[calc(100vh-73px)] mobile:text-center w-screen h-[calc(100vh-85px)] flex flex-col items-center justify-evenly"
    >
      <h1 className="text-5xl mobile:text-2xl tablet:text-4xl font-bold">
        My Creative{" "}
        <span className="dark:text-darkColor text-lightColor">Portfolio</span>
      </h1>
      <div className="flex flex-wrap">
        {filters.map((el) => (
          <div
            key={el}
            className={`${
              filter === el
                ? "dark:bg-darkColor bg-lightColor text-white"
                : "dark:bg-[#333] bg-gray-300"
            } cursor-pointer mobile:text-xs mobile:m-1 mobile:p-2 m-2 py-2 px-4 rounded-lg hover:text-white dark:hover:bg-darkColor hover:bg-lightColor transition duration-300`}
            onClick={() => handleFilterWorks(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="flex max-w-full dark:scrollbar-track-gray-300/20 scrollbar-track-gray-600/30 dark:scrollbar-thumb-darkColor scrollbar-thumb-lightColor scrollbar-thin md:scrollbar overflow-x-auto overflow-y-hidden space-x-5 px-10 pb-8 lg:snap-x lg:snap-mandatory">
        {filteredWork?.map((work, i) => (
          <motion.div variants={cardVariants} key={work._id}>
            <WorksCard {...work} />
          </motion.div>
        ))}
      </div>
      <PaginationLink
        link1={"/about"}
        link2={"/skills"}
        title1={"About"}
        title2={"Skills"}
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

export default Works;
