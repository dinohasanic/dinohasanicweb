import { Link } from 'gatsby';
import React from 'react';

import SEO from '../components/helpers/seo';
import Layout from '../components/shared/Layout';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="main-link">Go back to Home</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
