import React from "react"
import FooterImage from "../../components/footerImage"
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
        <p>Are you hiring? I'm currently looking for full-time positions based in the Bay Area, or remotely anywhere else.</p>
        <h4>Freelance Project</h4>
        <p>Please feel free to contact me regarding any freelance projects you might have, I would like to help.</p>
      </div>
      <div className="contact-section-right">
        <FooterImage />
      </div>
    </div>
    <MainLinks emailContainerDisplayed={true} />
  </section>
)

export default FoooterSection
