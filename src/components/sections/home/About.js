const filledIconStyle = { fontVariationSettings: '"FILL" 1' };

export default function About() {
  return (
    <section className="bg-bg py-24" id="Over_Ons">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="material-symbols-outlined text-secondary"
                  style={filledIconStyle}
                >
                  star
                </span>
              ))}
            </div>

            <h2 className="text-on-surface mb-8 font-headline text-3xl sm:text-5xl leading-tight font-black">
              PREMIUM <br />
              BARBIERSERVARING
            </h2>

            <div className="flex gap-4">
              <img
                alt=""
                className="aspect-square w-1/2 rounded-xl object-cover"
                src="assets/images/about/about_foto1.png"
              />
              <img
                alt="Traditionele open-mes scheerbeurt met warme sfeer"
                className="mt-8 aspect-square w-1/2 rounded-xl object-cover"
                src="assets/images/about/about_foto2.png"
              />
            </div>
          </div>

          <div className="bg-primary relative overflow-hidden rounded-xl p-8 md:p-12 lg:p-20 lg:col-span-7 lg:ml-16">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-white/5" />

            <h3 className="mb-6 font-headline text-3xl font-bold text-white">
              Meesterschap in het Ambacht van Mannelijkheid
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Bij PROJECTZ knippen we niet alleen haar; we bewaren een erfgoed. Elke beweging
              van het mes en elke knip van de schaar wordt uitgevoerd met het respect dat jouw
              nalatenschap verdient. Onze shop is een toevluchtsoord waar heren samenkomen voor
              meer dan alleen verzorging.
            </p>

            <ul className="space-y-4 font-headline text-white">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Gecertificeerde Meesterbarbiers
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Traditionele Scheerbeurten met Open Mes
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Premium Verzorgingsproducten
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
