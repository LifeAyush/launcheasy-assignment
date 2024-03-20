import "./waitlist.css";
import Image from "next/image";
import hand from "@/assets/hand.png";

export default function JoinWaitlist() {
  return (
    <div className="wl">
      <div className="wl-text-flex">
        <div className="wl-main-text">
          <Image src={hand} alt="Bye" className="wl-hand-top wl-hand" />
          <div className="wl-main-text-flex">
            <div className="wl-text">Say goodbye</div>
            <Image src={hand} alt="Bye" className="wl-hand" />
            <div className="wl-text">to excessive</div>
          </div>
          <div className="wl-text">Say goodbye to excessive</div>
          <div className="wl-text">
            spending on designers, experts, and multiple tools
          </div>
        </div>
        <div className="wl-subtext">
          Say hello to Launcheazy - your superstar marketer in your pocket!
        </div>
      </div>
      <div className="wl-input-flex">
        <input
          type="email"
          placeholder="Enter your work email"
          className="wl-input"
        />
        <div className="wl-cta">Join the waitlist</div>
      </div>
    </div>
  );
}
