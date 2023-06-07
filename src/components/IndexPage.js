import React from "react";
import MainComponent from "./MainComponent";
import SubMenu from "./SubMenu";
import { useState } from "react";
import {
  faVolumeDown,
  faVolumeMute,
  faVolumeUp,
  faVolumeXmark,
  faHeadphones,
  faBackward,
  faForward,
  faPlay,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function IndexPage() {
  const [menus, setMenus] = useState([
    {
      id: "menu-01",
      title: "Song Selection",
      buttons: { faBackward, faForward },
    },
    {
      id: "menu-02",
      title: "Volume Menu",
      buttons: { faVolumeUp, faVolumeDown, faVolumeMute },
    },
  ]);

  return (
    <div>
      <h2>Index Page</h2>
      <div className="sample-components-wrapper">
        <MainComponent />
        {menus.map((menu, index) => (
          <SubMenu key={index} menu={menu} />
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
