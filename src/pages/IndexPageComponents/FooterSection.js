import React from "react"
import Image from "../../components/image"
import MainLinks from "../../components/mainLinks"

const FoooterSection = () => (
  <section style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `100px 1.0875rem`
  }}>
    <div className="contact-section-container">
      <div className="contact-section-left">
        <h3>Tell me about your...</h3>
        <h4>Full-time role/opportunity</h4>
        <p>I’m a full-stack developer based in the SF Bay Area. Using React (and React Native) with a Node.js/GraphQL API backend.</p>
        <h4>Project</h4>
        <p>I’m a full-stack developer based in the SF Bay Area. Using React (and React Native) with a Node.js/GraphQL API backend.</p>
      </div>
      <div className="contact-section-right">
        <Image className="footer-image" />
      </div>
    </div>
    <MainLinks emailContainerDisplayed={true} />
  </section>
)

export default FoooterSection
