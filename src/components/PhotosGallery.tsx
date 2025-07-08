"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


type ProjectGalleryProps = {
  photos: string[];
};

export default function ProjectGallery( { photos }: ProjectGalleryProps ) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-6">
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            className="rounded-lg w-full cursor-pointer object-cover"
            
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((src) => ({ src }))}
      />
    </>
  );
}
