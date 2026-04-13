"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Ingelogd!");
    } else {
      alert("Fout login");
    }
  }

   return (
    <main className="min-h-[calc(100vh-88px)] flex flex-col items-center justify-center p-8 bg-surface-container-low">

      <div className="w-full max-w-md">

        <div className="mb-12 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Account Inloggen
          </span>

          <h1 className="text-5xl font-extrabold text-on-surface tracking-tight mb-2">
            Inloggen
          </h1>

          <p className="text-on-surface-variant">
            Voer uw gegevens in om toegang te krijgen.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label className="block text-sm font-bold mb-2 uppercase">
              E-mailadres
            </label>

            <input
              className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl py-4 px-4"
              type="email"
              placeholder="naam@projectz.nl"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase">
              Wachtwoord
            </label>

            <input
              className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl py-4 px-4"
              type="password"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:opacity-90 text-white font-bold py-5 rounded-xl shadow-lg transition-all duration-300"
          >
            Inloggen
          </button>

        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-on-surface-variant">
            Nog geen account?
          </p>

          <a
            href="/register"
            className="text-secondary font-bold hover:underline"
          >
            Maak een account
          </a>
        </div>

      </div>

    </main>
  );
}