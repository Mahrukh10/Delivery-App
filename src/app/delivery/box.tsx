"use client";
type BoxProps = {
  title: string;
};
export default function Box({ title }: BoxProps) {
  return (
   <div className="bg-white border border-black h-40 flex items-center justify-center rounded-md shadow-md">
      <p className="font-semibold">{title}</p>
    </div>
  );
}