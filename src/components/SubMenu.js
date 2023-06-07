import React from "react";
import ButtonComponent from "./ButtonComponent";

function SubMenu({ menu }) {
  var buttons = menu["buttons"];

  return (
    <div className="submenu-component">
      <h4>{menu.title}</h4>
      <div className="flex flex-wrap">
        {Object.keys(buttons).map((item, i) => (
          <ButtonComponent key={i} uniqueIcon={buttons[item]} />
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
