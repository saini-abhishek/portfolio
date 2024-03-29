"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:font-bold
            "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl md:text-5xl md:mt-16 mt-32 mb-16 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS 3" x="-22vw" y="2vw" />
        <Skill name="HTML 5" x="-5vw" y="-8vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="React" x="0vw" y="12vw" />
        <Skill name="TypeScript" x="-24vw" y="-10vw" />
        <Skill name="AWS" x="15vw" y="-10vw" />
        <Skill name="Git" x="29vw" y="-5vw" />
        <Skill name="Strapi" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-23vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
