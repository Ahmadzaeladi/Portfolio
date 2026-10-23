import { useMemo, useState } from 'react';
import type { SyntheticEvent } from 'react';
import { projectsData } from '@/constants/portfolioData';
import type { ProjectFilter } from './HomeProjects.constants';

export default function useHomeProjects() {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === filter);
  }, [filter]);

  const spotlight = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  const handleImgError = (
    event: SyntheticEvent<HTMLImageElement>,
    fallback: string
  ) => {
    const image = event.currentTarget;
    const container = image.parentElement;
    image.style.display = 'none';

    container?.classList.add(
      'bg-gradient-to-tr',
      fallback || 'from-sky-100',
      'to-indigo-100'
    );
  };

  return {
    filter,
    setFilter,
    filteredProjects,
    spotlight,
    gridProjects,
    handleImgError,
  };
}
