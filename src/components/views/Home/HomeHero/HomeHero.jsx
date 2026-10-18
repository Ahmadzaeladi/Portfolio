import React from "react";
import { motion } from "framer-motion";
import {
  Button,
  Chip,
  Card,
  CardBody,
  Avatar,
  Link as HeroLink,
} from "@heroui/react";
import {
  ArrowRight,
  Download,
  Code2,
  Layers,
  Server,
  Database,
  Globe,
} from "lucide-react";
import { personalInfo } from "@/constants/portfolioData";
import { HOME_STATS, PROFILE_STACK } from "../Home.constants";
import HomeTechMarquee from "../HomeTechMarquee";

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
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
                color="primary"
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
                color="primary"
                variant="bordered"
                size="lg"
                radius="lg"
                className="font-semibold px-7 border-primary/40 text-primary-600"
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
                startContent={<Download size={16} className="text-sky-500" />}
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Right: Interactive Glass Profile Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-r   to-indigo-400 rounded-3xl blur-lg opacity-40 animate-pulse-slow"></div>

              <Card
                isBlurred
                shadow="lg"
                classNames={{
                  base: "bg-white/60 border border-white/70 backdrop-blur-2xl shadow-2xl shadow-sky-950/10 rounded-3xl",
                }}
              >
                <CardBody className="p-6 sm:p-7 overflow-visible">
                  {/* Card header */}
                  <div className="flex items-center justify-between pb-5 border-b border-divider/60">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={personalInfo.avatar}
                        name={personalInfo.name}
                        classNames={{
                          base: "w-14 h-14 rounded-2xl border-2 border-white shadow-md shadow-sky-500/10",
                        }}
                        alt={personalInfo.name}
                      />
                      <div>
                        <h3 className="font-bold text-foreground text-base leading-tight">
                          {personalInfo.name}
                        </h3>
                        <p className="text-xs font-medium text-default-500">
                          Informatics Eng. @ UNPAM
                        </p>
                      </div>
                    </div>
                    <Chip
                      size="sm"
                      variant="flat"
                      color="primary"
                      className="text-[11px] font-semibold"
                    >
                      Full-Stack
                    </Chip>
                  </div>

                  {/* Tech stack chips */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold text-default-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      <span>Full-Stack Technologies</span>
                      <Code2 size={14} className="text-sky-500" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {PROFILE_STACK.map((stack) => (
                        <Chip
                          key={stack}
                          size="sm"
                          variant="bordered"
                          className="bg-white/70 backdrop-blur-sm border-white/70 text-default-700 text-xs font-medium shadow-sm hover:border-sky-300 hover:text-primary-600 transition-colors"
                        >
                          {stack}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Architecture tiles */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-50/80 to-blue-50/80 border border-white/70">
                      <div className="flex items-center gap-2 text-primary-600 mb-1">
                        <Layers size={15} />
                        <span className="text-xs font-semibold">Frontend</span>
                      </div>
                      <div className="text-base font-extrabold text-foreground">
                        React & Next.js
                      </div>
                      <div className="text-[11px] text-default-500">
                        Tailwind Glass UI
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-teal-50/80 to-emerald-50/80 border border-white/70">
                      <div className="flex items-center gap-2 text-teal-600 mb-1">
                        <Server size={15} />
                        <span className="text-xs font-semibold">Backend</span>
                      </div>
                      <div className="text-base font-extrabold text-foreground">
                        Node & Express
                      </div>
                      <div className="text-[11px] text-default-500">
                        RESTful API Architecture
                      </div>
                    </div>
                  </div>

                  {/* Terminal bar */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-900 text-slate-200 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">$</span>
                      <span className="text-slate-300">
                        npm run build --fullstack
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-sans font-semibold">
                      Success
                    </span>
                  </div>
                </CardBody>
              </Card>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden sm:flex absolute -bottom-5 -left-6 glass-strong rounded-2xl p-3 items-center gap-2.5"
              >
                <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
                  <Database size={16} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    Full-Stack Data
                  </div>
                  <div className="text-[10px] text-default-500">
                    APIs & Data Modeling
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden sm:flex absolute -top-5 -right-4 glass-strong rounded-2xl p-3 items-center gap-2.5"
              >
                <div className="p-2 rounded-xl bg-sky-100 text-sky-600">
                  <Globe size={16} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    Modern Architecture
                  </div>
                  <div className="text-[10px] text-default-500">
                    Fast, Responsive & Scalable
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech marquee strip */}
        <HomeTechMarquee />
      </div>
    </section>
  );
}
