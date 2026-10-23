import { useState } from 'react';

export type TimelineTab = 'education' | 'experience';

export default function useHomeTimeline() {
  const [activeTab, setActiveTab] = useState<TimelineTab>('education');

  return {
    activeTab,
    setActiveTab,
  };
}
