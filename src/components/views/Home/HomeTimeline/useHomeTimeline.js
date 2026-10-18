import { useState } from 'react';

export default function useHomeTimeline() {
  const [activeTab, setActiveTab] = useState('education');

  return {
    activeTab,
    setActiveTab,
  };
}
