import React from "react";
import "./Footer.css";
import Logo from "../Images/mainlogo.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Footer(FootText) {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="flex-head">
          <div className="head-text">{FootText.FootText.kont}</div>
          <div>kontakt@nurkowaniewszambie.pl</div>
          <div className="head-text">{FootText.FootText.question}</div>
        </div>
        <div className="flex-head">
          <div className="head-text">{FootText.FootText.reg}</div>
          <div>{FootText.FootText.regskl}</div>
          <div>{FootText.FootText.polit}</div>
          <div className="head-text">{FootText.FootText.Social}</div>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Tiktok</div>
        </div>
        <div className="logo-footer">
          <div>
            <img src={Logo} alt="NurkowaniewSzambie" />
          </div>
        </div>
      </div>
    </div>
  );
}
