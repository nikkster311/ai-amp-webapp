import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonComponent({ uniqueIcon }) {
  function buttonClick() {
    alert("you clicked a button!");
  }

  return (
    <button onClick={buttonClick}>
      <FontAwesomeIcon icon={uniqueIcon} />
    </button>
  );
}

export default ButtonComponent;
