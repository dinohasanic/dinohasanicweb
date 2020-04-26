import React from 'react';

import ProjectImage from './ProjectImage';

const ProjectsSection = () => (
  <section className="section">
    <div className="cards-container">
      <div className="card">
        <ProjectImage projectName="thriveMotors" />
        <div className="card-body">
          <h3 className="card-title">Thrive Motors</h3>
          <p className="card-text">A Single Page Application built with React and Apollo. Hasura/GraphQL backend deployed to Heroku. Front end static hosting on S3, with a CloudFront distribution.</p>
          <div className="card-links">
            <a className="card-link" href="https://www.thrivemotors.com" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <ProjectImage projectName="solo" />
        <div className="card-body">
          <h3 className="card-title">Solo</h3>
          <p className="card-text">Minimalist note taking and distraction-free writing web app built with React. Apollo handles state and data management. Hasura + PostgreSQL + GraphQL handles basic CRUD.</p>
          <div className="card-links">
            <a className="card-link" href="https://www.writesolo.com" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <ProjectImage projectName="amigosDMS" />
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
);

export default ProjectsSection;
