export default function Hero() {
  return (
    <section className=" bg-white relative flex min-h-[800px] items-center overflow-hidden pt-20" id="home">
      <div className="bg-[#FFC65D] absolute top-0 right-0 z-0 hidden h-full w-1/3 lg:block"/>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="z-10">
          <h1 className="text-on-surface mb-8 font-headline text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl">
            EEN THUIS VOOR <br /> KLASSIEKE <br /> <span className="text-secondary">GENTLEMEN</span>
          </h1>

          <p className="text-on-surface-variant mb-10 max-w-md text-xl leading-relaxed">
            Geworteld in het gouden tijdperk van het barbiersvak, combineert PROJECTZ eeuwenoude
            tradities met moderne precisie voor de veeleisende man.
          </p>

          <button className="bg-[#FFC65D] text-on-secondary-container flex items-center gap-3 rounded-full px-8 py-4 font-headline text-lg font-bold transition-all hover:scale-105 active:scale-95">
            BOEK JE AFSPRAAK
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl ">
            <img
            alt=""
            className="h-full w-full object-cover"
            src="/assets/images/hero/hero_foto.png"
            />
          </div>

          <div className="border-secondary absolute -bottom-8 -left-0 hidden max-w-[200px] rounded-xl border-l-4 bg-white p-6 shadow-xl md:block bottom-1">
            <p className="text-primary mb-1 font-headline text-3xl font-bold">15+</p>
            <p className="text-on-surface text-sm font-bold uppercase tracking-wider">
              Jaar Traditie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
