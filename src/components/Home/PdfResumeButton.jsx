import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const PdfResumeFileButton = () => {
  const data = useStaticQuery(graphql`
  {
    pdfFile: file(relativePath: { eq: "DinoHasanicResume.pdf" }) {
      publicURL
    }
  }
  `);

  return (
    <a className="main-button" href={data.pdfFile.publicURL} data-cy="resumeLink" target="_blank" rel="noopener noreferrer">View my resume</a>
  );
};

export default PdfResumeFileButton;
