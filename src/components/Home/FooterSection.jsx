import React from 'react';

import FooterImage from './FooterImage';
import MainLinks from './MainLinks';

const FooterSection = () => (
  <section className="section">
    <div className="contact-section-container">
      <div className="contact-section-left">
        <h3>Tell me about your...</h3>
        <h4>Full-time role/opportunity</h4>
        <p>
          Are you hiring? I&#39;m currently looking for full-time positions
          based in the Bay Area, or remotely anywhere else.
        </p>
        <h4>Freelance Project</h4>
        <p>
          Please feel free to contact me regarding any freelance projects you
          might have, I would like to help.
        </p>
      </div>
      <div className="contact-section-right">
        <FooterImage />
      </div>
    </div>
    <MainLinks emailContainerDisplayed />
  </section>
);

export default FooterSection;
