const filledIconStyle = { fontVariationSettings: '"FILL" 1' };

const reviews = [
  {
    name: "Bart Kersenmakers",
    role: "Ondernemer",
    initials: "BK",
    text: "Eindelijk een barbier gevonden die luistert. De fade was perfectie en de sfeer is precies wat een herenzaak moet zijn.",
    featured: false,
  },
  {
    name: "Hans de VriesKast",
    role: "Advocaat",
    initials: "HDV",
    text: "De scheerbeurt met warme handdoek is een gamechanger. Ik heb me nog nooit zo ontspannen gevoeld of er scherper uitgezien.",
    featured: true,
  },
  {
    name: "Timo van hout",
    role: "Creatief Directeur",
    initials: "TVH",
    text: "Topservice van begin tot eind. Je merkt dat deze mannen echt van hun vak houden. Het interieurontwerp is ook prachtig.",
    featured: false,
  },
];

export default function Reviews() {
  return (
    <section className="bg-bg relative overflow-hidden py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-secondary mb-4 text-center font-headline font-black uppercase tracking-widest">
          REVIEWS
        </p>
        <h2 className="mb-16 text-center font-headline text-5xl font-black">
          WAT ONZE HEREN ZEGGEN
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={
                review.featured
                  ? "bg-primary rounded-xl p-10 shadow-lg md:-translate-y-4"
                  : "bg-bg-soft border-secondary rounded-xl border-t-4 p-10 shadow-sm"
              }
            >
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

              <p className={`mb-8 italic ${review.featured ? "text-white" : "text-on-surface"}`}>
                &quot;{review.text}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={
                    review.featured
                      ? "bg-secondary-container text-on-secondary-container flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                      : "bg-primary flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                  }
                >
                  {review.initials}
                </div>

                <div>
                  <p
                    className={`font-headline font-bold ${
                      review.featured ? "text-white" : "text-on-surface"
                    }`}
                  >
                    {review.name}
                  </p>
                  <p
                    className={`text-xs uppercase tracking-wider ${
                      review.featured ? "text-white/70" : "text-on-surface-variant"
                    }`}
                  >
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
