"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { token, setToken } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setToken(null);
    router.push("/login");
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow"
    >
      {/* Left */}
      <div className="flex gap-6 text-lg font-semibold">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/deals" className="hover:text-gray-300 transition">
          Deals
        </Link>
        {token && (
          <Link href="/dashboard" className="hover:text-gray-300 transition">
            Dashboard
          </Link>
        )}
      </div>

      {/* Right */}
      <div className="flex gap-3">
  {!token ? (
    <>
      <Link
        href="/login"
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Register
      </Link>
    </>
  ) : (
    <button
      onClick={handleLogout}
      className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  )}
</div>

    </motion.nav>
  );
}
