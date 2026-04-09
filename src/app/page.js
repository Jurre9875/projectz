import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Appointment from "@/components/sections/home/Appointment";
import Contact from "@/components/sections/home/Contact";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Appointment />
      <Contact />
      <Footer />
    </>
  );
}
