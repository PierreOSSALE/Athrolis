// components/core/ui/PhoneVideoFrame.tsx
"use client";

export default function PhoneVideoFrame({ src }: { src: string }) {
  return (
    <div className="w-[260px] h-[220px] sm:w-[300px] sm:h-[600px] rounded-3xl border-[6px] border-muted overflow-hidden bg-black relative shadow-lg">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
