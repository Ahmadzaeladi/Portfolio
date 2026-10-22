import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Chip, Tabs, Tab } from "@heroui/react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Terminal,
} from "lucide-react";
import { educationData, experienceData } from "@/constants/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import useHomeTimeline from "./useHomeTimeline";

function TimelineEntry({ entry, index, kind }) {
  const isEducation = kind === "education";
  const isCardLeft = index % 2 === 1;
  const periodPlacement = isCardLeft
    ? "sm:col-start-3 sm:text-left"
    : "sm:col-start-1 sm:text-right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="relative grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-4 sm:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] sm:gap-x-5"
    >
      <div
        className={`col-start-2 row-start-1 sm:row-start-1 ${
          isCardLeft ? "sm:col-start-1" : "sm:col-start-3"
        }`}
      >
        <Card
          isBlurred
          isHoverable
          shadow="sm"
          classNames={{
            base: "bg-white/70 glass rounded-2xl border border-white/70 backdrop-blur-2xl hover:border-sky-200 transition-all duration-300",
            body: "p-5 sm:p-6",
          }}
        >
          <CardBody>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Chip
                size="sm"
                variant="flat"
                className="bg-sky-100 text-[11px] font-bold uppercase tracking-wider text-sky-700"
              >
                {isEducation ? entry.badge : entry.type}
              </Chip>
              {isEducation && (
                <Chip
                  size="sm"
                  variant="flat"
                  className="bg-default-100 text-[11px] font-semibold text-default-600"
                >
                  {entry.status}
                </Chip>
              )}
            </div>

            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-sky-700 sm:hidden">
              <Calendar size={13} />
              <span>{entry.period}</span>
            </p>

            <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">
              {isEducation ? entry.institution : entry.role}
            </h3>

            {isEducation ? (
              <div className="mt-1 text-sm font-semibold text-default-600">
                {entry.degree}{" "}
                <span className="font-normal text-default-500">
                  — {entry.major}
                </span>
              </div>
            ) : (
              <>
                <div className="mt-1 text-sm font-semibold text-default-600">
                  {entry.company}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-default-600">
                  {entry.description}
                </p>
                <div className="mt-4 border-t border-divider pt-4">
                  <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-default-400">
                    <Terminal size={13} className="text-sky-600" />
                    <span>Responsibilities & Highlights</span>
                  </div>
                  <ul className="space-y-2">
                    {entry.achievements.map((item, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2 text-xs leading-relaxed text-default-600 sm:text-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-sky-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </CardBody>
        </Card>
      </div>

      <div
        className={`hidden self-center sm:row-start-1 sm:block ${
          isCardLeft ? "sm:col-start-3" : "sm:col-start-1"
        } ${periodPlacement}`}
      >
        <div className="inline-flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-default-400">
            {isEducation ? "Education" : "Experience"}
          </span>
          <span className="text-lg font-extrabold leading-tight text-sky-700 lg:text-xl">
            {entry.period}
          </span>
        </div>
      </div>

      <div className="z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center justify-self-center rounded-xl border border-white/80 bg-gradient-to-br from-sky-500 to-indigo-600 text-lg font-extrabold text-white shadow-lg shadow-sky-500/20 sm:col-start-2 sm:h-14 sm:w-14 sm:text-xl">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

function TimelineList({ entries, kind }) {
  const chronologicalEntries = [...entries].reverse();

  return (
    <div className="relative mx-auto max-w-5xl space-y-7 before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-blue-400 before:to-indigo-500 sm:space-y-9 sm:before:left-1/2 sm:before:-translate-x-1/2">
      {chronologicalEntries.map((entry, index) => (
        <TimelineEntry
          key={entry.id}
          entry={entry}
          index={index}
          kind={kind}
        />
      ))}
    </div>
  );
}

export default function HomeTimeline() {
  const { activeTab, setActiveTab } = useHomeTimeline();

  return (
    <section
      id="timeline"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Education &"
          accent="Experience"
          description="A comprehensive overview of academic milestones, hands-on projects, and professional experience."
        >
          <div className="mt-8 flex justify-center">
            <Tabs
              aria-label="Education and experience switcher"
              selectedKey={activeTab}
              onSelectionChange={setActiveTab}
              radius="lg"
              classNames={{
                tabList: "glass-pill border border-white/70 p-1.5 gap-1",
                tab: "h-11 px-6",
                cursor:
                  "bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25",
                tabContent:
                  "text-default-600 group-data-[selected=true]:text-white font-semibold",
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

        <div className="mt-10">
          {activeTab === "education" ? (
            <TimelineList entries={educationData} kind="education" />
          ) : (
            <TimelineList entries={experienceData} kind="experience" />
          )}
        </div>
      </div>
    </section>
  );
}
