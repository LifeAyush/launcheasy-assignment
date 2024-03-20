import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Stats from "@/components/Stats/Stats";
import JoinWaitlist from "@/components/JoinWaitlist/JoinWaitlist";

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <div className="app-flex">
        <Stats />
        <JoinWaitlist />
      </div>
      <Footer />
    </main>
  );
}
