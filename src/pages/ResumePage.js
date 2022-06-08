import React from "react";
import Jumbo from "../components/Jumbo";
import Content from "../components/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ResumePage(props) {
  return (
    <div>
      <Jumbo title={props.title} />
      <Content>
        <h5>Link to my downloadable resume:</h5>
        <div>
          <a
            href="resume.pdf"
            // target="_blank"
            className="resume download"
            download
          >
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </a>
        </div>
        <br/>
        <h5>Languages</h5>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
        <br/>
        <h5>Frameworks</h5>
        <ul>
          <li>React</li>
          <li>Mongo</li>
          <li>jQuery</li>
          <li>Express</li>
          <li>Node</li>
          <li>Bootstrap</li>
        </ul>
      </Content>
    </div>
  );
}

export default ResumePage;
