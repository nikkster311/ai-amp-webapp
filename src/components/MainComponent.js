import React from "react";
import ButtonComponent from "./ButtonComponent";
import {
  faVolumeDown,
  faVolumeMute,
  faVolumeUp,
  faVolumeXmark,
  faHeadphones,
  faPlay,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function MainComponent() {
  return (
    <div className="sample-component">
      <h4>Sample Component</h4>
      <p>description of this component</p>
      <div className="flex flex-wrap">
        <ButtonComponent uniqueIcon={faVolumeDown} />
        <ButtonComponent uniqueIcon={faVolumeUp} />
        <ButtonComponent uniqueIcon={faVolumeMute} />
        <ButtonComponent uniqueIcon={faVolumeXmark} />
        <ButtonComponent uniqueIcon={faHeadphones} />
        <ButtonComponent uniqueIcon={faPlay} />
        <ButtonComponent uniqueIcon={faSliders} />
      </div>
    </div>
  );
}

export default MainComponent;
