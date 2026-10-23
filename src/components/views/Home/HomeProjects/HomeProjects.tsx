import { motion } from 'framer-motion';
import type { Key } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Button,
  Link as HeroLink,
  Tabs,
  Tab,
} from '@heroui/react';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData } from '@/constants/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { FILTERS, CATEGORY_META } from './HomeProjects.constants';
import useHomeProjects from './useHomeProjects';

export default function HomeProjects() {
  const {
    filter,
    setFilter,
    spotlight,
    gridProjects,
    handleImgError,
  } = useHomeProjects();

  const renderFilterTabs = (
    <div className="mt-8 flex justify-center">
      <Tabs
        aria-label="Project category filter"
        selectedKey={filter}
        onSelectionChange={(key: Key) => {
          const selectedFilter = FILTERS.find(
            (item) => item.key === String(key)
          );
          if (selectedFilter) setFilter(selectedFilter.key);
        }}
        radius="lg"
        classNames={{
          tabList: 'glass-pill border border-white/70 p-1.5 gap-1 flex-wrap',
          tab: 'h-10 px-4',
          cursor: 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25',
          tabContent: 'text-default-600 group-data-[selected=true]:text-white font-semibold',
        }}
      >
        {FILTERS.map(({ key, name, icon: FilterIcon }) => {
          const count =
            key === 'all'
              ? projectsData.length
              : projectsData.filter((p) => p.category === key).length;
          return (
            <Tab
              key={key}
              title={
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                  {FilterIcon && <FilterIcon size={15} />}
                  <span>{name}</span>
                  <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-black/10 group-data-[selected=true]:bg-white/25">
                    {count}
                  </span>
                </div>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Layers}
          eyebrow="Projects from GitHub"
          title="Selected"
          accent="Projects"
          description="A selection of projects from my GitHub repositories, with links to their source code and live websites where available."
        >
          {renderFilterTabs}
        </SectionHeader>

        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Spotlight project */}
          {spotlight && (
            <Card
              isBlurred
              shadow="sm"
              classNames={{
                base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl mb-8 overflow-hidden group',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div
                  className={`md:col-span-5 relative min-h-[260px] overflow-hidden ${
                    spotlight.image
                      ? 'bg-gradient-to-tr from-sky-100 to-indigo-100'
                      : `flex items-center justify-center bg-gradient-to-br ${spotlight.fallbackBg}`
                  }`}
                >
                  {spotlight.image ? (
                    <img
                      src={spotlight.image}
                      alt={spotlight.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => handleImgError(e, spotlight.fallbackBg)}
                    />
                  ) : (
                    <Layers
                      aria-hidden="true"
                      size={72}
                      strokeWidth={1.2}
                      className="text-slate-700/30"
                    />
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Chip
                      size="sm"
                      variant="solid"
                      color={CATEGORY_META[spotlight.category]?.color || 'primary'}
                      className="text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
                    >
                      {CATEGORY_META[spotlight.category]?.label}
                    </Chip>
                  </div>
                </div>

                <CardBody className="md:col-span-7 p-7 sm:p-9 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    {spotlight.title}
                  </h3>
                  <p className="mt-3 text-default-600 text-sm sm:text-base leading-relaxed">
                    {spotlight.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {spotlight.tags.map((tag) => (
                      <Chip
                        key={tag}
                        size="sm"
                        variant="flat"
                        className="bg-default-100 text-default-700 text-[11px] font-medium"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {spotlight.liveUrl && (
                      <Button
                        as={HeroLink}
                        href={spotlight.liveUrl}
                        target={spotlight.liveUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        color="primary"
                        variant="shadow"
                        radius="full"
                        className="font-semibold"
                        endContent={<ExternalLink size={15} />}
                      >
                        Live Demo
                      </Button>
                    )}
                    {spotlight.repositories.map((repository) => (
                      <Button
                        key={repository.url}
                        as={HeroLink}
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                        color="default"
                        variant="bordered"
                        radius="full"
                        className="font-semibold border-divider"
                        startContent={<Github size={15} />}
                      >
                        {repository.label}
                      </Button>
                    ))}
                  </div>
                </CardBody>
              </div>
            </Card>
          )}

          {/* Grid of remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card
                  isBlurred
                  isHoverable
                  shadow="sm"
                  classNames={{
                    base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full',
                  }}
                >
                  <div
                    className={`relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${
                      project.fallbackBg
                    }`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => handleImgError(e, project.fallbackBg)}
                      />
                    ) : (
                      <Layers
                        aria-hidden="true"
                        size={56}
                        strokeWidth={1.2}
                        className="text-slate-700/30"
                      />
                    )}
                    {project.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    )}

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <Chip
                        size="sm"
                        variant="solid"
                        color={CATEGORY_META[project.category]?.color || 'primary'}
                        className="text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
                      >
                        {CATEGORY_META[project.category]?.label}
                      </Chip>
                    </div>
                  </div>

                  <CardBody className="p-6 pb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-default-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          variant="flat"
                          className="bg-default-100 text-default-700 text-[11px] font-medium h-6"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>

                  <CardFooter className="px-6 py-4 pt-2 border-t border-divider flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <HeroLink
                          href={project.liveUrl}
                          target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          color="primary"
                          size="sm"
                          className="flex items-center gap-1.5 text-xs font-bold"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </HeroLink>
                      )}
                      {project.repositories.map((repository) => (
                        <HeroLink
                          key={repository.url}
                          href={repository.url}
                          target="_blank"
                          rel="noreferrer"
                          color="foreground"
                          size="sm"
                          className="flex items-center gap-1.5 text-xs font-semibold hover:text-primary"
                        >
                          <Github size={14} />
                          <span>{repository.label}</span>
                        </HeroLink>
                      ))}
                    </div>
                    <ArrowUpRight size={18} className="text-default-300 group-hover:text-primary-400 transition-colors" />
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
