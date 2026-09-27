import type { Metadata } from "next";
import Link from "next/link";
import { SERVICOS_RAPIDOS, PERSONALIZADOS } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { buildWhatsAppUrl } from "@/lib/business";

export const metadata: Metadata = {
  title: "Todos os Serviços — Gráfica em Fortaleza",
  description:
    "Xerox, impressões, digitalização, plastificação, encadernação, boletos, currículos, cartões de visita, panfletos, adesivos, caixas de festa, apostilhas e agendas em Fortaleza.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  const baseUrl = getSiteUrl();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: baseUrl },
          { name: "Serviços", url: `${baseUrl}/servicos` },
        ]}
      />

      <section className="pt-28 pb-16 sm:pt-36">
        <div className="container-mabel">
          <nav className="mb-6 text-sm text-slate-500" aria-label="Trilha">
            <Link href="/" className="hover:text-mabel-600">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span>Serviços</span>
          </nav>

          <header className="max-w-2xl">
            <h1 className="text-3xl font-extrabold text-mabel-900 sm:text-4xl">
              Todos os serviços da Mabel Gráfica
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Do Xerox no balcão ao material personalizado da sua marca. Escolha
              o serviço para ver detalhes e pedir orçamento.
            </p>
          </header>

          <h2 className="mt-14 text-xl font-bold text-mabel-800">
            Serviços rápidos
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS_RAPIDOS.map((servico) => (
              <Link
                key={servico.slug}
                href={`/servicos/${servico.slug}`}
                className="card-service"
              >
                <h3 className="text-base font-bold text-mabel-800">
                  {servico.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {servico.description}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="mt-16 text-xl font-bold text-mabel-800">
            Personalizados
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONALIZADOS.map((item) => (
              <Link
                key={item.slug}
                href={`/servicos/${item.slug}`}
                className="card-service"
              >
                <h3 className="text-base font-bold text-mabel-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-mabel-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-mabel-900">
              Não achou o que precisa?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-600">
              Fala com a gente. A gráfica faz muita coisa além do que está listado
              aqui.
            </p>
            <a
              href={buildWhatsAppUrl(
                "Olá! Preciso de um serviço que não encontrei no site."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats mt-7"
            >
              Perguntar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
