"use client";
// components/ui/SafeImage.tsx
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackIcon?: React.ReactNode;
}

export default function SafeImage({ src, alt, fallbackIcon, className, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-300 rounded-2xl ${className ?? ""}`}
        aria-label={alt as string}
      >
        {fallbackIcon ?? <ImageOff size={40} className="opacity-50" />}
        <span className="text-xs mt-2 opacity-60 text-center px-2">{alt as string}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
