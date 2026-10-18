import React, { Fragment } from 'react';
import PageHead from '@/components/commons/PageHead';
import LandingPageLayoutNavbar from './LandingPageLayoutNavbar';
import LandingPageLayoutFooter from './LandingPageLayoutFooter';

export default function LandingPageLayout({ title = 'Portfolio', children }) {
  return (
    <Fragment>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      <main className="relative z-10">{children}</main>
      <LandingPageLayoutFooter />
    </Fragment>
  );
}
