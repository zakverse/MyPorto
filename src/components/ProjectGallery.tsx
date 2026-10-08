"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  projectTitle: string;
}

export function ProjectGallery({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  projectTitle,
}: ProjectGalleryProps) {
  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshot preview`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between text-zinc-300 py-2 px-1 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white tracking-wide">
              {projectTitle}
            </span>
            {images.length > 1 && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-zinc-800 text-zinc-300">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <img
            src={currentImage}
            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain select-none"
          />

          {/* Prev / Next controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnail Strip (if multiple images) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto max-w-full py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                aria-label={`Select screenshot ${idx + 1}`}
                className={`relative w-16 h-12 rounded-sm overflow-hidden border transition-all ${
                  idx === currentIndex
                    ? "border-white ring-1 ring-white"
                    : "border-zinc-700 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
