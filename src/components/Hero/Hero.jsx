import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            In here we will help you shape and build your ideal body and live
            beyond your expectations
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
            <button className="btn">
                Get started</button>
                <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
