import React from 'react';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeTimeline from './HomeTimeline';
import HomeProjects from './HomeProjects';
import HomeContact from './HomeContact';
import useHome from './useHome';

export default function Home() {
  const { personalInfo } = useHome();

  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeAbout />
      <HomeTimeline />
      <HomeProjects />
      <HomeContact />
    </div>
  );
}
