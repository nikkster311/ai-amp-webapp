import React from "react";
import SubMenu from "./SubMenu";
import { useState } from "react";

import { ReactComponent as Menu_icon00 } from "../icons/menu_bar/menu_bar_0.svg";
import { ReactComponent as Menu_icon01 } from "../icons/menu_bar/menu_bar_1.svg";
import { ReactComponent as Menu_icon02 } from "../icons/menu_bar/menu_bar_2.svg";
import { ReactComponent as Menu_icon03 } from "../icons/menu_bar/menu_bar_3.svg";
import { ReactComponent as Menu_icon04 } from "../icons/menu_bar/menu_bar_4.svg";
import { ReactComponent as Menu_icon05 } from "../icons/menu_bar/menu_bar_5.svg";
import { ReactComponent as Menu_icon06 } from "../icons/menu_bar/menu_bar_6.svg";
import { ReactComponent as Menu_icon07 } from "../icons/menu_bar/menu_bar_7.svg";

function IndexPage() {
  var [openMenu, setOpenMenu] = useState(0);

  const menus = [
    {
      id: "menu-01",
      title: "Settings",
      body: "Any settings info would go here",
    },
    {
      id: "menu-02",
      title: "Upsampling",
      body: "Any upsampling info would go here",
    },
    {
      id: "menu-03",
      title: "Spectrum",
      body: "Any spectrum info would go here",
    },
    {
      id: "menu-03",
      title: "Volume",
      body: "Any volume info would go here",
    },
    {
      id: "menu-03",
      title: "Source",
      body: "Any source info would go here",
    },
    {
      id: "menu-03",
      title: "AI",
      body: "Any ai info would go here",
    },
    {
      id: "menu-03",
      title: "Headphones",
      body: "Any headphones info would go here",
    },
  ];

  return (
    <div>
      <h2>Index Page</h2>
      <div className="sample-components-wrapper">
        <div className="sample-component">
          <h4>Sample Component</h4>
          <p>description of this component</p>
          <div className="flex flex-wrap flex-center">
            <button
              className={openMenu === 0 ? "active" : ""}
              onClick={() => setOpenMenu(0)}
            >
              <Menu_icon00
                className={openMenu === 0 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 1 ? "active" : ""}
              onClick={() => setOpenMenu(1)}
            >
              <Menu_icon01
                className={openMenu === 1 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 2 ? "active" : ""}
              onClick={() => setOpenMenu(2)}
            >
              <Menu_icon02
                className={openMenu === 2 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 3 ? "active" : ""}
              onClick={() => setOpenMenu(3)}
            >
              <Menu_icon03
                className={openMenu === 3 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 4 ? "active" : ""}
              onClick={() => setOpenMenu(4)}
            >
              <Menu_icon04
                className={openMenu === 4 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 5 ? "active" : ""}
              onClick={() => setOpenMenu(5)}
            >
              <Menu_icon06
                className={openMenu === 5 ? "active" : "test-animation"}
              />
            </button>
            <button
              className={openMenu === 6 ? "active" : ""}
              onClick={() => setOpenMenu(6)}
            >
              <Menu_icon07
                className={openMenu === 6 ? "active" : "test-animation"}
              />
            </button>
          </div>
        </div>
        <SubMenu menu={menus[openMenu]} />
      </div>
    </div>
  );
}

export default IndexPage;
