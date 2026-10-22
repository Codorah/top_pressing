"use client";
// components/ui/Typewriter.tsx
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

export default function Typewriter({
  words = ["haute performance.", "clé en main.", "pour les hôtels.", "pour votre pressing."],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 2000,
  className = "",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState(words[0] || "haute performance.");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayed.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={`inline-flex items-center text-[#F5A524] ${className}`}>
      <span>{displayed}</span>
      <span
        className="inline-block w-[3px] h-[1em] bg-[#F5A524] ml-1.5 align-middle"
        style={{
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}
