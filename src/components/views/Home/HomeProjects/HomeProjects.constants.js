import { Code2, Server, Layout } from 'lucide-react';

export const FILTERS = [
  { key: 'all', name: 'All Projects', icon: null },
  { key: 'web', name: 'Web Applications', icon: Code2 },
  { key: 'backend', name: 'Full-Stack & Tools', icon: Server },
  { key: 'ui', name: 'UI Systems', icon: Layout },
];

export const CATEGORY_META = {
  web: { label: 'Web App', color: 'primary' },
  backend: { label: 'Full-Stack', color: 'secondary' },
  ui: { label: 'UI System', color: 'success' },
};
