import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", heigh: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link smooth={true} onClick={() => setMenuOpened(false)} to="header">Home</Link>
          </li>
          <li>
            <Link smooth={true} onClick={() => setMenuOpened(false)} to="programs">Programs</Link>
          </li>
          <li>
            <Link smooth={true} onClick={() => setMenuOpened(false)} to='reasons'>Why Us</Link>
          </li>
          <li>
            <Link smooth={true} onClick={() => setMenuOpened(false)} to="plans">Plans</Link>
          </li>
          <li>
            <Link smooth={true} onClick={() => setMenuOpened(false)} to="Testimonials">
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
