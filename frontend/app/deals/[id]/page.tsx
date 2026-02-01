"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

type Deal = {
  _id: string;
  title: string;
  description: string;
  category: string;
  partnerName?: string;
  isLocked: boolean;
};

export default function DealDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { token } = useAuth();

  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDeal = async () => {
      const res = await fetch(`http://localhost:5000/api/deals/${id}`);
      const data = await res.json();
      setDeal(data);
      setLoading(false);
    };

    fetchDeal();
  }, [id]);

  const claimDeal = async () => {
    if (!token) {
      router.push("/login");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/claims/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setMessage(data.message || "Deal claimed");
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!deal) {
    return <div className="p-8">Deal not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{deal.title}</h1>

      <p className="text-gray-600 mb-2">{deal.description}</p>

      <p className="text-sm text-gray-500 mb-1">
        Category: {deal.category}
      </p>

      {deal.partnerName && (
        <p className="text-sm text-gray-500 mb-4">
          Partner: {deal.partnerName}
        </p>
      )}

      <button
        onClick={claimDeal}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Claim Deal
      </button>

      {message && (
        <p className="mt-4 text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
