"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#Over_Ons", label: "Over Ons"},
  { href: "#diensten", label: "Diensten" },
  { href: "#afspraak", label: "Afspraak" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const activeLinkClasses = "border-brown text-brown";
  const inactiveDesktopLinkClasses =
    "border-transparent text-text hover:border-brown hover:text-brown";
  const inactiveMobileLinkClasses =
    "border-transparent text-bg hover:border-brown hover:text-brown";

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
    <header className="sticky top-0 z-50 border-b border-text/10 bg-bg">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <div className="text-green text-2xl font-black tracking-tight">
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
                    ? activeLinkClasses
                    : inactiveDesktopLinkClasses
                }`}
              >
                {link.label}
              </a>
            );
          })}
    </nav>

        <a
          className="bg-green text-bg hidden rounded-md px-5 py-2 font-bold transition hover:text-brown md:block"
          href="#afspraak"
        >
          Boek nu
        </a>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Open mobiel menu"
          className="relative flex h-11 w-11 items-center justify-center md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`bg-text absolute h-0.5 w-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`bg-text absolute h-0.5 w-6 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-text absolute h-0.5 w-6 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`bg-text absolute inset-x-0 top-full border-t border-text/10 transition-opacity duration-300 md:hidden ${
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
                  ? activeLinkClasses
                  : inactiveMobileLinkClasses
              }`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="bg-green text-bg rounded-md px-6 py-3 font-bold transition hover:text-brown"
            href="#afspraak"
            onClick={closeMenu}
          >
            Boek nu
          </a>
        </nav>
      </div>
    </header>
  );
}
