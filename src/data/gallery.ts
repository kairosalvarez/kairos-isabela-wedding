export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const gallery: GalleryImage[] = Array.from(
  { length: 12 },
  (_, index) => ({
    id: index + 1,
    src: `/images/gallery/${index + 1}.webp`,
    alt: `Kairos e Isabela ${index + 1}`,
  })
);