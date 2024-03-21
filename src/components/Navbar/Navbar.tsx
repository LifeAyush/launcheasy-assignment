"use client";
import "./navbar.css";
import { useState } from "react";
import Image from "next/image";
import navbarLogo from "@/assets/logos/navbarLogo.svg";
import navHam from "@/assets/logos/navHam.svg";
import cross from "@/assets/logos/cross.svg";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
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
      <Image
        src={open ? cross : navHam}
        alt="View More"
        className="mobile-ham"
        onClick={() => setOpen(!open)}
      />
      {open ? (
        <div className="mobile-nav">
          {NavbarData.map((navItem) => {
            return (
              <span className="nav-item-text-mobile" key={navItem.id}>
                {navItem.text}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
