// Central site configuration. Edit values here — contact details, social
// links and the map location — and every page section updates.

export const site = {
  phones: {
    telephone: "011883939435",
    mobiles: [
      "+251 911 878 237",
      "+251 911 324 642",
      "+251 944 110 922",
      "+251 910 798 074",
    ],
  },
  email: "loha.advertsing9247@gmail.com",
  whatsapp: "251911878237",

  // Social profiles. "#" renders the icon as a placeholder until the real
  // profile URL is added.
  socials: {
    telegram: "https://t.me/Lohaadvert",
    tiktok: "https://www.tiktok.com/@lohaprint",
    facebook: "#",
    instagram: "#",
  },

  // Map location. To change the address later:
  // 1. Open the place in Google Maps and copy the share link into shareUrl.
  // 2. Put the place name/address into placeQuery (exactly as Google Maps
  //    shows it). The embed pins it automatically.
  // 3. If the place has no Google Maps listing, clear placeQuery ("") and
  //    fill lat/lng instead (right-click the map → copy coordinates).
  map: {
    shareUrl: "https://maps.app.goo.gl/8UXP5MxEhQcMLZFg8",
    placeQuery: "Awash Bank Sebeta, Abrar Building, Sebeta",
    lat: 8.9129101,
    lng: 38.627294,
    zoom: 16,
  },
} as const;

export function mapEmbedUrl() {
  const { placeQuery, lat, lng, zoom } = site.map;
  const q = placeQuery ? encodeURIComponent(placeQuery) : `${lat},${lng}`;
  return `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
}
