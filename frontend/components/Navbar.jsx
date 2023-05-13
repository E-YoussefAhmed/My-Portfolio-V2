import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import { navbarVariants, navMenuVariants } from "../utils/motion";

const links = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/works", title: "Works" },
  { link: "/skills", title: "Skills" },
  { link: "/testimonials", title: "Testimonials" },
  { link: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <motion.div
      variants={navbarVariants}
      initial="hide"
      animate="show"
      className="flex justify-between py-4 px-8 border-b dark:border-darkColor border-black shadow-md dark:shadow-darkColor"
    >
      <Link
        href="/"
        className="sm:text-5xl text-4xl dark:text-darkColor text-lightColor font-bold flex items-center cursor-pointer"
      >
        JOE
      </Link>
      <ul className=" dark:text-white font-semibold lgTablet:text-sm text-md md:flex hidden flex-1 justify-center items-center">
        {links.map((link) => (
          <NavLink
            key={link.title}
            title={link.title}
            link={link.link}
            path={router.asPath}
          />
        ))}
      </ul>
      <div className="hidden md:flex items-center">
        {mounted &&
          (currentTheme === "dark" ? (
            <FaRegMoon
              className="text-4xl text-white hover:text-darkColor transition duration-300 cursor-pointer"
              onClick={changeTheme}
            />
          ) : (
            <FaSun
              className="text-4xl text-black hover:text-darkColor transition duration-300 cursor-pointer"
              onClick={changeTheme}
            />
          ))}
      </div>
      <div className="flex md:hidden items-center justify-center bg-lightColor dark:bg-darkColor hover:bg-lightColor/70 dark:hover:bg-darkColor/70 w-[40px] h-[4opx] rounded-full">
        <HiMenuAlt4
          className="text-4xl text-white "
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && (
        <motion.div
          variants={navMenuVariants}
          className="md:hidden z-50 fixed bg-gray-300 dark:bg-[#333] p-4 top-0 right-0 bottom-0 w-8/12 flex flex-col items-start justify-start"
        >
          <HiX
            className="self-end my-2 mx-4 text-4xl text-lightColor dark:text-darkColor"
            onClick={() => setShowMenu(false)}
          />
          {mounted &&
            (currentTheme === "dark" ? (
              <FaRegMoon
                className="text-4xl mx-4 my-8 text-white hover:text-darkColor transition duration-300 cursor-pointer"
                onClick={changeTheme}
              />
            ) : (
              <FaSun
                className="text-4xl mx-4 my-8 text-black hover:text-darkColor transition duration-300 cursor-pointer"
                onClick={changeTheme}
              />
            ))}
          <ul>
            <li className={`${
                    `/${item}` === router.asPath
                      ? "dark:text-darkColor text-lightColor"
                      : ""
                  } uppercase mx-4 my-8 text-base font-medium hover:text-lightColor dark:hover:text-darkColor`}>
              <Link href="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            {["about", "works", "skills", "testimonials", "contact"].map(
              (item) => (
                <li
                  key={item}
                  className={`${
                    `/${item}` === router.asPath
                      ? "dark:text-darkColor text-lightColor"
                      : ""
                  } uppercase mx-4 my-8 text-base font-medium hover:text-lightColor dark:hover:text-darkColor`}
                >
                  <Link href={`/${item}`} onClick={() => setShowMenu(false)}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
