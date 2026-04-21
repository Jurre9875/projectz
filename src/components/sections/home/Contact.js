export default function Contact() {
  return (
    <section className="bg-bg py-24" id="contact">
      <div className="mx-auto max-w-7xl px-8">
        <div className="bg-primary grid items-center gap-12 rounded-3xl p-12 lg:grid-cols-2">
          <div className="text-white">
            <h3 className="mb-8 font-headline text-3xl font-bold uppercase">NEEM CONTACT OP</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <p className="text-lg">Stationsstraat 12, 4701 AB Roosendaal</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">call</span>
                <p className="text-lg">+31 2409240</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">mail</span>
                <p className="text-lg">hello@projectz.nl</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button className="bg-secondary-container text-on-secondary-container flex items-center gap-4 rounded-full px-12 py-6 font-headline text-2xl font-black uppercase shadow-2xl transition-all hover:scale-105">
              PLAN EEN BEZOEK
              <span className="material-symbols-outlined text-4xl">calendar_month</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
