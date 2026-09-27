import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { BUSINESS, buildWhatsAppUrl, buildMapsUrl, ADDRESS_LINE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contato — Gráfica no Sabiaguaba, Fortaleza",
  description:
    "Fale com a Mabel Gráfica pelo WhatsApp (85) 9834-1078. R. Terra das Flôres, 1249, Sabiaguaba, Fortaleza-CE. Aberto de segunda a sábado.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const baseUrl = getSiteUrl();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: baseUrl },
          { name: "Contato", url: `${baseUrl}/contato` },
        ]}
      />

      <section className="pt-28 pb-20 sm:pt-36">
        <div className="container-mabel">
          <nav className="mb-6 text-sm text-slate-500" aria-label="Trilha">
            <Link href="/" className="hover:text-mabel-600">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span>Contato</span>
          </nav>

          <header className="max-w-2xl">
            <h1 className="text-3xl font-extrabold text-mabel-900 sm:text-4xl">
              Fale com a Mabel Gráfica
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              O jeito mais rápido é pelo WhatsApp: manda seu arquivo, confirma o
              serviço e só passa para retirar. Também atendemos no balcão e por
              e-mail.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="font-bold text-mabel-800">WhatsApp</h2>
              <p className="mt-2 text-sm text-slate-600">
                Resposta rápida em horário comercial.
              </p>
              <p className="mt-3 text-xl font-extrabold text-mabel-700">
                {BUSINESS.phoneDisplay}
              </p>
              <a
                href={buildWhatsAppUrl("Olá! Gostaria de fazer um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whats mt-5 w-full !py-3 !text-sm"
              >
                Abrir conversa
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="font-bold text-mabel-800">Telefone</h2>
              <p className="mt-2 text-sm text-slate-600">
                Para falar direto com a gráfica.
              </p>
              <p className="mt-3 text-xl font-extrabold text-mabel-700">
                {BUSINESS.phoneDisplay}
              </p>
              <a
                href={`tel:${BUSINESS.phoneIntl}`}
                className="btn-brand mt-5 w-full !py-3 !text-sm"
              >
                Ligar agora
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="font-bold text-mabel-800">E-mail</h2>
              <p className="mt-2 text-sm text-slate-600">
                Para orçamentos e arquivos maiores.
              </p>
              <p className="mt-3 break-all text-sm font-bold text-mabel-700">
                {BUSINESS.email}
              </p>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="btn-brand mt-5 w-full !py-3 !text-sm"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-mabel-900">
                Endereço e horário
              </h2>
              <address className="mt-4 not-italic leading-relaxed text-slate-600">
                {ADDRESS_LINE}
              </address>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Segunda a Sexta</dt>
                  <dd className="font-bold text-mabel-800">08:00 – 18:00</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Sábado</dt>
                  <dd className="font-bold text-mabel-800">08:00 – 18:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Domingo</dt>
                  <dd className="font-bold text-slate-400">Fechado</dd>
                </div>
              </dl>

              <p className="mt-6 text-sm text-slate-600">
                <strong className="text-mabel-800">Pagamento:</strong> Pix,
                dinheiro e cartão.
              </p>

              <a
                href={buildMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand mt-7"
              >
                Traçar rota no Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <iframe
                title="Localização da Mabel Gráfica no mapa"
                src={`https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[320px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
