const fallbackUrl = "https://mabelgrafica.com.br";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

  if (!configured || configured.includes("seu-dominio.vercel.app")) {
    return fallbackUrl;
  }

  return configured;
}
