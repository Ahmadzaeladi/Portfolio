import { motion } from "framer-motion";
import { Card, CardBody, Progress, Tabs, Tab } from "@heroui/react";
import { MapPin, Code } from "lucide-react";
import { personalInfo, skillCategories } from "@/constants/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import { ICON_MAP, LEVEL_PERCENT, LEVEL_COLOR } from "./HomeAbout.constants";
import useHomeAbout from "./useHomeAbout";
import profilePhoto from "../../../../../images/fotoAhmad2.png";

export default function HomeAbout() {
  const { activeSkillTab, setActiveSkillTab } = useHomeAbout();

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About"
          accent="Me & Technical Journey"
          description="A dedicated Full-Stack Web Developer focused on building modern, reliable, and high-performance web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center items-end"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-300/40 blur-3xl sm:h-80 sm:w-80"
            />
            <img
              src={profilePhoto}
              alt={`${personalInfo.name} with a laptop`}
              className="relative z-10 w-full max-w-lg max-h-[620px] object-contain object-bottom"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="py-4 lg:py-8">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-medium text-default-500 uppercase tracking-wider mt-1">
                    {personalInfo.role}
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                  Architecting Scalable Web Applications & End-to-End Solutions
                </h3>

                <div className="space-y-4 text-default-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hello! I'm{" "}
                    <strong className="text-foreground">Ahmad Zaeladi</strong>,
                    an Informatics Engineering student at Universitas Pamulang
                    with deep passion for modern full-stack web engineering.
                  </p>
                  <p>
                    My technical foundation began in vocational high school,
                    followed by two valuable years working in the fast-paced F&B
                    industry as a barista. That operational background instilled
                    in me rigorous discipline, procedural accuracy, and extreme
                    attention to detail—qualities that directly power how I
                    design database models, structure REST APIs, write clean
                    React code, and handle edge cases.
                  </p>
                  <p>
                    Today, I focus on full-stack web development: building
                    responsive frontends with React, Next.js, and Tailwind CSS,
                    paired with robust backend services in Node.js and Express.
                    I prioritize clean component architecture, API security, and
                    fast loading performance.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-divider flex flex-wrap gap-5 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl  text-black flex items-center justify-center">
                      <MapPin size={30} />
                    </div>
                    <div>
                      <div className="text-xs text-default-500">Location</div>
                      <div className="text-sm font-semibold text-foreground">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Skills card with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Card
            isBlurred
            shadow="sm"
            classNames={{
              base: "bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl",
            }}
          >
            <CardBody className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Full-Stack Tech Stack & Tooling
                  </h3>
                  <p className="text-sm text-default-500 mt-1">
                    Technologies and frameworks I utilize to develop
                    production-ready web platforms
                  </p>
                </div>
              </div>

              <Tabs
                aria-label="Skill categories"
                selectedKey={activeSkillTab}
                onSelectionChange={(key) => setActiveSkillTab(String(key))}
                variant="light"
                radius="lg"
                classNames={{
                  tabList:
                    "glass-pill border border-white/70 p-1 gap-1 w-full sm:w-fit flex-wrap",
                  tab: "h-10 px-4 data-[hover-unselected=true]:opacity-100",
                  cursor: "shadow-md",
                  tabContent: "group-data-[selected=true]:text-green-600",
                  panel: "pt-7",
                }}
              >
                {skillCategories.map((cat, idx) => {
                  const CategoryIcon = ICON_MAP[cat.icon] || Code;
                  return (
                    <Tab
                      key={String(idx)}
                      title={
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                          <CategoryIcon size={15} />
                          <span>{cat.category}</span>
                        </div>
                      }
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                        {cat.skills.map((skill, index) => {
                          const SkillIcon = ICON_MAP[skill.icon] || Code;
                          const percent = LEVEL_PERCENT[skill.level] || 60;
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                              }}
                              className="bg-white/70 backdrop-blur-sm border border-white/70 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-green-200 hover:bg-white transition-all duration-200 text-center flex flex-col items-center group"
                            >
                              <div className="w-11 h-11 rounded-xl bg-green-50 group-hover:bg-green-500 group-hover:text-white text-green-600 flex items-center justify-center mb-3 transition-colors duration-200">
                                <SkillIcon size={19} />
                              </div>
                              <span className="font-bold text-foreground text-sm leading-tight group-hover:text-green-600 transition-colors">
                                {skill.name}
                              </span>

                              <Progress
                                aria-label={`${skill.name} proficiency`}
                                value={percent}
                                size="sm"
                                color={LEVEL_COLOR[skill.level] || "green"}
                                className="mt-3 w-full"
                                classNames={{ track: "bg-default-100" }}
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </Tab>
                  );
                })}
              </Tabs>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
