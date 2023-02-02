import Link from "next/link";
import React from "react";

const NavLink = ({ link, path, title }) => {
  return (
    <li
      className={`my-2 mx-4 uppercase hover:text-darkColor transition duration-300 flex flex-col items-center dot ${
        link === path ? "text-darkColor" : ""
      }`}
    >
      <div className="w-2 h-2 rounded-full bg-transparent mb-1" />
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavLink;
