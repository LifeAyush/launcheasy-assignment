import { StaticImageData } from "next/image";

export interface NavItem {
  id: number;
  text: string;
  isDropdown: boolean;
}
export interface FooterItem {
  id: number;
  title: string;
  links: string[];
}
export interface StatsItem {
  id: number;
  text: string;
  subtext: string;
}
export interface MarkteingTool {
  id: number;
  text: string;
  subtext: string;
  bgColor: string;
}
export interface MarketingRecipe {
  id: number;
  img: StaticImageData;
  tag: string;
  title: string;
  para: string;
  cta: string;
}
export interface SiteCarouselItem {
  id: number;
  title: string;
  img: StaticImageData;
}
