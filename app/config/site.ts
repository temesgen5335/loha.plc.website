// Central site configuration. Edit values here — contact details, social
// links and the map location — and every page section updates.

export const site = {
  phones: {
    telephone: "011883939435",
    mobiles: ["+251 911 878 237", "+251 910 798 074"],
  },
  email: "loha.advertsing9247@gmail.com",
  whatsapp: "251911878237",

  // Social profiles. "#" renders the icon as a placeholder until the real
  // profile URL is added.
  socials: {
    telegram: "https://t.me/ORGANITHATION",
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },

  // Map location. To change the address later:
  // 1. Open the place in Google Maps and copy the share link into shareUrl.
  // 2. Right-click the place on the map, copy the coordinates, and paste
  //    them into lat/lng below. The embed updates automatically.
  map: {
    shareUrl: "https://maps.app.goo.gl/enoURCNMMCrPQq1q9",
    lat: 8.9151114,
    lng: 38.8214333,
    zoom: 16,
  },
} as const;

export function mapEmbedUrl() {
  const { lat, lng, zoom } = site.map;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}
