import "./newsletter.css";
import Image from "next/image";
import rocket from "@/assets/rocket.png";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-main">
        <div className="newsletter-main-sub">newsletter</div>
        <div className="newsletter-main-sub-flex">
          <div className="newsletter-main-sub-flex-text">
            The AI Launch <span>pad</span>
          </div>
          <Image
            src={rocket}
            alt="Take off"
            className="newsletter-main-sub-image"
          />
        </div>
        <div className="newsletter-main-sub-text">
          Receive must-read articles and trends on marketing and artificial
          intelligence, from leading publications in your inbox.
        </div>
      </div>
      <div className="newletter-cta-flex">
        <div className="newsletter-cta-input-flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-cta-input"
          />
          <div className="newsletter-cta">Subscribe</div>
        </div>
        <div className="newsletter-cta-input-flex-subtext">
          By signing up, you are agreeing to our <span>privacy statement.</span>
        </div>
      </div>
    </div>
  );
}
