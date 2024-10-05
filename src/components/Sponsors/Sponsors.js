import React from "react";
import "./Sponsors.css";
import {
  AEF,
  bullfrogpowered,
  CIGI,
  Extempra,
  WUSA,
  plat_star,
  gold_stars,
  silver_stars,
  AFEF,
  Riptide,
  MEF,
  Fantuan,
} from "../../assets/index";
import ACCOMMOD8U_Logo from "../../assets/ACCOMMOD8U_Logo.png";
import UW from "../../assets/UniversityOfWaterloo_logo_horiz_rgb.jpg";

const Sponsors = () => {
  return (
    <div className="sponsors-content">
      <p className="title">SPONSORS</p>
      <div className="diamond-sponsors">
        <p className="sponsor-tier">Diamond Sponsors</p>
        <div className="silver-images">
          <a
            href="https://uwaterloo.ca/math-endowment-fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MEF} alt="MEF logo" />
          </a>
          <a
            href="https://www.extempra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Extempra} alt="Extempra logo" />
          </a>
        </div>
      </div>

      <div className="plat-sponsors">
        <p className="sponsor-tier">Platinum Sponsors</p>
        <div className="silver-images">
          <a
            href="http://riptidecreative.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Riptide} alt="Riptide logo" />
          </a>
        </div>

        <div className="silver-images">
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ borderRadius: "30px" }} src={UW} alt="UW logo" />
          </a>
        </div>
      </div>

      <div className="gold-sponsors">
        <p className="sponsor-tier">Gold Sponsors</p>
        <div className="gold-logos">
          <div className="top-logos">
            <a
              href="https://www.cigionline.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={CIGI}
                alt="Centre for International Governance Innovation logo"
              />
            </a>
            <a
              href="https://fantuan.ca/delivery/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Fantuan} alt="Fantuan logo" />
            </a>
          </div>
          <div className="bottom-logo">
            <a
              href="https://www.accommod8u.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="accommod8u-logo"
                src={ACCOMMOD8U_Logo}
                alt="Accommod8u logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="silver-sponsors">
        <p className="sponsor-tier">Silver Sponsors</p>
        <div className="silver-images">
          <a
            href="https://uwaterloo.ca/arts-endowment-fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AEF} alt="AEF logo" />
          </a>
          <a
            href="https://wusa.ca/about/your-money/funding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WUSA} alt="WUSA logo" />
          </a>
          <a
            href="https://uwaterloo.ca/school-of-accounting-and-finance/accounting-and-finance-endowment-fund-afef"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AFEF} alt="AFEF logo" />
          </a>
        </div>
      </div>

      <div className="bronze-sponsors">
        <p className="sponsor-tier">Bronze Sponsors</p>
        <div className="silver-images">
          <a
            href="https://bullfrogpower.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bullfrogpowered} alt="bullfrogpowered logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
