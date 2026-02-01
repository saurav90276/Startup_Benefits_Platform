"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type DealCardProps = {
  deal: {
    _id: string;
    title: string;
    category: string;
    partnerName?: string;
    isLocked: boolean;
  };
};

export default function DealCard({ deal }: DealCardProps) {
  return (
    
    <Link href={`/deals/${deal._id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`relative p-5 rounded-xl border bg-white shadow-sm cursor-pointer
          ${deal.isLocked ? "opacity-60" : "hover:shadow-lg"}
        `}
      >
        {/* LOCK OVERLAY */}
        {deal.isLocked && (
          <div className="absolute top-3 right-3 text-red-500 text-sm font-semibold">
            🔒 Locked
          </div>
        )}

        {/* CONTENT */}
        <h2 className="text-lg font-bold mb-2">{deal.title}</h2>

        <p className="text-sm text-gray-600 mb-1">
          Category: <span className="font-medium">{deal.category}</span>
        </p>

        {deal.partnerName && (
          <p className="text-sm text-gray-500">
            Partner: {deal.partnerName}
          </p>
        )}

        {/* CTA */}
        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 text-xs rounded-full font-medium
              ${
                deal.isLocked
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }
            `}
          >
            {deal.isLocked ? "Verification Required" : "Available"}
          </span>
        </div>
      </motion.div>
    </Link>
    
  );
}
