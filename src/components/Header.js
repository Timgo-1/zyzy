import React, { useState, useEffect } from "react";
import style from "../style/header.module.css";
import HeaderForm from "./HeaderForm";
import ResponsiveHeader from "./ResponsiveHeader";
import logo from '../assets/images/logo.png'; 

export default function Header() {
  const [translateHeader, setTranslateHeader] = useState(false);
  function handleScroll(e) {
    const wScroll = window.scrollY;
    if (wScroll >= 50) {
      setTranslateHeader(true);
    } else {
      setTranslateHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  return (
    <>
      <div
        className={style.animatedBg}
        style={{ transform: translateHeader ? "translateY(-0px)" : "" }}
      ></div>
      <ResponsiveHeader translateHeader={translateHeader} />
      <div className={`${style.Header}`}>
        <a
          href="#"
          className={style.logo}
          style={{ color: translateHeader ? "pink" : "lime" }}
        >
          <span className={"d-none d-xl-block"}>
            <img src={logo} alt="logo" />
            ZyZy
          </span>
        </a>
        <HeaderForm translateHeader={translateHeader} />
        <div className={`ml-auto ${style.actionBtn}`}>
          <a href="#" style={{ color: translateHeader ? "cyan" : "" }}>
            Become a Host
          </a>
          <a href="#" style={{ color: translateHeader ? "aquamarine" : "" }}>
            <i class="fas fa-globe"></i>
          </a>
          <div class="dropdown">
            <a
              className={style.dropdownBtn}
              href="#"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ border: translateHeader ? "1px solid #cccccc" : "" }}
            >
              <i class="fas fa-bars"></i>
              <i class="fas fa-user-circle"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item" href="#">
                Sign Up
              </a>
              <a class="dropdown-item" href="#">
                Login
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Host your Home
              </a>
              <a class="dropdown-item" href="#">
                Host an Experience
              </a>
              <a class="dropdown-item" href="#">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
