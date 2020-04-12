import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PdfResumeFileButton = () => {
  const data = useStaticQuery(graphql`
  {
    pdfFile: file(relativePath: { eq: "DinoHasanicResume.pdf" }) {
      publicURL
    }
  }
  `)

  return (
    <a className="main-button" href={data.pdfFile.publicURL} target="_blank" rel="noopener noreferrer">View my resume</a>
  )
}

export default PdfResumeFileButton
