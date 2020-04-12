import React from "react"

const IntroSection = () => (
  <section style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}>
    <h1 className="main-header">Hi, I'm Dino</h1>
    <h3 className="header-intro">
      I’m a <strong>full-stack developer</strong> based in the <strong>SF Bay Area</strong>. Using React (and React Native) with a Node.js/GraphQL API backend, I build web and mobile apps. I’m also interested in creating VR/AR experiences — I think that’s where the future is going!
    </h3>
    <button className="main-button">View my resume</button>
  </section>
)

export default IntroSection
