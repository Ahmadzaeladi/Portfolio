import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeTimeline from './HomeTimeline';
import HomeProjects from './HomeProjects';
import HomeContact from './HomeContact';

export default function Home() {
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
