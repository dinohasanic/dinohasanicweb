/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import './layout.css';

import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => (
  <>
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
