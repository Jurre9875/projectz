"use client";
import { useState } from "react";
const faqs = [
  {
    question: "Moet ik een afspraak maken?",
    answer: "Ja, we werken vooral op afspraak. Zo kunnen we iedereen rustig en op tijd helpen."
  },
  {
    question: "Knippen jullie ook kinderen?",
    answer: "Ja hoor, kinderen zijn welkom bij ons in de stoel."
   },
  {
    question: "Welke producten gebruiken jullie?",
    answer:
      "Wij gebruiken uitsluitend hoogwaardige, professionele verzorgingsproducten waaronder Reuzel, Layrite en onze eigen kenmerkende PROJECTZ olien en balsems.",
  },
  {
    question: "Bieden jullie cadeaubonnen aan?",
    answer:"Ja, we hebben cadeaubonnen leuk om te geven of te krijgen."
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-4xl px-8">
        <h2 className="mb-16 text-center font-headline text-5xl font-black uppercase">
          VEELGESTELDE VRAGEN
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-primary overflow-hidden rounded-xl transition-all">

              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-8 text-left font-headline text-xl font-bold text-white">

                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-secondary">
                  {openIndex === index ? "close" : "add"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 leading-relaxed text-white/90">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
