const words = ["VAKMANSCHAP", "TRADITIE", "PRECISIE", "STIJL", "ERFGOED", "PASSIE"];

function MarqueeLine({ reverse = false }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex min-w-full items-center gap-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <span
            key={index}
            className="text-primary flex items-center gap-12 font-headline text-4xl font-black uppercase md:text-7xl lg:text-8xl"
          >
            {words.map((word, wordIndex) => (
              <span key={`${index}-${word}`}>
                {word}
                {wordIndex < words.length - 1 ? (
                  <span className="text-secondary ml-12">|</span>
                ) : null}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-brown-soft border-primary/10 overflow-hidden border-y py-12">
      <div className="flex flex-col gap-12">
        <MarqueeLine />
        <MarqueeLine reverse />
      </div>
    </section>
  );
}
