import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Notifications, { notify } from 'react-notify-toast';

const EMAIL_LINK = 'dinohasanic@gmail.com';
const GITHUB_LINK = 'https://www.github.com/dinohasanic';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/dinohasanic/';

const MainLinks = ({ emailContainerDisplayed }) => {
  const [isEmailContainerDisplayed] = useState(emailContainerDisplayed);

  const clickToCopyEmail = (e) => {
    e.preventDefault();
    const textarea = document.createElement('textarea');
    textarea.textContent = EMAIL_LINK;
    document.body.appendChild(textarea);

    const selection = document.getSelection();
    const range = document.createRange();
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    document.body.removeChild(textarea);
    notify.show('Copied to clipboard!', 'success');
  };
  return (
    <div className="main-links">
      {isEmailContainerDisplayed ? (
        <>
          <div className="email-link-container">
            <h2 className="email-link">{EMAIL_LINK}</h2>
            <button type="button" className="secondary-button" data-cy="emailLink" onClick={clickToCopyEmail}>Copy</button>
          </div>
          <Notifications />
        </>
      ) : null}
      <div className="main-link-container">
        <a className="main-link" href={GITHUB_LINK} data-cy="githubLink" target="_blank" rel="noopener noreferrer">Github</a>
        <a className="main-link" href={LINKEDIN_LINK} data-cy="linkedinLink" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <button type="button" className="main-link" style={{ cursor: 'copy' }} data-cy="emailLink" onClick={clickToCopyEmail}>Email</button>
      </div>
    </div>
  );
};

MainLinks.propTypes = {
  emailContainerDisplayed: PropTypes.bool.isRequired,
};

export default MainLinks;
