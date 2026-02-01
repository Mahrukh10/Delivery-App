"use client";
import Box from "./box";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Delivery() {
  useEffect(() => {
    const stored = localStorage.getItem("deliveryPreference");
    if (stored) {
      const data = JSON.parse(stored);
      setSelected(data.type);
      setAddress(data.address || "");
      setCarColor(data.carColor || "");
      setDeliveryDateTime(data.deliveryDateTime || "");
    }
  }, []);

  const router = useRouter();
  const [selected, setSelected] = useState<string>("DELIVERY");
  const boxes = ["DELIVERY", "CURBSIDE", "IN_STORE"];
  const [address, setAddress] = useState("");
  const [deliveryDateTime, setDeliveryDateTime] = useState("");
  const [carColor, setCarColor] = useState("");
  const isSubmitEnabled = () => {
    if (selected === "DELIVERY") {
      return address.trim() !== "" && deliveryDateTime.trim() !== "";
    } else if (selected === "CURBSIDE") {
      return carColor.trim() !== "" && deliveryDateTime.trim() !== "";
    } else if (selected === "IN_STORE") {
      return true;
    }
    return false;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let payload: any = {
      type: selected,
    };

    if (selected === "DELIVERY") {
      payload.address = address;
      payload.deliveryDateTime = deliveryDateTime;
    }
    if (selected === "CURBSIDE") {
      payload.carColor = carColor;
      payload.deliveryDateTime = deliveryDateTime;
    }
    localStorage.setItem("deliveryPreference", JSON.stringify(payload));
    router.push("/summary");
  };
  const handleBoxClick = (box: string) => {
    setSelected(box);
    setAddress("");
    setDeliveryDateTime("");
    setCarColor("");
  };
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-2xl font-bold pt-8 text-[#008992]">
        Welcome to Delivery System
      </h1>
      <h3 className="text-1xl font-bold text-[#889761]">
        Choose your Preference
      </h3>
      <div
        id="boxes"
        className="flex justify-center items-center mt-8 flex-wrap gap-4"
      >
        {boxes.map((box) => (
          <div key={box} onClick={() => setSelected(box)}>
            <Box
              title={box}
              isSelected={selected === box}
              onClick={() => handleBoxClick(box)}
            />
          </div>
        ))}
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto mt-6 p-6 bg-white rounded-md shadow-md text-left"
        >
          {selected == "DELIVERY" && (
            <div>
              <label className="text-gray-700 font-semibold text-[14px]">
                Delivery Address
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-[12px]"
                  required
                />
              </label>
            </div>
          )}
          {selected == "CURBSIDE" && (
            <div>
              <label className="text-gray-700 font-semibold text-[14px]">
                Car Color
                <input
                  type="text"
                  placeholder="Enter car color"
                  value={carColor}
                  onChange={(e) => setCarColor(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-[12px]"
                  required
                />
              </label>
            </div>
          )}
          {(selected == "CURBSIDE" || selected == "DELIVERY") && (
            <label className="text-gray-700 font-semibold text-[14px]">
              Future Delivery Date & Time
              <input
                type="datetime-local"
                value={deliveryDateTime}
                onChange={(e) => setDeliveryDateTime(e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-[12px]"
              />
            </label>
          )}
          <button
            type="submit"
            disabled={!isSubmitEnabled()}
            className={`mt-4 font-semibold py-2 px-4 rounded-md transition-colors
              ${
                isSubmitEnabled()
                  ? "bg-teal-400 text-white hover:bg-teal-500 cursor-pointer"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
