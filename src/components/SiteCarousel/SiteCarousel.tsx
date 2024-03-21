"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const screen = document.querySelectorAll<HTMLElement>(".sc-btm-img")[0];
    const container = document.querySelectorAll<HTMLElement>(".sc")[0];
    const custom = () => {
      transform(container);
    };
    const transform = (elem: HTMLElement) => {
      const offset = elem.offsetTop;
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      console.log(percentage);
      if (percentage < 50 && percentage > -50) {
        screen.style.scale = "1";
        screen.style.transform = "translateY(20px)";
        container.style.borderRadius = "24px";
        if (window.innerWidth >= 1200) {
          container.style.width = "calc(100% - 240px)";
        } else if (window.innerWidth >= 1000) {
          container.style.width = "calc(100% - 80px)";
        } else {
          container.style.width = "calc(100%)";
          container.style.borderRadius = "0px";
          screen.style.transform = "translateY(5px)";
        }
      } else {
        container.style.borderRadius = "0px";
        container.style.width = "100%";
        if (window.innerWidth >= 1200) {
          screen.style.scale = "1.30";
          screen.style.transform = "translateY(-50px)";
        } else if (window.innerWidth >= 1000) {
          screen.style.scale = "1.30";
          screen.style.transform = "translateY(-120px)";
        } else if (window.innerWidth >= 500) {
          screen.style.scale = "1.02";
          screen.style.transform = "translateY(-120px)";
        } else {
          screen.style.scale = "1.1";
          screen.style.transform = "translateY(-100px)";
        }
      }
    };
    window.addEventListener("scroll", custom);

    return () => {
      window.removeEventListener("scroll", custom);
    };
  }, []);

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
