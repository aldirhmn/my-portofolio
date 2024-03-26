"use client";

/* eslint-disable no-alert, no-console */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const initialText = `Hello! My name is Aldi Rahman Hidayat, and I am a dedicated Quality Assurance Engineer with over three years of experience in ensuring the highest quality of software products. Check out my projects and skills.`;

  const fullText = (
    <>
      <p>
        Hello! My name is [Your Name], and I am a dedicated Quality Assurance
        Engineer with over three years of experience in ensuring the highest
        quality of software products. Throughout my career, I've honed my skills
        in both manual and automated testing, specializing in tools such as
        Katalon, Selenium, Appium, and Robot Framework.
      </p>
      <br></br>
      <p>
        My technical proficiency extends to programming languages including
        Java, Groovy, Python, and JavaScript/TypeScript, allowing me to
        collaborate closely with development teams to identify, analyze, and
        resolve complex issues efficiently.
      </p>
      <br></br>
      <p>
        My passion for technology drives me to constantly explore new tools and
        methodologies, ensuring that my skills remain on the cutting edge of
        industry standards. I thrive in fast-paced environments, where I can put
        my problem-solving skills to the test and contribute to the continuous
        improvement of software development processes.
      </p>
      <br></br>
      <p>
        Beyond my technical expertise, I believe in the power of teamwork and
        communication. I've successfully worked with diverse teams and have
        always been proactive in sharing knowledge and insights to enhance
        project outcomes. My goal is to not only ensure the quality of products
        but also to foster a collaborative and innovative working environment.
      </p>
      <br></br>
      <p>
        In my free time, I enjoy keeping up with the latest technology trends,
        coding for personal projects, and sometimes venturing into the great
        outdoors for a hike. I'm always on the lookout for new learning
        opportunities and challenges that will allow me to grow both personally
        and professionally.
      </p>

      <p>
        I'm excited about the opportunity to bring my unique blend of skills and
        experience to a dynamic team, where I can contribute to creating
        impactful and high-quality software solutions.
      </p>
    </>
  );
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border boder-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">QA Automation Engineer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Automation Test
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)} // Assuming you have defined this animation
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {showFullText ? fullText : initialText}
        </motion.p>

        <motion.a
          onClick={() => setShowFullText(!showFullText)}
          variants={slideInFromLeft(1)} // Assuming you have defined this animation
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {showFullText ? "Show Less" : "Learn More!"}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(1)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
