import React from "react";
import "./maincont.css";
import EastIcon from "@mui/icons-material/East";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { myProjects } from "./myProjects";



const MainCont = () => {
  const [active, setActive] = useState("all");

  const [arr, setarr] = useState(myProjects);

  const HandleClick = (CategoryValue) => {
    setActive(CategoryValue);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((itm) => {
        return itm === CategoryValue;
      });

      return zzz === CategoryValue;
    });
    setarr(newArr);
  };

  return (
    <div className="main">
      <div className="left-sec-main">
        <button
          className={active === "all" ? "active" : null}
          onClick={() => {
            setActive("all")
            setarr(myProjects)
          }}>
          All projects
        </button>

        <button
          className={active === "Css" ? "active" : null}
          onClick={() => {HandleClick("Css")}}>
          HTML & CSS
        </button>
        <button
          className={active === "js" ? "active" : null}
          onClick={() => {HandleClick("js")}}>
          JavaScript
        </button>
        <button
          className={active === "Reactjs" ? "active" : null}
          onClick={() => {HandleClick("Reactjs")}}>
          React & MUI
        </button>
        <button
          className={active === "node" ? "active" : null}
          onClick={() => {HandleClick("node")}}>
          Node & Express
        </button>
      </div>
      <div className="right-sec-main">
        {arr.map((item) => {
          return (
            <div id="pr" className="card" key={item.category}>
              <div className="img">
                <img src={item.imgPath} alt="" />
              </div>

              <div className="box-card" >
                <div className="main-card-sec">
                  <h2 className="title">{item.projectTitle}</h2>
                  <p className="sub-title">
                    lorem ipsum dolor sit amet consedur elite
                    <br />
                    adipisicing. Ex tempore dolor in,
                    <br />
                    accusantium laudantium accusamus.
                  </p>
                </div>

                <div className="links-card">
                  <div className="left-sec-card-links">
                    <span>
                      <LinkIcon sx={{ fontSize: "27px", rotate: "-50deg" }} />
                    </span>
                    <span>
                      <GitHubIcon />
                    </span>
                  </div>
                  <div className="right-sec-card-links">
                    <span>more</span>
                    <span>
                      <EastIcon sx={{ fontSize: "17px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCont;
