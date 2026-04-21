import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-green-dark relative flex flex-col items-center overflow-hidden px-8 pt-24 pb-12">
      <div className="text-white-soft pointer-events-none absolute bottom-0 left-1/2 mx-9 w-full -translate-x-1/2 translate-y-1/4 select-none whitespace-nowrap text-center font-headline text-[15vw] leading-none font-black uppercase opacity-5 ms-7">
        PROJECTZ
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-24 flex flex-col items-start justify-between gap-16 md:flex-row">
          <div className="max-w-sm">
            <div className="text-white-soft mb-8 font-headline text-3xl font-black uppercase tracking-tighter">
              PROJECTZ
            </div>

            <p className="text-white-soft/60 mb-8 font-bold leading-relaxed">
              De ultieme barbershop ervaring waar vakmanschap en erfgoed samenkomen voor de moderne man.
            </p>

            <div className="flex gap-4">
              <a
                className="bg-white-soft/10 text-white-soft hover:text-brown flex h-16 w-16 items-center justify-center rounded-full transition-all"
                href="#"
              >
                <FontAwesomeIcon icon={faShare} height={50} width={50} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-white-soft font-headline font-black uppercase tracking-tighter">
                Navigatie
              </h4>
                          <div className="flex flex-col gap-4">
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#Home">Home</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#over-ons">Over ons</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#diensten">Diensten</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#reviews">Reviews</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#contact">Contact</a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white-soft font-headline font-black uppercase tracking-tighter">
                Diensten
              </h4>
              <div className="flex flex-col gap-4">
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#">Haren knippen</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#">Baard trimmen</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#">Hot towel shave</a>
                <a className="text-white-soft/60 hover:text-brown font-bold" href="#">Combi-deals</a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white-soft font-headline font-black uppercase tracking-tighter">
                Contact
              </h4>
              <div className="text-white-soft/60 flex flex-col gap-4 font-bold">
                <p>Coolsingel 123<br />3012 AG Rotterdam</p>
                <p>info@projectz.nl</p>
                <p>010-1234567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-white-soft/10 flex flex-col items-center justify-between gap-8 border-t pt-12 md:flex-row">
          <div className="text-white-soft/40 text-[10px] font-bold uppercase tracking-[0.2em]">
            ©2026 PROJECTZ HERITAGE BARBERS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-10">
            <a className="text-white-soft/40 hover:text-brown text-[10px] font-bold uppercase tracking-[0.2em]" href="#">Privacy Policy</a>
            <a className="text-white-soft/40 hover:text-brown text-[10px] font-bold uppercase tracking-[0.2em]" href="#">Terms of Service</a>
            <a className="text-white-soft/40 hover:text-brown text-[10px] font-bold uppercase tracking-[0.2em]" href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
