import "./footer.css";
import footerLogo from "@/assets/logos/footerLogo.svg";
import Image from "next/image";
import { FooterData } from "./FooterData";
import Newsletter from "../Newsletter/Newsletter";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-flex">
          <div className="footer-top-info">
            <div className="footer-top-info-main">
              <Image
                src={footerLogo}
                alt="Launcheasy"
                className="footer-top-info-main-logo"
              />
              <div className="footer-top-info-main-text">
                Engage customers, convert prospects effortlessly
              </div>
            </div>
            <div className="footer-top-info-socials">
              <Link
                href="https://linkedin.com/company/launcheazy"
                target="_blank"
              >
                <div className="footer-top-info-socials-logo-1" />
              </Link>
              <Link href="https://facebook.com/launcheazy" target="_blank">
                <div className="footer-top-info-socials-logo-2" />
              </Link>
              <Link href="https://instagram.com/launch.eazy" target="_blank">
                <div className="footer-top-info-socials-logo-3" />
              </Link>
              <Link href="mailto:contact@launcheazy.com" target="_blank">
                <div className="footer-top-info-socials-logo-4" />
              </Link>
            </div>
          </div>
          <div className="footer-top-navigation">
            {FooterData.map((item) => {
              return (
                <div className="footer-top-navigation-flex" key={item.id}>
                  <div className="footer-top-navigation-flex-title">
                    {item.title}
                    {item.id === 1 ? (
                      <div className="free-tag">Free</div>
                    ) : null}
                  </div>
                  {item.links.map((link, index) => {
                    return (
                      <div
                        className="footer-top-navigation-flex-item"
                        key={index}
                      >
                        {link}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Newsletter />
      </div>
      <div className="footer-hr" />
      <div className="footer-btm">
        <span className="footer-btm-text">
          Copyright 2023 Launcheazy AI Private Limited. All rights reserved.
        </span>
        <div className="footer-btm-links">
          <span className="footer-btm-link">Privacy Policy</span>
          <div className="footer-btm-vr" />
          <span className="footer-btm-link">Terms of Service</span>
        </div>
      </div>
    </div>
  );
}
