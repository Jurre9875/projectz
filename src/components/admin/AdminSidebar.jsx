"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/admin", label: "Dashboard", icon: "dashboard" },
    { href: "/admin/bookings", label: "Boekingen", icon: "book" },
];

export default function AdminSidebar() {
    const pathname = usePathname();

      return (
    <aside className="w-64 bg-primary text-white fixed top-0 left-0 min-h-screen flex flex-col">
      
      <div className="px-6 py-6 border-b border-white/10">
        <span className="text-2xl font-black tracking-tight">PROJECTZ</span>
        <p className="text-white/50 text-xs mt-1 uppercase tracking-widest font-bold">Admin Panel</p>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
    {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                isActive ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
        }`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-6 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white font-bold transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Terug naar site
        </Link>
      </div>

    </aside>
  );
}
