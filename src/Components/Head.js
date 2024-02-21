import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Head.css";
import polandFlag from "../Images/poland.png";
import britshFlat from "../Images/british.png";
import mainlogo from "../Images/mainlogo.png";

import { useState } from "react";

import { useEffect } from "react";
import { useRef } from "react";
import { useJwt } from "react-jwt";
import Axios, { isCancel, AxiosError } from "axios";

function Head({ setLanguege }) {
  const [returnedDataName, setreturnedData] = useState({});

  window.addEventListener("resize", () => {
    var LogoCordLogo = document.querySelector("#logo");

    var cordLogo = LogoCordLogo.getBoundingClientRect();
    // console.log(cordLogo.top);
    var LogoCordBurger = document.querySelector("#burger-and-language");
    var headnavbar = document.querySelector("#headnavbar");
    // console.log(cordLogo.top);
    // console.log(window.screen.width, "szerokość ekranu");
    if (cordLogo.top > 50 && window.screen.width < 1050) {
      LogoCordBurger.style.width = "100vw";
      LogoCordLogo.style.width = "100vw";
      headnavbar.style.width = "100vw";
    }
    if (window.screen.width > 1050) {
      LogoCordBurger.style.width = "20%";
      LogoCordLogo.style.width = "20%";
      headnavbar.style.width = "50%";
    }
  });

  var locallanguege = localStorage.getItem("Language");
  const [lg, setLg] = useState(locallanguege);
  const [tabnavlg, setlgtabnav] = useState([
    { text: "Strona Główna", page: "HomePages" },
    { text: "Produkty", page: "Products" },
    { text: "Koszyk", page: "Basket" },
    { text: "Logowanie", page: "Login" },
  ]);

  useEffect(() => {
    if (lg === "Polish") {
      // setlgtabnav(["O nas", "Produkty", "Promocje", "Kontakt"]);
      setlgtabnav([
        { text: "Strona Główna", page: "HomePages" },
        { text: "Produkty", page: "Products" },
        { text: "Koszyk", page: "Basket" },
        { text: "Logowanie", page: "Login" },
      ]);
      setLanguege("Polish");
    } else if (lg === "English") {
      // setlgtabnav(["About us", "Products", "Sale", "Contancts"]);
      setlgtabnav([
        { text: "Main Page", page: "HomePages" },
        { text: "Products", page: "Products" },
        { text: "Basket", page: "Basket" },
        { text: "Login", page: "Login" },
      ]);
      setLanguege("English");
    }
  }, [lg]);
  // console.log(tabnavlg);

  var [tabnavlgFinaly, settabnavlgFinaly] = useState(tabnavlg);
  var [headnavbar, setnavbar] = useState([]);
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3002/returndata", { withCredentials: true })
      .then((res) => {
        setreturnedData(res?.data?.personInfo);
      })
      .catch(function (error) {
        console.log("Error ", error);
      });

    if (returnedDataName?.length > 2) {
      var navhelp;
      navhelp = tabnavlg;
      console.log(navhelp);
      navhelp.pop();
      if (lg === "English") {
        navhelp.push({ text: "User", page: "DashboardUser" });
      } else {
        navhelp.push({ text: "Konto", page: "DashboardUser" });
      }
      settabnavlgFinaly(navhelp);
    } else {
      settabnavlgFinaly(tabnavlg);
    }

    console.log(headnavbar);
    setnavbar(headnavbar);
  }, [returnedDataName, lg, tabnavlg]);
  var headnavbar = tabnavlgFinaly.map((e) => {
    return (
      <div key={e.page} className="flex-value">
        <Link to={e.page} key={e} className="Link">
          {e.text}
        </Link>
      </div>
    );
  });
  console.log(returnedDataName);
  var checked = false;
  function BurgerHide() {
    var menu = document.querySelector(".head");
    var Link = document.querySelectorAll(".Link");
    // console.log(Link);
    var toggle = document.querySelectorAll(".toggle");
    // console.log(toggle.checked);

    if (checked === true) {
      // menu.style.setProperty("height", "60px");
      Link.forEach((e) => {
        e.style.setProperty("display", "none");
      });
    }
    if (checked === false) {
      menu.style.setProperty("height", "auto");

      Link.forEach((e) => {
        e.style.setProperty("display", "block");
      });
    }
    checked = !checked;
  }
  return (
    <div>
      <div className="head">
        <div className="burger-and-language" id="burger-and-language">
          <div className="chose-languages">
            <img
              className="flag"
              alt="polandFlag"
              src={polandFlag}
              onClick={() => {
                setLg("Polish");
                localStorage.setItem("Language", "Polish");
              }}
            />
            <img
              className="flag"
              alt="polandFlag"
              src={britshFlat}
              onClick={() => {
                setLg("English");
                localStorage.setItem("Language", "English");
              }}
            />
          </div>
          <div className="burger">
            <input type="checkbox" className="toggle" onClick={BurgerHide} />
            <div className="burger-menu">
              <div className="first-point">
                <div className="short-line-toRight"></div>
              </div>
              <div className="second-point">
                <div className="short-line-toLeft"></div>
              </div>
              <div className="third-point">
                <div className="short-line-toLeft"></div>
              </div>
              <div className="fourth-point">
                <div className="short-line-toRight"></div>
              </div>
              <div className="long-line"></div>
            </div>
          </div>
        </div>
        <div className="head-flex" id="headnavbar">
          {headnavbar}
        </div>
        <div className="logo" id="logo">
          <img className="logo-img" alt="nurkowanieWszambie" src={mainlogo} />
        </div>
      </div>
    </div>
  );
}

export default Head;
