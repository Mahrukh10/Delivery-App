"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type DeliveryPreference = {
  type: "DELIVERY" | "CURBSIDE" | "IN_STORE";
  address?: string;
  carColor?: string;
  deliveryDateTime?: string;
};

export default function Summary() {
  const [data, setData] = useState<DeliveryPreference | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("deliveryPreference");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("deliveryPreference");
    localStorage.removeItem("userDetails");
    router.push("/");
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No delivery preference found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md text-left">
        <h2 className="text-xl font-bold text-[#008992] mb-4">
          Delivery Summary
        </h2>

        <p className="mb-2">
          <span className="font-semibold">Type:</span> {data.type}
        </p>

        {data.address && (
          <p className="mb-2">
            <span className="font-semibold">Address:</span> {data.address}
          </p>
        )}

        {data.carColor && (
          <p className="mb-2">
            <span className="font-semibold">Car Color:</span> {data.carColor}
          </p>
        )}

        {data.deliveryDateTime && (
          <p className="mb-4">
            <span className="font-semibold">Date & Time:</span>{" "}
            {new Date(data.deliveryDateTime).toLocaleString()}
          </p>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={() => router.push("/delivery")}
            className="px-4 py-2 rounded-md border border-teal-500 text-teal-600
                       hover:bg-teal-50 transition cursor-pointer border hover:border-black"
          >
            Back
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md bg-red-500 text-white
                       bg-teal-400 transition cursor-pointer border hover:border-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
