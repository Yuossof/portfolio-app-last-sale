import React, { useEffect } from "react";
import "./header.css";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { Close, LightModeOutlined } from "@mui/icons-material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
const Header = () => {
  const [FixedMenue, setFixedMenue] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  });
  return (
    <div>
      <div className="Container-of-Header">
        <div className="Content-of-header-sec">
          <div className="left-sec">LOGO</div>

          <div>
            <div className="center-sec">
              <div className="content-of-center-sec">
                <ul>
                  <a>
                    <li>Home</li>
                  </a>
                  <a>
                    <li>Skills</li>
                  </a>
                  <a href="#pr">
                    <li>Projects</li>
                  </a>
                  <a href="#cn">
                    <li>ContactUs</li>
                  </a>
                  <a href="#rt">
                    <li>RateMe</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="cont-of-right-sec">
            <div
              onClick={() => {
                setFixedMenue(!FixedMenue);
              }}
              className="menu"
            >
              <KeyboardArrowLeftIcon sx={{ color: "white" }} />
              <button>menu</button>
            </div>
            <div
              onClick={() => {
                //send value to localstorage
                localStorage.setItem(
                  "currentMode",
                  theme === "light" ? "dark" : "light"
                );
                //get value from localstorage
                setTheme(localStorage.getItem("currentMode"));
              }}
              className="right-sec"
            >
              {theme === "dark" ? (
                <NightsStayOutlinedIcon />
              ) : (
                <LightModeOutlined />
              )}
            </div>
          </div>
        </div>
      </div>

      {FixedMenue && (
        <div className="fixe">
          <div className="center-sec2">
            <span
              onClick={() => {
                setFixedMenue(!FixedMenue);
              }}
              className="close"
            >
              <Close />
            </span>
            <div className="box">
              <ul>
                <li>Home</li>
                <div className="border2"></div>
                <li>Skills</li>
                <div className="border2"></div>
                <li>Projects</li>
                <div className="border2"></div>
                <li>CallMe</li>
                <div className="border2"></div>
                <li>More</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
