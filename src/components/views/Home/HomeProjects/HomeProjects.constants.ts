import { Code2, Layers } from 'lucide-react';
import type { ProjectCategory } from '@/constants/portfolioData';

export const FILTERS = [
  { key: 'all', name: 'All Projects', icon: null },
  { key: 'web', name: 'Websites', icon: Code2 },
  { key: 'fullstack', name: 'Full-Stack Applications', icon: Layers },
] as const;

export type ProjectFilter = (typeof FILTERS)[number]['key'];

export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; color: 'primary' | 'secondary' }
> = {
  web: { label: 'Website', color: 'primary' },
  fullstack: { label: 'Full-Stack App', color: 'secondary' },
};
