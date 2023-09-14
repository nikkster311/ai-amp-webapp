import React from "react";
import ButtonComponent from "./ButtonComponent";

function SubMenu({ menu }) {
  return (
    <div className="submenu-component">
      <h4>{menu.title}</h4>
      <div className="flex flex-wrap">
        <p>{menu.body}</p>
        {/* {Object.keys(buttons).map((item, i) => (
          <ButtonComponent key={i} uniqueIcon={buttons[item]} />
        ))} */}
      </div>
    </div>
  );
}

export default SubMenu;
