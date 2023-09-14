// import React from "react";
// import ButtonComponent from "./ButtonComponent";
// import { useState } from "react";
// import { ReactComponent as Menu_icon00 } from "../icons/menu_bar/menu_bar_0.svg";
// import { ReactComponent as Menu_icon01 } from "../icons/menu_bar/menu_bar_1.svg";
// import { ReactComponent as Menu_icon02 } from "../icons/menu_bar/menu_bar_2.svg";
// import { ReactComponent as Menu_icon03 } from "../icons/menu_bar/menu_bar_3.svg";
// import { ReactComponent as Menu_icon04 } from "../icons/menu_bar/menu_bar_4.svg";
// import { ReactComponent as Menu_icon05 } from "../icons/menu_bar/menu_bar_5.svg";
// import { ReactComponent as Menu_icon06 } from "../icons/menu_bar/menu_bar_6.svg";
// import { ReactComponent as Menu_icon07 } from "../icons/menu_bar/menu_bar_7.svg";

// function MainComponent() {
//   var [openMenu, setOpenMenu] = useState("settings");

//   return (
//     <div className="sample-component">
//       <h4>Sample Component</h4>
//       <p>description of this component</p>
//       <div className="flex flex-wrap">
//         <button
//           className={openMenu === "settings" ? "active" : ""}
//           onClick={() => [setOpenMenu("settings"), console.log(openMenu)]}
//         >
//           <Menu_icon00 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "upsampling" ? "active" : ""}
//           onClick={() => setOpenMenu("upsampling")}
//         >
//           <Menu_icon01 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "spectrum" ? "active" : ""}
//           onClick={() => setOpenMenu("spectrum")}
//         >
//           <Menu_icon02 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "volume" ? "active" : ""}
//           onClick={() => setOpenMenu("volume")}
//         >
//           <Menu_icon03 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "source" ? "active" : ""}
//           onClick={() => setOpenMenu("source")}
//         >
//           <Menu_icon04 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "ai" ? "active" : ""}
//           onClick={() => setOpenMenu("ai")}
//         >
//           <Menu_icon06 className="test-animation" />
//         </button>
//         <button
//           className={openMenu === "headphones" ? "active" : ""}
//           onClick={() => setOpenMenu("headphones")}
//         >
//           <Menu_icon07 className="test-animation" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MainComponent;
