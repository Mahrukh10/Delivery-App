"use client";
type BoxProps = {
  title: string;
isSelected?: boolean;
 onClick: () => void;
};
export default function Box({ title, isSelected = false }: BoxProps) {
  return (
    <div
     className={`bg-white border border-[#a7b1b2] h-40 w-50 flex items-center justify-center rounded-md shadow-md
              transform transition-all duration-300 hover:scale-105 cursor-pointer text-[#008992]
              ${isSelected ? "border-black scale-105" : ""}`}
>      <p className="font-semibold">{title}</p>
    </div>
  );
}
