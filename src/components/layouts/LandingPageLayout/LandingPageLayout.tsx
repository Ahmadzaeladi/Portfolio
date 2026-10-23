import type { PropsWithChildren } from 'react';
import PageHead from '@/components/commons/PageHead';
import LandingPageLayoutNavbar from './LandingPageLayoutNavbar';
import LandingPageLayoutFooter from './LandingPageLayoutFooter';

interface LandingPageLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function LandingPageLayout({
  title = 'Portfolio',
  children,
}: LandingPageLayoutProps) {
  return (
    <>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      <main className="relative z-10">{children}</main>
      <LandingPageLayoutFooter />
    </>
  );
}
