import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Stats from "@/components/Stats/Stats";
import JoinWaitlist from "@/components/JoinWaitlist/JoinWaitlist";
import MarketingTools from "@/components/MarketingTools/MarketingTools";
import MarketingRecipies from "@/components/MarketingRecipies/MarketingRecipies";
import Hero from "@/components/Hero/Hero";
import SiteCarousel from "@/components/SiteCarousel/SiteCarousel";
import Image from "next/image";
import mesh from "@/assets/mesh.svg";

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <div className="app-flex">
        <Hero />
        <SiteCarousel />
        <MarketingRecipies />
        <Image src={mesh} alt="mesh" className="mesh" />
        <Stats />
        <MarketingTools />
        <JoinWaitlist />
      </div>
      <Footer />
    </main>
  );
}
