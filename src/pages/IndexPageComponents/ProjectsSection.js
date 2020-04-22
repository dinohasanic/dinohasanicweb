import React from "react";
import ProjectImages from "../../components/projectImages";

const ProjectsSection = () => (
  <section style={{
    margin: `0 auto`,
    maxWidth: 1260,
    padding: `1.45rem 1rem`
  }}>
    <div className="cards-container">
      <div className="card">
        <ProjectImages projectName="thriveMotors" />
        <div className="card-body">
          <h3 className="card-title">Thrive Motors</h3>
          <p className="card-text">A Single Page Application built with React and Apollo. Hasura/GraphQL backend deployed to Heroku. Front end static hosting on S3, with a CloudFront distribution.</p>
          <div className="card-links">
            <a className="card-link" href="https://www.thrivemotors.com" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <ProjectImages projectName="amigosDMS" />
        <div className="card-body">
          <h3 className="card-title">Amigos DMS</h3>
          <p className="card-text">CRM, inventory and invoice management web app built with Meteor.js, using Blaze to run our UI layer and MongoDB for data storage. Docker image deployed to AWS EC2.</p>
          <div className="card-links">
            <a className="card-link" href="https://www.amigosdms.com" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProjectsSection
