"use client";
type BoxProps = {
  title: string;
};
export default function Box({ title }: BoxProps) {
  return (
    <div
      className="bg-white border border-[#a7b1b2] h-50 w-50 flex items-center justify-center rounded-md shadow-md
                    transform transition-all duration-300 hover:scale-105 hover:border-black cursor-pointer text-[#008992]"
    >
      <p className="font-semibold">{title}</p>
    </div>
  );
}
