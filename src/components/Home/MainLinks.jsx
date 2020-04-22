import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Notifications, { notify } from 'react-notify-toast';

const MainLinks = ({ emailContainerDisplayed }) => {
  const [isEmailContainerDisplayed] = useState(emailContainerDisplayed);

  const clickToCopyEmail = (e) => {
    e.preventDefault();
    const textarea = document.createElement('textarea');
    textarea.textContent = 'dinohasanic@gmail.com';
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
            <h2 className="email-link">dinohasanic@gmail.com</h2>
            <button type="button" className="secondary-button" onClick={clickToCopyEmail}>Copy</button>
          </div>
          <Notifications />
        </>
      ) : null}
      <div className="main-link-container">
        <a className="main-link" href="https://www.github.com/dinohasanic" target="_blank" rel="noopener noreferrer">Github</a>
        <a className="main-link" href="https://www.linkedin.com/in/dinohasanic/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="main-link" href="mailto:dinohasanic@gmail.com" style={{ cursor: 'copy' }} onClick={clickToCopyEmail}>Email</a>
      </div>
    </div>
  );
};

MainLinks.propTypes = {
  emailContainerDisplayed: PropTypes.bool.isRequired,
};

export default MainLinks;
