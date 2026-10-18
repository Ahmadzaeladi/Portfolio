import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Chip,
  Progress,
  Tabs,
  Tab,
  Avatar,
} from '@heroui/react';
import {
  Terminal,
  MapPin,
  CheckCircle,
  GraduationCap,
  Code,
} from 'lucide-react';
import { personalInfo, developerMilestones, skillCategories } from '@/constants/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { ICON_MAP, LEVEL_PERCENT, LEVEL_COLOR } from './HomeAbout.constants';
import useHomeAbout from './useHomeAbout';

export default function HomeAbout() {
  const { activeSkillTab, setActiveSkillTab } = useHomeAbout();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Terminal}
          eyebrow="Engineering Profile"
          title="About"
          accent="Me & Technical Journey"
          description="A dedicated Full-Stack Web Developer focused on building modern, reliable, and high-performance web applications."
        />

        {/* Bento grid: bio + milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-6">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <Card
              isBlurred
              shadow="sm"
              classNames={{
                base: 'bg-white/60 glass rounded-3xl h-full border border-white/70 backdrop-blur-2xl',
              }}
            >
              <CardBody className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={personalInfo.avatar}
                      name={personalInfo.name}
                      classNames={{
                        base: 'w-16 h-16 rounded-2xl border-2 border-white shadow-md shadow-sky-500/10',
                      }}
                      alt={personalInfo.name}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-medium text-default-500 uppercase tracking-wider">
                        {personalInfo.role}
                      </p>
                    </div>
                  </div>
                  <Chip
                    size="sm"
                    variant="flat"
                    color="primary"
                    startContent={<GraduationCap size={13} />}
                    className="text-[11px] font-semibold"
                  >
                    Full-Stack Engineering
                  </Chip>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                  Architecting Scalable Web Applications & End-to-End Solutions
                </h3>

                <div className="space-y-4 text-default-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hello! I'm <strong className="text-foreground">Ahmad Zaeladi</strong>, an Informatics Engineering student at Universitas Pamulang with deep passion for modern full-stack web engineering.
                  </p>
                  <p>
                    My technical foundation began in vocational high school, followed by two valuable years working in the fast-paced F&B industry as a barista. That operational background instilled in me rigorous discipline, procedural accuracy, and extreme attention to detail—qualities that directly power how I design database models, structure REST APIs, write clean React code, and handle edge cases.
                  </p>
                  <p>
                    Today, I focus on full-stack web development: building responsive frontends with React, Next.js, and Tailwind CSS, paired with robust backend services in Node.js and Express. I prioritize clean component architecture, API security, and fast loading performance.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-divider flex flex-wrap gap-5 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-default-500">Location</div>
                      <div className="text-sm font-semibold text-foreground">{personalInfo.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-default-500">Core Expertise</div>
                      <div className="text-sm font-semibold text-foreground">React, Node.js & Full-Stack Systems</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Milestones column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {developerMilestones.map((milestone) => {
              const MilestoneIcon = ICON_MAP[milestone.icon] || Code;
              return (
                <Card
                  key={milestone.id}
                  isBlurred
                  isHoverable
                  shadow="sm"
                  classNames={{
                    base: 'bg-white/60 glass rounded-2xl border border-white/70 backdrop-blur-2xl hover:border-sky-200 transition-all duration-300',
                    body: 'p-5',
                  }}
                >
                  <CardBody>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${milestone.color} flex items-center justify-center text-white shadow-md shrink-0`}
                      >
                        <MilestoneIcon size={22} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">
                          {milestone.number}
                        </div>
                        <div className="text-sm font-semibold text-default-700">{milestone.label}</div>
                        <div className="text-xs text-default-500 mt-0.5 leading-snug">
                          {milestone.description}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
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
              base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl',
            }}
          >
            <CardBody className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Full-Stack Tech Stack & Tooling
                  </h3>
                  <p className="text-sm text-default-500 mt-1">
                    Technologies and frameworks I utilize to develop production-ready web platforms
                  </p>
                </div>
              </div>

              <Tabs
                aria-label="Skill categories"
                selectedKey={activeSkillTab}
                onSelectionChange={setActiveSkillTab}
                variant="light"
                radius="lg"
                classNames={{
                  tabList: 'glass-pill border border-white/70 p-1 gap-1 w-full sm:w-fit flex-wrap',
                  tab: 'h-10 px-4 data-[hover-unselected=true]:opacity-100',
                  cursor: 'shadow-md',
                  tabContent: 'group-data-[selected=true]:text-primary-600',
                  panel: 'pt-7',
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
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="bg-white/70 backdrop-blur-sm border border-white/70 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-200 hover:bg-white transition-all duration-200 text-center flex flex-col items-center group"
                            >
                              <div className="w-11 h-11 rounded-xl bg-primary-50 group-hover:bg-primary group-hover:text-white text-primary-600 flex items-center justify-center mb-3 transition-colors duration-200">
                                <SkillIcon size={19} />
                              </div>
                              <span className="font-bold text-foreground text-sm leading-tight group-hover:text-primary-600 transition-colors">
                                {skill.name}
                              </span>
                              <Chip
                                size="sm"
                                variant="flat"
                                color={LEVEL_COLOR[skill.level] || 'primary'}
                                className="mt-2 text-[10px] font-semibold h-6"
                              >
                                {skill.level}
                              </Chip>
                              <Progress
                                aria-label={`${skill.name} proficiency`}
                                value={percent}
                                size="sm"
                                color={LEVEL_COLOR[skill.level] || 'primary'}
                                className="mt-3 w-full"
                                classNames={{ track: 'bg-default-100' }}
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
