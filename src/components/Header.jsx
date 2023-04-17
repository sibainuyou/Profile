import React, { useState } from "react";

const Header = () => {
  const [selectedID, setSelectedID] = useState();
  window.addEventListener("scroll", function () {
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    // console.log(scroll+"  "+window.innerHeight)
    if (scroll >= 3 * window.innerHeight) {
      setSelectedID("Work");
      // console.log("赤");
    } else if (scroll >= 2 * window.innerHeight) {
      setSelectedID("Skills");
      // console.log("オレンジ");
    } else if (scroll >= window.innerHeight) {
      setSelectedID("About");
      // console.log("青");
    } else {
      setSelectedID("Home");
      // console.log("緑");
    }
  });

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        /*backgroundColor: "yellow",*/
        color: "white",
        height: "90px",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <div
        className="items"
        style={{
          /*backgroundColor: "black",*/ display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ color: "white" /*backgroundColor:"green"*/ }}>
          <li style={{}}>
            <a
              href="#Home"
              style={
                selectedID === "Home" ? { border: "solid" } : { border: "none" }
              }
            >
              Home
            </a>
          </li>
          <li style={{}}>
            <a
              href="#About"
              style={
                selectedID === "About"
                  ? { border: "solid" }
                  : { border: "none" }
              }
            >
              About
            </a>
          </li>
          <li style={{}}>
            <a
              href="#Skills"
              style={
                selectedID === "Skills"
                  ? { border: "solid" }
                  : { border: "none" }
              }
            >
              Skills
            </a>
          </li>
          <li style={{}}>
            <a
              href="#Work"
              style={
                selectedID === "Work" ? { border: "solid" } : { border: "none" }
              }
            >
              Work
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
