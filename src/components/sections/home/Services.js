const services = [
  {
    title: "Klassieke Knipbeurt",
    price: "€20",
    description:
      "Een standaard precisiebeurt, wassen en stylen afgestemd op de vorm van je gezicht.",
  },
  {
    title: "Gentleman Knipbeurt",
    price: "€25",
    description: "Premium knipbeurt inclusief warme handdoekbehandeling en nekscheren.",
  },
  {
    title: "Baard Trimmen & Shaperen",
    price: "€15",
    description: "Deskundig modelleren en contouren voor een scherp en strak baardprofiel.",
  },
  {
    title: "Volledig Verzorgingspakket",
    price: "€35",
    description:
      "Het complete pakket: knippen, baard trimmen, gezichtsmassage en stoombehandeling.",
  },
];

export default function Services() {
  return (
    <section className="bg-surface-container-low py-24" id="diensten">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <h2 className="text-on-surface font-headline text-6xl font-black uppercase">
            ONZE DIENSTEN
          </h2>
          <p className="text-on-surface-variant mt-4 font-headline font-bold uppercase tracking-[0.2em] md:mt-0">
            HET VERZORGINGSMENU
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="min-h-[400px] overflow-hidden rounded-xl shadow-2xl">
            <img
              alt="Klant kijkt tevreden in de spiegel na een verse knipbeurt"
              className="h-full w-full object-cover"
              src="assets/images/services/servicesfoto.png"
            />
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-bg flex items-center justify-between rounded-xl p-8 transition-all duration-300 hover:bg-primary"
              >
                <div className="max-w-[80%]">
                  <div className="mb-2 flex items-center gap-4">
                    <h4 className="font-headline text-2xl font-bold transition-colors group-hover:text-white">
                      {service.title}
                    </h4>
                    <span className="text-secondary group-hover:text-secondary-container font-headline text-xl font-bold transition-colors">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-on-surface-variant transition-colors group-hover:text-white/80">
                    {service.description}
                  </p>
                </div>

                <span className="material-symbols-outlined text-secondary group-hover:text-secondary-container text-4xl transition-colors">
                  arrow_outward
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
