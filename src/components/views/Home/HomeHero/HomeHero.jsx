import React from "react";
import { motion } from "framer-motion";
import { Button, Link as HeroLink } from "@heroui/react";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/constants/portfolioData";
import { HOME_STATS } from "../Home.constants";
import HomeTechMarquee from "../HomeTechMarquee";
import profilePhoto from "../../../../../images/fotoAhmad.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left: Headline & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.08]"
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <span className="block mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-default-600">
                Full-Stack{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                  Web Developer
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-default-600 leading-relaxed max-w-2xl"
            >
              {personalInfo.tagline}
              <span className="block mt-2 text-base text-default-500">
                Architecting end-to-end web platforms with React, Next.js,
                Node.js, and modern Tailwind CSS design systems.
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <Button
                as={HeroLink}
                href="#projects"
                color="success"
                variant="shadow"
                size="lg"
                radius="lg"
                className="font-semibold px-7"
                endContent={<ArrowRight size={16} />}
              >
                Explore Projects
              </Button>

              <Button
                as={HeroLink}
                href="#contact"
                color="success"
                variant="bordered"
                size="lg"
                radius="lg"
                className="font-semibold px-7 border-success/40 text-success-600"
              >
                Contact Me
              </Button>

              <Button
                as={HeroLink}
                href={personalInfo.resumeUrl}
                download="CV Ahmad Zaeladi.pdf"
                variant="light"
                color="default"
                size="lg"
                radius="lg"
                className="font-medium px-5 text-default-600"
                startContent={<Download size={16} className="text-green-500" />}
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-x-8 bottom-8 top-12 rounded-full" />
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="relative h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Tech marquee strip */}
        <HomeTechMarquee />
      </div>
    </section>
  );
}
