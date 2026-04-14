import Header from "@/components/layout/Header";
import HeroSection from "@/components/section/HeroSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}