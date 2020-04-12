import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainLinks from "../components/mainLinks"
import './main.css'
import IntroSection from "./IndexPageComponents/IntroSection"
import ProjectsSection from "./IndexPageComponents/ProjectsSection"
import JourneySection from "./IndexPageComponents/JourneySection"
import FoooterSection from "./IndexPageComponents/FooterSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainLinks emailContainerDisplayed={false} />
    <IntroSection />
    <ProjectsSection />
    <JourneySection />
    <FoooterSection />
  </Layout>
)

export default IndexPage
