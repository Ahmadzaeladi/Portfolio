import { useState, useMemo } from 'react';
import { projectsData } from '@/constants/portfolioData';

export default function useHomeProjects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === filter);
  }, [filter]);

  const spotlight = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  const handleImgError = (e, fallback) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add(
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
