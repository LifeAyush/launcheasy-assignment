import { MarketingRecipe } from "@/types/types";
import cardImage1 from "@/assets/cardImage1.png";
import cardImage2 from "@/assets/cardImage2.png";
import cardImage3 from "@/assets/cardImage3.png";

export const MarketingRecipeData: MarketingRecipe[] = [
  {
    id: 1,
    img: cardImage1,
    tag: "Campaigns",
    title: "Attract potential clients",
    para: "Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery across channels.",
    cta: "View all Campaigns",
  },
  {
    id: 2,
    img: cardImage2,
    tag: "Workflows",
    title: "Convert prospects into profits",
    para: "Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion.",
    cta: "View all Workflows",
  },
  {
    id: 3,
    img: cardImage3,
    tag: "Programs",
    title: "Retain existing customers",
    para: "Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs.",
    cta: "View all Programs",
  },
];
