"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import PageWrapper from "../components/PageWrapper";

type Claim = {
  _id: string;
  status: string;
  dealId: {
    title: string;
    category: string;
  };
};

export default function DashboardPage() {
  const { token } = useAuth();
  const router = useRouter();

  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchClaims = async () => {
      const res = await fetch("http://localhost:5000/api/claims/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setClaims(data);
      setLoading(false);
    };

    fetchClaims();
  }, [token]);

  if (loading) {
    return <div className="p-8">Loading dashboard...</div>;
  }

  return (
    <PageWrapper>
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Claimed Deals</h1>

      {claims.length === 0 ? (
        <p className="text-gray-600">
          You haven’t claimed any deals yet.
        </p>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim._id}
              className="border p-4 rounded"
            >
              <h2 className="font-semibold">
                {claim.dealId?.title}
              </h2>

              <p className="text-sm text-gray-500">
                Category: {claim.dealId?.category}
              </p>

              <p className="text-sm mt-1">
                Status:{" "}
                <span className="font-medium">
                  {claim.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    </PageWrapper>
  );
}
