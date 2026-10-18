import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Chip,
  Tabs,
  Tab,
} from '@heroui/react';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { educationData, experienceData } from '@/constants/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import useHomeTimeline from './useHomeTimeline';

function EducationTimeline() {
  return (
    <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-blue-300 before:to-indigo-300">
      {educationData.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -left-6 sm:-left-10 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-primary-500 shadow-md group-hover:scale-125 group-hover:border-primary-600 transition-all duration-200 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          </div>

          <Card
            isBlurred
            isHoverable
            shadow="sm"
            classNames={{
              base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl hover:border-sky-200 transition-all duration-300',
              body: 'p-6 sm:p-7',
            }}
          >
            <CardBody>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip
                    size="sm"
                    variant="flat"
                    color="primary"
                    className="text-[11px] font-bold uppercase tracking-wider"
                  >
                    {edu.badge}
                  </Chip>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="text-[11px] font-semibold bg-default-100 text-default-600"
                  >
                    {edu.status}
                  </Chip>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-default-500">
                  <Calendar size={14} className="text-sky-500" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{edu.institution}</h3>
              <div className="text-sm sm:text-base font-semibold text-primary-600 mt-1">
                {edu.degree} — <span className="text-default-700">{edu.major}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 items-center text-xs text-default-600">
                <span className="flex items-center gap-1.5 font-semibold px-3 py-1 bg-white/80 border border-divider rounded-lg shadow-sm">
                  <MapPin size={14} className="text-sky-500" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-divider rounded-lg shadow-sm">
                  <Award size={14} className="text-amber-500" />
                  {edu.degree}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-divider">
                <div className="text-xs font-bold uppercase tracking-wider text-default-400 mb-3 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-sky-500" />
                  <span>Key Milestones & Academic Highlights</span>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-default-600 leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-indigo-400 before:via-indigo-300 before:to-purple-300">
      {experienceData.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -left-6 sm:-left-10 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-secondary-500 shadow-md group-hover:scale-125 group-hover:border-secondary-600 transition-all duration-200 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
          </div>

          <Card
            isBlurred
            isHoverable
            shadow="sm"
            classNames={{
              base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl hover:border-indigo-200 transition-all duration-300',
              body: 'p-6 sm:p-7',
            }}
          >
            <CardBody>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <Chip
                  size="sm"
                  variant="flat"
                  color="secondary"
                  className="text-[11px] font-bold uppercase tracking-wider self-start"
                >
                  {exp.type}
                </Chip>
                <div className="flex items-center gap-1.5 text-xs font-medium text-default-500">
                  <Calendar size={14} className="text-indigo-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
              <div className="text-sm font-semibold text-default-600 mt-1">{exp.company}</div>

              <p className="mt-3 text-sm text-default-600 leading-relaxed">{exp.description}</p>

              <div className="mt-5 pt-4 border-t border-divider">
                <div className="text-xs font-bold uppercase tracking-wider text-default-400 mb-3 flex items-center gap-1.5">
                  <Terminal size={14} className="text-indigo-500" />
                  <span>Core Responsibilities & Impact</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-default-600 leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default function HomeTimeline() {
  const { activeTab, setActiveTab } = useHomeTimeline();

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={GraduationCap}
          eyebrow="Credentials & Track Record"
          title="Education &"
          accent="Experience"
          description="A comprehensive overview of academic milestones, institutional honors, and professional career growth."
        >
          <div className="mt-8 flex justify-center">
            <Tabs
              aria-label="Education and experience switcher"
              selectedKey={activeTab}
              onSelectionChange={setActiveTab}
              radius="lg"
              classNames={{
                tabList: 'glass-pill border border-white/70 p-1.5 gap-1',
                tab: 'h-11 px-6',
                cursor: 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25',
                tabContent: 'text-default-600 group-data-[selected=true]:text-white font-semibold',
              }}
            >
              <Tab
                key="education"
                title={
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <GraduationCap size={16} />
                    <span>Academic Education</span>
                  </div>
                }
              />
              <Tab
                key="experience"
                title={
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Briefcase size={16} />
                    <span>Work & Experience</span>
                  </div>
                }
              />
            </Tabs>
          </div>
        </SectionHeader>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'education' ? <EducationTimeline /> : <ExperienceTimeline />}
        </div>
      </div>
    </section>
  );
}
