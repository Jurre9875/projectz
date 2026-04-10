
export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden bg-[#24402d] px-8 pt-24 pb-12">
      <div className="pointer-events-none absolute bottom-0 left-1/2 translate-y-1/4 -translate-x-1/2 whitespace-nowrap font-headline text-[20vw] leading-none font-black uppercase text-[#fff8ef] opacity-5 select-none ms-8 mx-9">
        PROJECTZ
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-24 flex flex-col items-start justify-between gap-16 md:flex-row">
          <div className="max-w-sm">
            <div className="mb-8 font-headline text-3xl font-black uppercase tracking-tighter text-[#fff8ef]">
              PROJECTZ
            </div>

            <p className="mb-8 font-bold leading-relaxed text-[#fff8ef]/60">
              De ultieme barbershop ervaring waar vakmanschap en erfgoed samenkomen voor de moderne man.
            </p>

            <div className="flex gap-4">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff8ef]/10 text-[#fff8ef] transition-all hover:bg-[#7D5800] hover:text-black"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-24">
            <div className="space-y-6">
              <h4 className="font-headline font-black uppercase tracking-tighter text-[#fff8ef]">
                Navigatie
              </h4>
                          <div className="flex flex-col gap-4">
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#Home">Home</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#over-ons">Over ons</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#diensten">Diensten</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#reviews">Reviews</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#contact">Contact</a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-black uppercase tracking-tighter text-[#fff8ef]">
                Diensten
              </h4>
              <div className="flex flex-col gap-4">
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#">Haren knippen</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#">Baard trimmen</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#">Hot towel shave</a>
                <a className="font-bold text-[#fff8ef]/60 hover:text-[#7D5800]" href="#">Combi-deals</a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-black uppercase tracking-tighter text-[#fff8ef]">
                Contact
              </h4>
              <div className="flex flex-col gap-4 font-bold text-[#fff8ef]/60">
                <p>Coolsingel 123<br />3012 AG Rotterdam</p>
                <p>info@projectz.nl</p>
                <p>010-1234567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-[#fff8ef]/10 pt-12 md:flex-row">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff8ef]/40">
            ©2026 PROJECTZ HERITAGE BARBERS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-10">
            <a className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff8ef]/40 hover:text-[#7D5800]" href="#">Privacy Policy</a>
            <a className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff8ef]/40 hover:text-[#7D5800]" href="#">Terms of Service</a>
            <a className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff8ef]/40 hover:text-[#7D5800]" href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}