import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Appointment from '@/components/Appointment';
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Appointment />
      <Contact />
    </>
  )
}
