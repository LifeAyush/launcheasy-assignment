import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <div className="app-flex">
        <Stats />
      </div>
      <Footer />
    </main>
  );
}
