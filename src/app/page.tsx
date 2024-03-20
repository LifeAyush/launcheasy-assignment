import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Stats from "@/components/Stats/Stats";
import JoinWaitlist from "@/components/JoinWaitlist/JoinWaitlist";
import MarketingTools from "@/components/MarketingTools/MarketingTools";

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <div className="app-flex">
        <Stats />
        <MarketingTools />
        <JoinWaitlist />
      </div>
      <Footer />
    </main>
  );
}
