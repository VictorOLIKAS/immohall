'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';

type ListingGalleryProps = {
  images: string[];
  title: string;
};

export default function ListingGallery({ images, title }: ListingGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((i) => (i + 1) % images.length);
  const prev = () => setActiveIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="space-y-3">
      {/* صورة كبيرة */}
      <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden 
                      bg-navy-100 group">
        <Image
          src={images[activeIdx]}
          alt={`${title} - Photo ${activeIdx + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />

        {/* أزرار التنقل */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 
                         bg-white/90 hover:bg-white rounded-full flex items-center 
                         justify-center shadow-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Photo précédente"
            >
              <ChevronLeft size={20} className="text-navy-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 
                         bg-white/90 hover:bg-white rounded-full flex items-center 
                         justify-center shadow-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Photo suivante"
            >
              <ChevronRight size={20} className="text-navy-700" />
            </button>
          </>
        )}

        {/* أزرار الإجراءات */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            className="w-10 h-10 bg-white/90 hover:bg-white rounded-full 
                       flex items-center justify-center shadow-lg transition"
            aria-label="Ajouter aux favoris"
          >
            <Heart size={16} className="text-navy-700" />
          </button>
          <button
            className="w-10 h-10 bg-white/90 hover:bg-white rounded-full 
                       flex items-center justify-center shadow-lg transition"
            aria-label="Partager"
          >
            <Share2 size={16} className="text-navy-700" />
          </button>
        </div>

        {/* عدد الصور */}
        <div className="absolute bottom-3 right-3 bg-navy-900/80 text-white 
                        text-xs px-3 py-1.5 rounded-full">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* الصور المصغرة */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative h-20 rounded-lg overflow-hidden transition ${
                i === activeIdx
                  ? 'ring-2 ring-orange-500'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`Miniature ${i + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}