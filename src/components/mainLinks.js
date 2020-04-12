import React, { useState } from "react"
import Notifications, {notify} from 'react-notify-toast';

const MainLinks = (props) => {
  const [isEmailContainerDisplayed] = useState(props.emailContainerDisplayed);
  
  const clickToCopyEmail = (e) => {
    e.preventDefault();
    var textarea = document.createElement('textarea');
    textarea.textContent = "dinohasanic@gmail.com"
    document.body.appendChild(textarea);

    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    document.body.removeChild(textarea);
    notify.show('Copied to clipboard!', "success");
  }
  return (
    <div className="main-links">
      {isEmailContainerDisplayed ? (
        <div className="email-link-container">
          <h2 className="email-link">dinohasanic@gmail.com</h2>
          <button className="secondary-button" style={{ marginLeft: "1rem" }} onClick={clickToCopyEmail}>Copy</button>
        </div>
      ) : (
        <div className="email-link-container"></div>
        )}
      <Notifications />
      <div className="main-link-container">
        <a className="main-link" href="https://www.github.com/dinohasanic" target="_blank" rel="noopener noreferrer">Github</a>
        <a className="main-link" href="https://www.linkedin.com/in/dinohasanic/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="main-link" href="mailto:dinohasanic@gmail.com" style={{ cursor: "copy" }} onClick={clickToCopyEmail}>Email</a>
      </div>
    </div>
  )
}

MainLinks.defaultProps = {
  emailContainerDisplayed: true
}

export default MainLinks
