import { Tabs, Tab } from "@heroui/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { educationData, experienceData } from "@/constants/portfolioData";
import type {
  EducationEntry,
  ExperienceEntry,
} from "@/constants/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import useHomeTimeline from "./useHomeTimeline";
import TimelineEntry from "./TimelineEntry/TimelineEntry";

type TimelineListProps =
  | { entries: EducationEntry[]; kind: "education" }
  | { entries: ExperienceEntry[]; kind: "experience" };

function TimelineList(props: TimelineListProps) {
  const entryRows =
    props.kind === "education"
      ? [...props.entries].reverse().map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            index={index}
            kind="education"
          />
        ))
      : [...props.entries].reverse().map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            index={index}
            kind="experience"
          />
        ));

  return (
    <div className="relative mx-auto max-w-5xl space-y-7 before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-green-400 before:via-green-400 before:to-green-500 sm:space-y-9 sm:before:left-1/2 sm:before:-translate-x-1/2">
      {entryRows}
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
              onSelectionChange={(key) => {
                const selectedTab = String(key);
                if (
                  selectedTab === "education" ||
                  selectedTab === "experience"
                ) {
                  setActiveTab(selectedTab);
                }
              }}
              radius="lg"
              classNames={{
                tabList: "glass-pill border border-white/70 p-1.5 gap-1",
                tab: "h-11 px-6",
                cursor:
                  "bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/25",
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
