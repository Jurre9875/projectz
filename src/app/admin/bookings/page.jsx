"use client";
import { useState, useEffect } from "react";
import { bookingServices, bookingTimeSlots } from "@/lib/bookingOpties";

const inputKlasse = "w-full border border-line rounded-xl px-4 py-2 bg-bg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40";

export default function BookingsPage() {
    const [lijst, setLijst] = useState([]);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" });
    const [laden, setLaden] = useState(false);

    useEffect(() => { laad(); }, []);

    async function laad() {
        const res = await fetch("/api/bookings");
        const data = await res.json();
        setLijst(data.sort((a, b) => new Date(b.appointmentAt) - new Date(a.appointmentAt)));
    }

    async function verwijder(id) {
        if (!confirm("Boeking verwijderen?")) return;
        await fetch(`/api/bookings/${id}`, { method: "DELETE" });
        setLijst(lijst.filter((b) => b.id !== id));
    }

    async function setStatus(id, status) {
        await fetch(`/api/bookings/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        setLijst(lijst.map((b) => b.id === id ? { ...b, status } : b));
    }

    async function voegToe(e) {
        e.preventDefault();
        setLaden(true);
        const res = await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            await laad();
            setOpen(false);
            setForm({ name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" });
        }
        setLaden(false);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-on-surface">Boekingen</h1>
                    <p className="text-on-surface-variant text-sm mt-1">{lijst.length} boekingen totaal</p>
                </div>
                <button onClick={() => setOpen(true)} className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-dark transition">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Boeking toevoegen
                </button>
            </div>

            <div className="bg-bg-white border border-line rounded-2xl overflow-x-auto">
                <table className="w-full min-w-175">
                    <thead className="border-b border-line">
                        <tr>
                            <th className="text-left px-6 py-4 text-on-surface-variant font-bold text-sm">Naam</th>
                            <th className="text-left px-6 py-4 text-on-surface-variant font-bold text-sm">Dienst</th>
                            <th className="text-left px-6 py-4 text-on-surface-variant font-bold text-sm">Datum & tijd</th>
                            <th className="text-left px-6 py-4 text-on-surface-variant font-bold text-sm">Telefoon</th>
                            <th className="text-left px-6 py-4 text-on-surface-variant font-bold text-sm">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                        {lijst.map((b) => (
                            <tr key={b.id} className="hover:bg-bg/60 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-bold text-on-surface">{b.name}</p>
                                    <p className="text-on-surface-variant text-xs">{b.email}</p>
                                </td>
                                <td className="px-6 py-4 text-on-surface text-sm">
                                    {bookingServices.find((s) => s.value === b.service)?.label || b.service}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <p className="font-bold text-on-surface">
                                        {new Date(b.appointmentAt).toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" })}
                                    </p>
                                    <p className="text-on-surface-variant text-xs">
                                        {new Date(b.appointmentAt).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
                                    </p>
                                </td>
                                <td className="px-6 py-4 text-on-surface text-sm">{b.phone}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={b.status}
                                        onChange={(e) => setStatus(b.id, e.target.value)}
                                        className="text-xs font-bold px-3 py-1.5 rounded-xl border border-line bg-bg text-on-surface focus:outline-none"
                                    >
                                        <option value="pending">In afwachting</option>
                                        <option value="confirmed">Bevestigd</option>
                                        <option value="cancelled">Geannuleerd</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => verwijder(b.id)} className="text-red-400 hover:text-red-600 transition-colors">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {lijst.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-16 text-center text-on-surface-variant">
                                    Geen boekingen gevonden
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-bg-white border border-line rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-on-surface">Boeking toevoegen</h2>
                            <button onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <form onSubmit={voegToe} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-1">Naam</label>
                                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputKlasse} placeholder="Voor- en achternaam" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-1">Telefoon</label>
                                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputKlasse} placeholder="06-12345678" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-on-surface-variant block mb-1">E-mail</label>
                                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputKlasse} placeholder="email@voorbeeld.nl" />
                            </div>

                            <div>
                                <label className="text-sm font-bold text-on-surface-variant block mb-1">Dienst</label>
                                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputKlasse}>
                                    <option value="">Kies een dienst</option>
                                    {bookingServices.map((s) => (
                                        <option key={s.value} value={s.value}>{s.label} — {s.price}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-1">Datum</label>
                                    <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputKlasse} />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-on-surface-variant block mb-1">Tijd</label>
                                    <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputKlasse}>
                                        <option value="">Kies een tijd</option>
                                        {bookingTimeSlots.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-on-surface-variant block mb-1">Notities</label>
                                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${inputKlasse} resize-none`} rows={3} placeholder="Optionele notities..." />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setOpen(false)} className="flex-1 border border-line rounded-xl py-2.5 font-bold text-on-surface hover:bg-bg transition">
                                    Annuleren
                                </button>
                                <button type="submit" disabled={laden} className="flex-1 bg-primary text-white rounded-xl py-2.5 font-bold hover:bg-green-dark transition disabled:opacity-50">
                                    {laden ? "Bezig..." : "Toevoegen"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
