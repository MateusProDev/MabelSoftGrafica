import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICOS_RAPIDOS, PERSONALIZADOS } from "@/lib/content";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { BUSINESS, buildWhatsAppUrl, ADDRESS_LINE } from "@/lib/business";

const ALL = [...SERVICOS_RAPIDOS, ...PERSONALIZADOS];

export function generateStaticParams() {
  return ALL.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const servico = ALL.find((item) => item.slug === params.slug);
  if (!servico) return {};

  const baseUrl = getSiteUrl();
  const url = `${baseUrl}/servicos/${servico.slug}`;

  return {
    title: `${servico.title} em Fortaleza`,
    description: servico.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: `${servico.title} — Mabel Gráfica`,
      description: servico.description,
      siteName: BUSINESS.shortName,
    },
  };
}

export default function ServicoPage({ params }: { params: { slug: string } }) {
  const servico = ALL.find((item) => item.slug === params.slug);
  if (!servico) notFound();

  const baseUrl = getSiteUrl();
  const relacionados = ALL.filter((item) => item.slug !== servico.slug).slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={`${servico.title} em Fortaleza`}
        description={servico.description}
        url={`${baseUrl}/servicos/${servico.slug}`}
        providerName={BUSINESS.name}
        providerUrl={baseUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: baseUrl },
          { name: "Serviços", url: `${baseUrl}/servicos` },
          { name: servico.title, url: `${baseUrl}/servicos/${servico.slug}` },
        ]}
      />

      <article className="pt-28 pb-20 sm:pt-36">
        <div className="container-mabel">
          <nav className="mb-6 text-sm text-slate-500" aria-label="Trilha">
            <Link href="/" className="hover:text-mabel-600">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/servicos" className="hover:text-mabel-600">
              Serviços
            </Link>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.85fr]">
            <div>
              <h1 className="text-3xl font-extrabold text-mabel-900 sm:text-4xl">
                {servico.title}{" "}
                <span className="text-mabel-600">em Fortaleza</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {servico.description}
              </p>

              <p className="mt-5 leading-relaxed text-slate-600">
                Na Mabel Gráfica você resolve isso sem burocracia e sem espera
                longa. Traga o arquivo em PDF ou imagem, ou mande pelo WhatsApp
                antes de vir — assim a gente já deixa pronto para você retirar.
                Se precisar de ajuda para montar ou ajustar o material, nossa
                equipe faz no balcão.
              </p>

              <h2 className="mt-10 text-xl font-bold text-mabel-800">
                Por que fazer aqui
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-mabel-600">✓</span>
                  Atendimento rápido, no mesmo dia para serviços de balcão
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-mabel-600">✓</span>
                  Aceitamos Pix, dinheiro e cartão
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-mabel-600">✓</span>
                  Aberto de segunda a sábado, das 08:00 às 18:00
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-mabel-600">✓</span>
                  Você pode enviar o arquivo pelo WhatsApp e só passar para retirar
                </li>
              </ul>

              <a
                href={buildWhatsAppUrl(
                  `Olá! Gostaria de um orçamento para ${servico.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whats mt-10"
              >
                Pedir orçamento de {servico.title}
              </a>
            </div>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-lg font-bold text-mabel-800">
                Onde nos encontrar
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-slate-600">
                {ADDRESS_LINE}
              </address>
              <p className="mt-4 text-sm text-slate-600">
                Seg a Sáb · 08:00 às 18:00
              </p>
              <p className="mt-1 text-sm text-slate-600">
                WhatsApp {BUSINESS.phoneDisplay}
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-mabel-800">
                Outros serviços
              </h3>
              <ul className="mt-3 space-y-2">
                {relacionados.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/servicos/${item.slug}`}
                      className="text-sm font-semibold text-mabel-600 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
