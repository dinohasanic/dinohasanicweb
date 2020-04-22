import React from 'react';

import PdfResumeFileButton from './PdfResumeButton';

const IntroSection = () => (
  <section className="section intro-section">
    <h1 className="main-header">Hi, I&#39;m Dino</h1>
    <h3 className="header-intro">
      I’m a
      {' '}
      <strong>full-stack developer</strong>
      {' '}
      based in the
      {' '}
      <strong>SF Bay Area</strong>
      . Using (mostly) React with a Node.js/GraphQL API backend, I build web
      and mobile apps. I’m also interested in creating VR/AR experiences —
      I think that’s where the future is going!
    </h3>
    <PdfResumeFileButton />
  </section>
);

export default IntroSection;
