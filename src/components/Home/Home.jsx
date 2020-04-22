import '../shared/main.css';

import React from 'react';

import SEO from '../helpers/seo';
import Layout from '../shared/Layout';
import FooterSection from './FooterSection';
import IntroSection from './IntroSection';
import JourneySection from './JourneySection';
import MainLinks from './MainLinks';
import ProjectsSection from './ProjectsSection';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <MainLinks emailContainerDisplayed={false} />
    <IntroSection />
    <ProjectsSection />
    <JourneySection />
    <FooterSection />
  </Layout>
);

export default Home;
