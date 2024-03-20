import "./recipies.css";
import Image from "next/image";
import arrow from "@/assets/logos/arrow.svg";
import { MarketingRecipeData } from "./MarketingRecipieData";
import arrowForward from "@/assets/logos/arrowForward.svg";

export default function MarketingRecipies() {
  return (
    <div className="mr">
      <div className="mr-top">
        <div className="mr-top-flex">
          <div className="mr-top-flex-top">Marketing Recipes</div>
          <div className="mr-top-flex-middle">Attract. Convert. Retain.</div>
          <div className="mr-top-flex-btm">
            A library of ready-to-use marketing campaigns, workflows and
            programs to accelerate your growth, maximize savings and reduce
            efforts.
          </div>
        </div>
        <div className="mr-top-cta">
          <span> Visit the library</span>
          <Image src={arrow} alt="Visit" className="mr-top-img" />
        </div>
      </div>
      <div className="mr-card-display">
        {MarketingRecipeData.map((recipe) => {
          return (
            <div key={recipe.id} className="mr-card">
              <Image
                src={recipe.img}
                alt={`${recipe.tag}`}
                className="mr-card-img"
              />
              <div className="mr-card-btm">
                <div className="mr-card-btm-text">
                  <div className="mr-car-btm-tag">{recipe.tag}</div>
                  <div className="mr-car-btm-title">{recipe.title}</div>
                  <div className="mr-car-btm-para">{recipe.para}</div>
                </div>
                <div className="mr-card-cta">
                  <span>{recipe.cta}</span>
                  <Image
                    src={arrowForward}
                    alt="Know More"
                    className="mr-card-cta-img"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
