import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProjectImage = ({ projectName }) => {
  const data = useStaticQuery(graphql`
    query {
      amigosDMS: file(relativePath: { eq: "projects/amigosDMS.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thriveMotors: file(relativePath: { eq: "projects/thrivemotors.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solo: file(relativePath: { eq: "projects/solo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 950, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[projectName].childImageSharp.fluid} />;
};

ProjectImage.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default ProjectImage;
