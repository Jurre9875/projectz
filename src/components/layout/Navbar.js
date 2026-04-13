"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#Over_Ons", label: "Over_Ons"},
  { href: "#diensten", label: "Diensten" },
  { href: "#afspraak", label: "Afspraak" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    function updateHash() {
      setActiveLink(window.location.hash || "#home");
    }

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fff8ef]">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <div className="text-2xl font-black tracking-tight text-[#2D5A3C]">
          PROJECTZ
        </div>

    <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
        const isActive = activeLink === link.href;

        return (
        <a
         key={link.label}
            href={link.href}
                className={`cursor-pointer border-b-2 pb-1 font-bold ${
                  isActive
                    ? "border-[#7D5800] text-[#7D5800]"
                    : "border-transparent text-[#201b0c] hover:border-[#7D5800] hover:text-[#7D5800]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
    </nav>

        <button className="hidden rounded-md bg-[#2D5A3C] px-5 py-2 font-bold text-[#fff8ef] md:block cursor-pointer">
          Boek nu
        </button>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Open mobiel menu"
          className="relative flex h-11 w-11 items-center justify-center md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#201b0c] transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#201b0c] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#201b0c] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full border-t border-black/10 bg-[#201b0c] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <nav className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center gap-8 px-6 py-10 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`text-3xl font-bold uppercase tracking-wide border-b-2 pb-1 ${
                activeLink === link.href
                  ? "border-[#7D5800] text-[#7D5800]"
                  : "border-transparent text-[#fff8ef] hover:border-[#7D5800] hover:text-[#7D5800]"
              }`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <button
            className="rounded-md bg-[#2D5A3C] px-6 py-3 font-bold text-[#fff8ef] cursor-pointer hover:text-[#7D5800]"
            type="button">
            Boek nu
          </button>
        </nav>
      </div>
    </header>
  );
}
