import "./marketing.css";
import Image from "next/image";
import rocket from "@/assets/rocket.png";
import { MarketingToolsData } from "./MarketingToolsData";

export default function MarketingTools() {
  return (
    <div className="mt">
      <div className="mt-text">
        <div className="mt-text-flex">
          <div className="mt-text-flex-top">Marketing Tools</div>
          <div className="mt-text-flex-middle">
            <div className="mt-text-flex-ani">
              <span>Skyrocket</span>
              <Image
                src={rocket}
                alt="Take off"
                className="mt-main-sub-image"
              />
            </div>
            your growth with advanced marketing tools
          </div>
          <div className="mt-text-flex-btm">
            A library of ready-to-use marketing campaigns, workflows and
            programs to accelerate your growth, maximize savings and reduce
            efforts.
          </div>
        </div>
        <div className="mt-cta">Join the Waitlist</div>
      </div>
      <div className="mt-carousel">
        {MarketingToolsData.map((tool) => {
          return (
            <div
              className="mt-carousel-card"
              key={tool.id}
              style={{ background: `${tool.bgColor}` }}
            >
              <div className="mt-carousel-card-text-flex">
                <div className="mt-carousel-card-text">{tool.text}</div>
                <div className="mt-carousel-card-subtext">{tool.subtext}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
