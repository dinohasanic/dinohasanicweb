import React from 'react';

import projectsData from '../helpers/projectsData';
import ProjectImage from './ProjectImage';

const THIS_PROJECT_GITHUB_URL = 'https://github.com/dinohasanic/dinohasanicweb';

const ProjectsSection = () => (
  <section className="section">
    <div className="cards-container">
      {projectsData
        && projectsData.map((project) => (
          <div key={project.projectName} className="card">
            <ProjectImage projectName={project.projectName} />
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="card-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    className="card-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.urlName}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="this-project-source">
      <h3 className="card-title">This website</h3>
      <h4 className="card-text">
        I built the current version of this website with GatsbyJS in April 2020.
        <br />
        I open sourced the code on
        {' '}
        <a
          className="text-white"
          href={THIS_PROJECT_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
        {' '}
        so feel free to check it out.
      </h4>
    </div>
  </section>
);

export default ProjectsSection;
