"use client";

import { useEffect, useState } from "react";
import DealCard from "../components/DealCard";
import PageWrapper from "../components/PageWrapper";

type Deal = {
  _id: string;
  title: string;
  category: string;
  partnerName?: string;
  isLocked: boolean;
};

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      const res = await fetch("http://localhost:5000/api/deals");
      const data = await res.json();
      setDeals(data);
      setLoading(false);
    };

    fetchDeals();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <p>Loading deals...</p>
      </div>
    );
  }

  return (
    <PageWrapper>
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Deals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <DealCard key={deal._id} deal={deal} />
        ))}
      </div>
    </div>
    </PageWrapper>
  );
}
