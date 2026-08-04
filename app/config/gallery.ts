import type { Locale } from "../i18n/dictionaries";

// Gallery categories. Every category renders as a filter chip even when it
// has no photos yet ("coming soon"), so new work slots in without code
// changes — drop the image in public/gallery/ and add an item below.
export const galleryCategories = [
  "led",
  "printing",
  "tshirts",
  "awards",
  "equipment",
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
    src: "/gallery/led-mayor-office.jpg",
    category: "led",
    caption: {
      en: "Office of the Mayor, Addis Ababa — backlit lobby crest",
      am: "የአዲስ አበባ ከንቲባ ጽህፈት ቤት — ከኋላ የሚበራ አርማ",
      om: "Waajjira Kantiibaa Finfinnee — asxaa duubaan ifu",
    },
  },
  {
    src: "/gallery/led-kilinkayaala-clinic.jpg",
    category: "led",
    caption: {
      en: "Kilinkayaala Ijaa Faamilii — illuminated clinic sign in Afaan Oromoo and Amharic",
      am: "ፋሚሊ የአይን ህክምና ክሊኒክ — በኦሮምኛና በአማርኛ የበራ ምልክት",
      om: "Kilinkayaala Ijaa Faamilii — mallattoo ifu Afaan Oromoo fi Amaariffaan",
    },
  },
  {
    src: "/gallery/led-ethiopian-cargo.jpg",
    category: "led",
    caption: {
      en: "Ethiopian Cargo & Logistics Services — backlit channel letters",
      am: "የኢትዮጵያ ካርጎና ሎጂስቲክስ አገልግሎት — ከኋላ የሚበሩ ፊደላት",
      om: "Ethiopian Cargo & Logistics — qubee duubaan ifu",
    },
  },
  {
    src: "/gallery/led-tailor-lit.jpg",
    category: "led",
    caption: {
      en: "Traditional clothing tailor — illuminated LED sign",
      am: "የባህል ልብስ ስፌት ቤት — የበራ LED ምልክት",
      om: "Mana hodhaa huccuu aadaa — mallattoo LED ifu",
    },
  },
  {
    src: "/gallery/led-natsii-cosmetics.jpg",
    category: "led",
    caption: {
      en: "Natsii Cosmetics — 3D storefront sign in Afaan Oromoo and Amharic",
      am: "ነጺ ኮስሞቲክስ — 3D የሱቅ ምልክት በኦሮምኛና በአማርኛ",
      om: "Koosmootiksii Natsii — mallattoo suuqii 3D Afaan Oromoo fi Amaariffaan",
    },
  },
  {
    src: "/gallery/led-khalid-bakery.jpg",
    category: "led",
    caption: {
      en: "Khalid Bakery — storefront sign with 3D letters",
      am: "ካሊድ ቤከሪ — 3D ፊደላት ያሉት የሱቅ ምልክት",
      om: "Khalid Bakery — mallattoo suuqii qubee 3D qabu",
    },
  },
  {
    src: "/gallery/led-desalegn-bar.jpg",
    category: "led",
    caption: {
      en: "Desalegn Bar & Restaurant — 3D letter signboard",
      am: "ደሳለኝ ሥጋ ቤት ባርና ሬስቶራንት — 3D ፊደላት ሰሌዳ",
      om: "Desalegn Bar & Restaurant — gabatee qubee 3D",
    },
  },
  {
    src: "/gallery/led-shaggar-city.jpg",
    category: "led",
    caption: {
      en: "Shaggar City, Sebeta Sub-city Administration — gate signboard",
      am: "ሸገር ከተማ ሰበታ ክፍለ ከተማ አስተዳደር — የበር ሰሌዳ",
      om: "Magaalaa Shaggar, Kutaa Magaalaa Sabbataa — gabatee balbalaa",
    },
  },
  {
    src: "/gallery/led-letters-fabrication.jpg",
    category: "led",
    caption: {
      en: "Stainless channel letters and LED modules during fabrication",
      am: "በስራ ላይ ያሉ የብረት ፊደላትና LED ሞጁሎች",
      om: "Qubeewwan sibiilaa fi moojulii LED hojii irra jiran",
    },
  },
  {
    src: "/gallery/printing-diredawa-totes.jpg",
    category: "printing",
    caption: {
      en: "Dire Dawa Administration — printed promotional tote bags",
      am: "የድሬዳዋ አስተዳደር — የታተሙ ማስተዋወቂያ ቦርሳዎች",
      om: "Bulchiinsa Dire Dawaa — korojoo beeksisaa maxxanfame",
    },
  },
  {
    src: "/gallery/printing-totes-lineart.jpg",
    category: "printing",
    caption: {
      en: "Custom tote bags with line-art prints",
      am: "በተፈለገው ዲዛይን የታተሙ ቦርሳዎች",
      om: "Korojoo dizaayinii barbaadameen maxxanfame",
    },
  },
  {
    src: "/gallery/printing-certificates-framed.jpg",
    category: "printing",
    caption: {
      en: "Framed certificates produced in bulk",
      am: "በጅምላ የተዘጋጁ ፍሬም ያላቸው ሰርተፍኬቶች",
      om: "Sartifikeetota jumlaan qophaa'an fireemii waliin",
    },
  },
  {
    src: "/gallery/printing-event-caps.jpg",
    category: "printing",
    caption: {
      en: "Printed event caps — Tullu Boolloo city bazaar",
      am: "የታተሙ የዝግጅት ኮፍያዎች — የቱሉ ቦሎ ከተማ ባዛር",
      om: "Koofiyyaa sagantaa maxxanfame — baazaarii magaalaa Tullu Boolloo",
    },
  },
  {
    src: "/gallery/tshirt-irreecha.jpg",
    category: "tshirts",
    caption: {
      en: "Irreecha festival t-shirt with custom print",
      am: "የኢሬቻ በዓል ቲሸርት በልዩ ህትመት",
      om: "Tishartii ayyaana Irreechaa maxxansa addaatiin",
    },
  },
  {
    src: "/gallery/tshirt-bmet-red.jpg",
    category: "tshirts",
    caption: {
      en: "BMET Electrical — branded staff polos",
      am: "BMET — የሰራተኞች መለያ ፖሎ ቲሸርቶች",
      om: "BMET Electrical — poloo hojjettootaa braandii qabu",
    },
  },
  {
    src: "/gallery/tshirt-school-batch.jpg",
    category: "tshirts",
    caption: {
      en: "Bulk education campaign shirts on the press",
      am: "በጅምላ የታተሙ የትምህርት ዘመቻ ቲሸርቶች",
      om: "Tishartii duula barnootaa jumlaan maxxanfaman",
    },
  },
  {
    src: "/gallery/tshirt-egeo-traffic.jpg",
    category: "tshirts",
    caption: {
      en: "Traffic-safety campaign t-shirt in two languages",
      am: "የትራፊክ ደህንነት ዘመቻ ቲሸርት በሁለት ቋንቋ",
      om: "Tishartii duula nageenya tiraafikaa afaan lamaan",
    },
  },
  {
    src: "/gallery/award-glass-trophies.jpg",
    category: "awards",
    caption: {
      en: "Crystal glass awards ready for delivery",
      am: "ለርክክብ የተዘጋጁ የመስታወት ሽልማቶች",
      om: "Badhaasota birilee geejjibaaf qophaa'an",
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
  {
    src: "/gallery/award-brass-tags.jpg",
    category: "awards",
    caption: {
      en: "Engraved brass staff name tags",
      am: "የተቀረጹ የናስ የሰራተኛ መለያዎች",
      om: "Mallattoo maqaa hojjettootaa naasii irratti soofame",
    },
  },
  {
    src: "/gallery/equipment-banner-printing.jpg",
    category: "equipment",
    caption: {
      en: "Wide-format printer running banners in our own workshop",
      am: "በራሳችን መስሪያ ቤት ባነር እያተመ ያለ ሰፊ ማተሚያ ማሽን",
      om: "Maashinii maxxansaa bal'aa warshaa keenya keessatti baanarii maxxansaa jiru",
    },
  },
  {
    src: "/gallery/equipment-wideformat-printer.jpg",
    category: "equipment",
    caption: {
      en: "Large-format printer for banners, mesh and outdoor prints",
      am: "ለባነር፣ ለሜሽና ለውጭ ህትመቶች የሚያገለግል ሰፊ ማተሚያ",
      om: "Maashinii maxxansaa bal'aa baanarii, meeshii fi maxxansa alaatiif",
    },
  },
  {
    src: "/gallery/equipment-uv-and-laser.jpg",
    category: "equipment",
    caption: {
      en: "UV printer and CNC laser cutter on our production floor",
      am: "በምርት ክፍላችን ውስጥ ያሉ የUV ማተሚያና CNC ሌዘር መቁረጫ",
      om: "Maashinii maxxansaa UV fi muraa leezerii CNC bakka oomishaa keenyatti",
    },
  },
  {
    src: "/gallery/equipment-laser-cutter.jpg",
    category: "equipment",
    caption: {
      en: "CNC laser cutter used for signage, letters and engraving",
      am: "ለምልክት፣ ለፊደላትና ለቅርጻ ስራ የሚያገለግል CNC ሌዘር መቁረጫ",
      om: "Muraa leezerii CNC mallattoo, qubee fi soofuuf oolu",
    },
  },
];
