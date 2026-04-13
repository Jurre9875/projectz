"use client";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.success) {
            alert("ingelogd!");
        } else {
            alert("fout");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    );
}
