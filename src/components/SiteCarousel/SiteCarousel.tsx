"use client";
import { useState } from "react";
import Image from "next/image";
import "./siteCarousel.css";
import { SiteCarouselData } from "./SiteCarouselData";
import circleBackMain from "@/assets/circleBackMain.svg";
import circleFrontMain from "@/assets/circleFrontMain.svg";
import siteCarouselImg1 from "@/assets/siteCarouselImg1.png";

export default function SiteCarousel() {
  const [active, setActive] = useState(1);
  const moveCarouselBackward = () => {
    if (active === 1) {
      setActive(3);
    } else {
      setActive((prev) => prev - 1);
    }
  };
  const moveCarouselForward = () => {
    if (active === 3) {
      setActive(1);
    } else {
      setActive((prev) => prev + 1);
    }
  };
  return (
    <div className="sc">
      <div className="sc-top">
        <div className="sc-top-text">
          Auto-generate conversion focussed content for ready-to-use marketing
          recipes with AI
        </div>
        <div className="sc-top-selector-flex">
          {SiteCarouselData.map((data) => {
            return (
              <div
                className={
                  active === data.id
                    ? "sc-top-selector sc-top-selector-active"
                    : "sc-top-selector"
                }
                key={data.id}
                onClick={() => setActive(data.id)}
              >
                <div
                  className={
                    active === data.id
                      ? "sc-top-selector-number sc-top-selector-number-active"
                      : "sc-top-selector-number"
                  }
                >
                  {data.id}
                </div>
                <div
                  className={
                    active === data.id
                      ? "sc-top-selector-text sc-top-selector-text-active"
                      : "sc-top-selector-text"
                  }
                >
                  {data.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sc-btm">
        <div className="sc-btm-icon" onClick={moveCarouselBackward}>
          <Image src={circleBackMain} alt="Back" className="sc-btm-icon-img" />
        </div>
        <Image
          src={
            SiteCarouselData.find((item) => item.id === active)?.img ||
            siteCarouselImg1
          }
          alt="Main"
          className="sc-btm-img"
        />
        <div className="sc-btm-icon" onClick={moveCarouselForward}>
          <Image src={circleFrontMain} alt="Back" className="sc-btm-icon-img" />
        </div>
      </div>
    </div>
  );
}
