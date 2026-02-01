"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import PageWrapper from "../components/PageWrapper";

export default function Login() {
  const { setToken } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setToken(data.token);
    router.push("/dashboard");
  };

  return (
    <PageWrapper>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <input className="w-full border mb-3 px-4 py-2 rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border mb-3 px-4 py-2 rounded" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full py-2 rounded text-white font-semibold transition bg-cyan-600 hover:bg-cyan-700" onClick={login}>Login</button>
      </div>
    </div>
    </PageWrapper>
  );
}
