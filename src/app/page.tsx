import type { Metadata } from "next";
import Hero from "@/components/public/Hero";
import Servicos from "@/components/public/Servicos";
import FaqSection from "@/components/public/FaqSection";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import { BUSINESS, buildWhatsAppUrl, buildMapsUrl, ADDRESS_LINE } from "@/lib/business";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getSiteUrl();

  return {
    title: "Gráfica Rápida em Fortaleza — Xerox, Impressões e Personalizados",
    description:
      "Mabel Gráfica: Xerox, impressões, digitalização, plastificação, encadernação, cartões de visita, panfletos, adesivos e caixas de festa. Atendimento rápido no Sabiaguaba, Fortaleza.",
    keywords: [
      "gráfica rápida fortaleza",
      "xerox sabiaguaba",
      "impressão de documentos fortaleza",
      "cartão de visita fortaleza",
      "panfletos fortaleza",
      "adesivos personalizados fortaleza",
      "plastificação fortaleza",
      "encadernação apostila fortaleza",
      "caixa de decoração de festa",
      "gráfica perto de mim",
    ],
    alternates: { canonical: baseUrl },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: baseUrl,
      title: "Mabel Gráfica — Gráfica Rápida em Fortaleza",
      description:
        "Do Xerox ao material personalizado. Impressões, encadernação, cartões, panfletos e adesivos no Sabiaguaba, Fortaleza.",
      siteName: BUSINESS.shortName,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Mabel Gráfica — Impressões e Serviços Digitais",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <>
      <FAQJsonLd questions={FAQ} />

      <Hero />
      <Servicos />

      <section id="sobre" className="bg-slate-50 py-20 sm:py-24">
        <div className="container-mabel grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-mabel-600">
              Quem somos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-mabel-900 sm:text-4xl">
              Uma gráfica de bairro com estrutura de verdade
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A Mabel Gráfica é aquele lugar onde você resolve tudo numa ida só:
              imprime o documento, tira o Xerox, plastifica o certificado,
              encaderna a apostila e ainda encomenda o cartão de visita da sua
              empresa.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Atendemos no Sabiaguaba, em Fortaleza, de segunda a sábado. Se você
              prefere mandar o arquivo pelo WhatsApp e passar para retirar, é
              ainda mais rápido.
            </p>

            <a
              href={buildWhatsAppUrl("Olá! Gostaria de saber mais sobre a Mabel Gráfica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats mt-8"
            >
              Falar com a Mabel Gráfica
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h3 className="text-lg font-bold text-mabel-800">
              Onde nos encontrar
            </h3>
            <address className="mt-4 not-italic leading-relaxed text-slate-600">
              {ADDRESS_LINE}
            </address>
            <p className="mt-4 text-slate-600">
              <strong className="text-mabel-800">Horário:</strong> Seg a Sáb,{" "}
              {BUSINESS.opens} às {BUSINESS.closes}. Domingos fechado.
            </p>
            <p className="mt-2 text-slate-600">
              <strong className="text-mabel-800">Pagamento:</strong> Pix, dinheiro
              e cartão.
            </p>

            <a
              href={buildMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand mt-7 w-full"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="bg-gradient-to-br from-mabel-900 via-mabel-800 to-mabel-600 py-20 text-center text-white sm:py-24">
        <div className="container-mabel">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Precisa imprimir algo hoje?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Manda o arquivo pelo WhatsApp, confirma o serviço e passa para retirar.
            Simples assim.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppUrl(
                "Olá! Preciso imprimir um material e gostaria de um orçamento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats"
            >
              Enviar arquivo no WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="btn-brand border border-white/35 !bg-white/10 !bg-none backdrop-blur"
            >
              Ligar {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Atendimento presencial em Fortaleza e serviços online para todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}
