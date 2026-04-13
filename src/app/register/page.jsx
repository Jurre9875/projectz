"use client";

import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        alert("je account is gemaakt")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
    );
}
