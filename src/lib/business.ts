/**
 * Fonte unica de verdade dos dados do negocio.
 * Tudo que aparece no site, no JSON-LD e no WhatsApp sai daqui.
 */

export const BUSINESS = {
  name: "Mabel Gráfica Impressões e Serviços Digitais",
  shortName: "Mabel Gráfica",
  tagline: "Impressões & Serviços Digitais",

  phoneDisplay: "(85) 9834-1078",
  phoneRaw: "558598341078",
  phoneIntl: "+558598341078",
  email: "contato@mabelgrafica.com.br",

  street: "R. Terra das Flôres",
  number: "1249",
  neighborhood: "Sabiaguaba",
  city: "Fortaleza",
  state: "CE",
  zip: "60835-225",
  country: "BR",

  latitude: "-3.7869",
  longitude: "-38.4349",

  opens: "08:00",
  closes: "18:00",
  closedOn: "Domingo",

  mapsQuery: "R.+Terra+das+Flores,+1249+-+Sabiaguaba,+Fortaleza+-+CE,+60835-225",
} as const;

export const ADDRESS_LINE = `${BUSINESS.street}, ${BUSINESS.number} — ${BUSINESS.neighborhood}, ${BUSINESS.city} - ${BUSINESS.state}, ${BUSINESS.zip}`;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${BUSINESS.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${BUSINESS.mapsQuery}`;
}
