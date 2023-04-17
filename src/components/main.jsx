//参考
//http://manato.ca/
//https://fukushimanaoki.com/
//https://www.mikeinghamdesign.com/

import React from "react";
import Header from "./Header";

const MainPage = () => {


  return (
    <div>
      <Header />
      <div id="Home" style={{ height: "100vh" }}>
        <div style={{ height: "200px", textAlign: "center" }}></div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            width: "",
            marginBottom: "0px",
            backgroundColor: "",
          }}
        >
          Yoh Otsuka
        </h1>
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            marginTop: "0px",
            backgroundColor: "",
          }}
        >
          Student & Programer
        </h3>
        <div style={{ height: "400px", textAlign: "center" }}></div>
      </div>
      <div id="About" style={{ height: "100vh" }}>
        <div style={{ height: "90px", textAlign: "center" }}></div>
        <h2 style={{ color: "white", textAlign: "center" }}>About Me</h2>
      </div>
      <div id="Skills" style={{ height: "100vh" }}>
      <div style={{ height: "90px", textAlign: "center" }}></div>
        <h2 style={{ color: "white", textAlign: "center" }}>Skills</h2>
      </div>
      <div id="Work" style={{ height: "100vh" }}>
      <div style={{ height: "90px", textAlign: "center" }}></div>
        <h2 style={{ color: "white", textAlign: "center" }}>Works</h2>
      </div>
    </div>
  );
};

export default MainPage;

//スクロール発火イベント
  //https://1-notes.com/javascript-change-background-color-on-scrolling/
  //http://www.netyasun.com/home/color.html
  window.addEventListener("scroll", function () {
    //スクロールの高さを取得
    let scroll = window.pageYOffset;
    // console.log(scroll+"  "+window.innerHeight)
    if (scroll > 4 * window.innerHeight) {
      document.body.style.backgroundColor = "#FFC400";
      // console.log("赤");
    } else if (scroll >= 3 * window.innerHeight) {
      document.body.style.backgroundColor = "#43A047";
      // console.log("赤");
    } else if (scroll >= 2 * window.innerHeight) {
      document.body.style.backgroundColor = "#FF6F00";
      // console.log("オレンジ");
    } else if (scroll >= window.innerHeight) {
      document.body.style.backgroundColor = "#00CCFF";
      // console.log("青");
    } else {
      document.body.style.backgroundColor = "#00FFCC";
      // console.log("緑");
    }
  });


//スムーススクロールの動作を実装
window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});
