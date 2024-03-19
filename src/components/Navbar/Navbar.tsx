import "./navbar.css";
import Image from "next/image";
import navbarLogo from "@/assets/logos/navbarLogo.svg";
import navHam from "@/assets/logos/navHam.svg";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  return (
    <div className="nav">
      <Image src={navbarLogo} alt="Launcheasy" className="nav-logo" />
      <div className="nav-items">
        <div className="free-tag">Free</div>
        {NavbarData.map((navItem) => {
          return (
            <div key={navItem.id} className="nav-item">
              <span className="nav-item-text">{navItem.text}</span>
              {navItem.isDropdown ? <div className="nav-item-logo" /> : null}
            </div>
          );
        })}
        <button className="nav-cta">Join the waitlist</button>
      </div>
      <Image src={navHam} alt="View More" className="mobile-ham" />
    </div>
  );
}
