import { useState } from 'react';

export default function useHomeAbout() {
  const [activeSkillTab, setActiveSkillTab] = useState('0');

  return {
    activeSkillTab,
    setActiveSkillTab,
  };
}
