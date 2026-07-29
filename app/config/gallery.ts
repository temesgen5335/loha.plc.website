import type { Locale } from "../i18n/dictionaries";

// Gallery categories. Every category renders as a filter chip even when it
// has no photos yet ("coming soon"), so new work slots in without code
// changes — drop the image in public/gallery/ and add an item below.
export const galleryCategories = [
  "led",
  "printing",
  "tshirts",
  "awards",
  "water",
  "blocks",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  category: GalleryCategory;
  caption: Record<Locale, string>;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/led-bakema-neon.jpg",
    category: "led",
    caption: {
      en: "Bake Ma Bakery — LED neon storefront sign",
      am: "ቤክ ማ ቤከሪ — LED ኒዮን የሱቅ ምልክት",
      om: "Bake Ma Bakery — mallattoo neon LED suuqii",
    },
  },
  {
    src: "/gallery/led-cosmo-lit.jpg",
    category: "led",
    caption: {
      en: "Cosmo — illuminated LED channel letters",
      am: "ኮስሞ — የበሩ LED ፊደላት",
      om: "Cosmo — qubee LED ifan",
    },
  },
  {
    src: "/gallery/led-clinic-sign.jpg",
    category: "led",
    caption: {
      en: "Dr. Darajjee Mootii Clinic — trilingual outdoor sign",
      am: "ዶ/ር ደረጄ ሞቲ ክሊኒክ — ባለሁለት ቋንቋ የውጭ ምልክት",
      om: "Kilinika Dr. Darajjee Mootii — mallattoo alaa afaan lamaa",
    },
  },
  {
    src: "/gallery/led-instyle-lightbox.jpg",
    category: "led",
    caption: {
      en: "InStyle Nails & Lash — round lightbox sign",
      am: "ኢንስታይል — ክብ ላይትቦክስ ምልክት",
      om: "InStyle — mallattoo saanduqa ifaa geengoo",
    },
  },
  {
    src: "/gallery/led-cascade-coffee.jpg",
    category: "led",
    caption: {
      en: "Cascade Coffee — 3D letters in Amharic and English",
      am: "ካስኬድ ቡና — 3D ፊደላት በአማርኛና በእንግሊዝኛ",
      om: "Cascade Coffee — qubee 3D Amaariffaa fi Ingiliffaan",
    },
  },
  {
    src: "/gallery/led-cosmo-production.jpg",
    category: "led",
    caption: {
      en: "Cosmo — acrylic letters in production at our workshop",
      am: "ኮስሞ — በመስሪያ ቤታችን በምርት ላይ ያሉ አክሪሊክ ፊደላት",
      om: "Cosmo — qubee akriiliikii warshaa keenyatti oomishamaa jiru",
    },
  },
  {
    src: "/gallery/award-glass-engraving.jpg",
    category: "awards",
    caption: {
      en: "Engraved glass recognition award (Afaan Oromoo)",
      am: "የተቀረጸ የመስታወት የእውቅና ሽልማት",
      om: "Badhaasa beekamtii birilee irratti soofame (Afaan Oromoo)",
    },
  },
];
