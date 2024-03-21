import "./hero.css";
import Image from "next/image";
import arrowBlue from "@/assets/logos/arrowBlue.svg";
import cursor from "@/assets/logos/cursor.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-top-header">
          <div className="hero-top-beep-flex">
            <div className="hero-top-beep-1" />
            <div className="hero-top-beep-2" />
            <div className="hero-top-beep-3" />
          </div>
          <div className="hero-top-text">Our exclusive beta is live.</div>
          <div className="hero-top-text-blue-flex">
            <div className="hero-top-text-blue">Sign up for free</div>
            <Image src={arrowBlue} alt="Know more" className="hero-top-img" />
          </div>
        </div>
        <div className="hero-top-main">
          <div className="hero-top-main-ani-display">
            <div className="hero-top-main-ani-flex">
              <span>Generate leads</span>
              <span>Convert prospects</span>
              <span>Retain customers</span>
            </div>
          </div>
          <div className="hero-top-main-text">
            in 3 clicks for your business
            <Image src={cursor} alt="Click" className="hero-top-cursor" />
          </div>
        </div>
        <div className="hero-top-subtext">
          Simplify your marketing efforts with AI. Use a collection of
          ready-made, successful marketing strategies that practically run
          themselves.
        </div>
      </div>
      <div className="hero-btm">
        <div className="hero-btm-input-flex">
          <input
            type="email"
            placeholder="Enter your work email"
            className="hero-btm-input"
          />
          <div className="hero-btm-cta">Join the Waitlist</div>
        </div>
        <div className="hero-btm-subtext">
          Get access to a comprehensive directory of <span>AI Tools</span> and
          <span> ChatGPT Prompts</span> to elevate your business.
        </div>
      </div>
    </div>
  );
}
