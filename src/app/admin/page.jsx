"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { bookingServices } from "@/lib/bookingOpties";

export default function Adminpage() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("/api/bookings")
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    const today = new Date();

    const totaal = bookings.length;
    const openstaand = bookings.filter((b) => b.status === "pending").length;
    const bevestigd = bookings.filter((b) => b.status === "confirmed").length;
    const geannuleerd = bookings.filter((b) => b.status === "cancelled").length;

    const vandaag = bookings
        .filter((b) => new Date(b.appointmentAt).toDateString() === today.toDateString())
        .sort((a, b) => new Date(a.appointmentAt) - new Date(b.appointmentAt));

    const upcoming = bookings
        .filter((b) => new Date(b.appointmentAt) > today && b.status !== "cancelled")
        .sort((a, b) => new Date(a.appointmentAt) - new Date(b.appointmentAt))[0];

    const recent = [...bookings]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    const serviceCounts = {};
    for (const b of bookings) {
        serviceCounts[b.service] = (serviceCounts[b.service] || 0) + 1;
    }
    const topService = Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0];
    const topServiceNaam = topService
        ? bookingServices.find((s) => s.value === topService[0])?.label || topService[0]
        : "—";

    return (
        <div>
            <div className="mb-8 pb-6 border-b border-line">
                <p className="text-on-surface-variant text-xs tracking-widest font-bold mb-1 capitalize">
                    {today.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })}
                </p>
                <h1 className="font-headline text-4xl text-on-surface leading-none">OVERZICHT</h1>
            </div>

            <div className="grid grid-cols-4 border border-line rounded-2xl overflow-hidden mb-8 bg-bg-white">
                <div className="px-6 py-5 border-r border-line">
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Totaal</p>
                    <p className="font-headline text-5xl text-on-surface leading-none">{totaal}</p>
                </div>
                <div className="px-6 py-5 border-r border-line">
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Openstaand</p>
                    <p className="font-headline text-5xl text-on-surface leading-none">{openstaand}</p>
                </div>
                <div className="px-6 py-5 border-r border-line">
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Bevestigd</p>
                    <p className="font-headline text-5xl text-on-surface leading-none">{bevestigd}</p>
                </div>
                <div className="px-6 py-5">
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Geannuleerd</p>
                    <p className="font-headline text-5xl text-on-surface leading-none">{geannuleerd}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="font-bold text-on-surface">Vandaag</h2>
                            {vandaag.length > 0 && (
                                <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2.5 py-0.5 rounded-full">
                                    {vandaag.length}
                                </span>
                            )}
                        </div>
                        {vandaag.length === 0 ? (
                            <div className="border border-dashed border-line rounded-2xl p-10 text-center text-on-surface-variant text-sm">
                                Geen afspraken vandaag
                            </div>
                        ) : (
                            <div className="border border-line rounded-2xl overflow-hidden bg-bg-white">
                                {vandaag.map((b, i) => (
                                    <div key={b.id} className={`flex items-center gap-4 px-5 py-4 ${i < vandaag.length - 1 ? "border-b border-line" : ""}`}>
                                        <p className="font-headline text-xl text-primary leading-none w-14 shrink-0">
                                            {new Date(b.appointmentAt).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
                                        </p>
                                        <div className="w-px h-8 bg-line shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-on-surface truncate">{b.name}</p>
                                            <p className="text-on-surface-variant text-sm">
                                                {bookingServices.find((s) => s.value === b.service)?.label || b.service}
                                            </p>
                                        </div>
                                        <StatusBadge status={b.status} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-bold text-on-surface">Recente boekingen</h2>
                            <Link href="/admin/bookings" className="text-sm font-bold text-secondary hover:underline">
                                Alle boekingen →
                            </Link>
                        </div>
                        <div className="border border-line rounded-2xl overflow-hidden bg-bg-white">
                            {recent.length === 0 ? (
                                <div className="px-5 py-10 text-center text-on-surface-variant text-sm">Geen boekingen</div>
                            ) : (
                                recent.map((b, i) => (
                                    <div key={b.id} className={`flex items-center justify-between px-5 py-4 ${i < recent.length - 1 ? "border-b border-line" : ""}`}>
                                        <div className="min-w-0">
                                            <p className="font-bold text-on-surface truncate">{b.name}</p>
                                            <p className="text-on-surface-variant text-sm">
                                                {bookingServices.find((s) => s.value === b.service)?.label || b.service}
                                                {" · "}
                                                {new Date(b.appointmentAt).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })}
                                                {" om "}
                                                {new Date(b.appointmentAt).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
                                            </p>
                                        </div>
                                        <StatusBadge status={b.status} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-primary rounded-2xl p-6 text-white">
                        <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-4">Populairste dienst</p>
                        <p className="font-headline text-3xl leading-none">{topServiceNaam}</p>
                        {topService && <p className="text-white/60 text-sm mt-2">{topService[1]} boekingen</p>}
                    </div>

                    <div className="border border-line rounded-2xl p-6 bg-bg-white">
                        <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-4">Volgende afspraak</p>
                        {upcoming ? (
                            <>
                                <p className="font-bold text-on-surface text-lg leading-tight">{upcoming.name}</p>
                                <p className="text-on-surface-variant text-sm mt-1">
                                    {bookingServices.find((s) => s.value === upcoming.service)?.label || upcoming.service}
                                </p>
                                <p className="font-bold text-primary text-sm mt-3">
                                    {new Date(upcoming.appointmentAt).toLocaleDateString("nl-NL", { weekday: "short", day: "numeric", month: "short" })}
                                    {" om "}
                                    {new Date(upcoming.appointmentAt).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
                                </p>
                            </>
                        ) : (
                            <p className="text-on-surface-variant text-sm">Geen aankomende afspraken</p>
                        )}
                    </div>

                    <div className="border border-line rounded-2xl p-6 bg-bg-white">
                        <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-4">Diensten</p>
                        <div className="space-y-3">
                            {bookingServices.map((s) => {
                                const count = bookings.filter((b) => b.service === s.value).length;
                                const pct = totaal > 0 ? Math.round((count / totaal) * 100) : 0;
                                return (
                                    <div key={s.value}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-sm font-bold text-on-surface">{s.label}</span>
                                            <span className="text-xs text-on-surface-variant">{count}</span>
                                        </div>
                                        <div className="h-1.5 bg-bg-soft rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    if (status === "confirmed") return <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">Bevestigd</span>;
    if (status === "cancelled") return <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-bg-soft text-on-surface-variant line-through">Geannuleerd</span>;
    return <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container">In afwachting</span>;
}
