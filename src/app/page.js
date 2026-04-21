import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/home/About";
import Haircut from "@/components/sections/home/haircut";
import Contact from "@/components/sections/home/Contact";
import Faq from "@/components/sections/home/Faq";
import Hero from "@/components/sections/home/Hero";
import Marquee from "@/components/sections/home/Marquee";
import Reviews from "@/components/sections/home/Reviews";
import Services from "@/components/sections/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Marquee />
        <Reviews />
        <Faq />
        <Haircut />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
