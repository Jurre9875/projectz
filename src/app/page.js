import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/home/About";
import Booking from "@/components/sections/home/Booking";
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
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
