import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

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
