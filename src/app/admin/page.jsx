"use client";
import { useState, useEffect } from "react";

export default function Adminpage() {
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch("api/bookings")
            .then((res) => res.json())
            .then((data) => setBookings(data));

    }, []);

    const totaal = bookings.length;
    const openstaand = bookings.filter((b) => b.status === "pending").length;
    const bevestigd = bookings.filter((b) => b.status === "confirmed").length;

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface-strong rounded-2xl p-6 ring-1 ring-outline">
                <p className="text-lg font-bold">Totaal</p>
                <p className="text-3xl">{totaal}</p>
            </div>
            <div className="bg-surface-strong rounded-2xl p-6 ring-1 ring-outline">
                <p className="text-lg font-bold">Openstaand</p>
                <p className="text-3xl">{openstaand}</p>
            </div>
            <div className="bg-surface-strong rounded-2xl p-6 ring-1 ring-outline">
                <p className="text-lg font-bold">Bevestigd</p>
                <p className="text-3xl">{bevestigd}</p>
            </div>
        </div>
    )
}