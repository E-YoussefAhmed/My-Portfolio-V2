import React from "react";

const AboutCard = ({ title, description, photo }) => {
  return (
    <div className="w-[190px] mobile:w-[150px] mobile:m-2 m-8 transform hover:scale-110 transition duration-500">
      <img
        className="object-cover h-[170px] mobile:h-[130px] w-full rounded-2xl"
        src={photo}
        alt="about"
      />
      <h2 className="mt-5 mobile:p-0 text-base font-extrabold">{title}</h2>
      <p className="mt-3 text-xs leading-normal dark:text-gray-400 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
