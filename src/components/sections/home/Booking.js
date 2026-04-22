"use client";

import { useState } from "react";
import { bookingServices, bookingTimeSlots } from "@/lib/bookingOpties";

function today() {
  return new Date().toISOString().split("T")[0];
}

export default function Booking() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: bookingServices[0].value,
    date: today(),
    time: bookingTimeSlots[0],
    notes: "",
  });

  const onChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
      }),
    });

    alert("Afspraak verstuurd");
  };
  return (
    <section className="bg-surface-container-low py-24" id="afspraak">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">

        <div>
          <h2 className="mb-5 font-headline text-5xl font-black text-on-surface">
            Afspraak maken
          </h2>
          <p className="text-on-surface-variant">
            Kies een behandeling en plan een moment.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {bookingServices.map((s) => (
              <div
                key={s.value}
                className="rounded-3xl border border-line/70 bg-bg-white p-6 shadow-sm"
              >
                <p className="font-headline text-2xl text-on-surface">
                  {s.label}
                </p>
                <p className="text-on-surface-variant">{s.duration}</p>
                <p className="mt-2 font-bold text-brown-dark">
                  {s.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line/70 bg-bg-white p-8 shadow-xl">
          <h3 className="font-headline text-3xl font-black text-on-surface">
            Plan je afspraak
          </h3>

          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <input
              className="w-full rounded-2xl border border-line px-4 py-4"
              name="name"
              placeholder="Naam"
              onChange={onChange}
              required
            />

            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="w-full rounded-2xl border border-line px-4 py-4"
                name="email"
                placeholder="E-mail"
                onChange={onChange}
                required
              />
              <input
                className="w-full rounded-2xl border border-line px-4 py-4"
                name="phone"
                placeholder="Telefoon"
                onChange={onChange}
                required
              />
            </div>

            <select
              className="w-full rounded-2xl border border-line px-4 py-4"
              name="service"
              onChange={onChange}
            >
              {bookingServices.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="w-full rounded-2xl border border-line px-4 py-4"
                type="date"
                name="date"
                min={today()}
                onChange={onChange}
              />
              <select
                className="w-full rounded-2xl border border-line px-4 py-4"
                name="time"
                onChange={onChange}
              >
                {bookingTimeSlots.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <textarea
              className="w-full rounded-2xl border border-line px-4 py-4"
              name="notes"
              placeholder="Opmerking"
              onChange={onChange}
            />

            <button className="w-full rounded-full bg-primary px-6 py-4 font-headline text-xl text-on-primary">
              Afspraak maken
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
