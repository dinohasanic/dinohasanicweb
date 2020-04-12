import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{textAlign: "center", marginTop: "2rem"}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
