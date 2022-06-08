import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.youtube.com/channel/UCoVDtm0ivAn9A5t-eTMGKkg"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://github.com/ottercreektourism"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/marissa-flynn-6b1278180/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;