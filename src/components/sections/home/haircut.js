const looks = [
  {
    title: "Skin Fade",
    image:
      "assets/images/haircut/haircut1.webp",
  },
  {
    title: "Modern mullet",
    image:
      "assets/images/haircut/haircut2.jpeg",
  },
  {
    title: "Taper fade",
    image:
      "assets/images/haircut/haircut3.jpeg",
  },
];

export default function Haircut() {
  return (
    <section className="bg-surface-container-low overflow-hidden py-24" id="afspraak">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-6xl font-black uppercase">
            KLAAR VOOR EEN NIEUWE LOOK?
          </h2>
          <p className="text-on-surface-variant text-lg">
            Ervaar de meesterlijke standaard van verzorging.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {looks.map((look) => (
            <div key={look.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                alt={look.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={look.image}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-headline text-xl font-bold text-white">{look.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
