import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faVolumeMute,
  faVolumeHigh,
  faVolumeUp,
  faVolumeXmark,
  faHeadphones,
  faPlay,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function SampleComponent() {
  function buttonClick() {
    alert("you clicked a button!");
  }

  return (
    <div className="sample-component">
      <h4>Sample Component</h4>
      <p>description of this component</p>
      <div className="flex flex-wrap">
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faVolumeDown} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faVolumeMute} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faHeadphones} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={buttonClick}>
          <FontAwesomeIcon icon={faSliders} />
        </button>
      </div>
    </div>
  );
}

export default SampleComponent;
