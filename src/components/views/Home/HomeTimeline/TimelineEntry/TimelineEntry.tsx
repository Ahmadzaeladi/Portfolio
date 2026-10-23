import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Calendar, CheckCircle2, Terminal } from "lucide-react";
import type {
  EducationEntry,
  ExperienceEntry,
} from "@/constants/portfolioData";

type TimelineEntryProps =
  | { entry: EducationEntry; index: number; kind: "education" }
  | { entry: ExperienceEntry; index: number; kind: "experience" };

export default function TimelineEntry({
  entry,
  index,
  kind,
}: TimelineEntryProps) {
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
            base: "bg-white/70 glass rounded-2xl border border-white/70 backdrop-blur-2xl hover:border-green-200 transition-all duration-300",
            body: "p-5 sm:p-6",
          }}
        >
          <CardBody>
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-green-700 sm:hidden">
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
                    <Terminal size={13} className="text-green-600" />
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
                          className="mt-0.5 shrink-0 text-green-500"
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
          <span className="text-lg font-extrabold leading-tight text-green-700 lg:text-xl">
            {entry.period}
          </span>
        </div>
      </div>

      <div className="z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center justify-self-center rounded-xl border border-white/80 bg-gradient-to-br from-green-500 to-green-600 text-lg font-extrabold text-white shadow-lg shadow-green-500/20 sm:col-start-2 sm:h-14 sm:w-14 sm:text-xl">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}
