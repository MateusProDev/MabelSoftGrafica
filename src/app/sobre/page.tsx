import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { BUSINESS, buildWhatsAppUrl, ADDRESS_LINE, buildMapsUrl } from "@/lib/business";

export const metadata: Metadata = {
  title: "Sobre a Mabel Gráfica",
  description:
    "Conheça a Mabel Gráfica, gráfica rápida no Sabiaguaba, Fortaleza. Impressões, Xerox, encadernação e materiais personalizados com atendimento ágil.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  const baseUrl = getSiteUrl();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: baseUrl },
          { name: "Sobre", url: `${baseUrl}/sobre` },
        ]}
      />

      <section className="pt-28 pb-20 sm:pt-36">
        <div className="container-mabel">
          <nav className="mb-6 text-sm text-slate-500" aria-label="Trilha">
            <Link href="/" className="hover:text-mabel-600">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span>Sobre</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.85fr]">
            <div>
              <h1 className="text-3xl font-extrabold text-mabel-900 sm:text-4xl">
                Sobre a Mabel Gráfica
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                A Mabel Gráfica nasceu de uma ideia simples: num bairro, você não
                deveria precisar rodar a cidade para resolver coisas pequenas.
                Imprimir um documento, tirar um Xerox, plastificar um certificado,
                encadernar uma apostila, emitir a segunda via de um boleto.
              </p>

              <p className="mt-5 leading-relaxed text-slate-600">
                Reunimos no mesmo balcão os serviços de impressão do dia a dia e
                a produção de material gráfico personalizado — cartões de visita,
                panfletos, adesivos, caixas de decoração de festa, apostilhas,
                livretos, agendas e itens sob medida para a sua marca.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-mabel-900">
                O que muda quando você imprime com a gente
              </h2>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold text-mabel-800">
                    Resolve na hora, não amanhã
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Nada de fila. O serviço é feito enquanto você espera, e o que
                    precisa de produção é combinado com prazo claro desde o
                    primeiro contato.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold text-mabel-800">
                    Ajuda de verdade para montar
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Se o seu arquivo não está pronto, a gente ajusta. Montar a
                    arte, corrigir a margem, preparar para impressão — isso faz
                    parte do atendimento.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold text-mabel-800">
                    Serviços digitais também
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Além de papel, ajudamos com serviços online: agendamentos,
                    cadastros, inscrições e envio de documentos. Muita gente
                    precisa de uma mão nessa parte.
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl("Olá! Gostaria de conhecer melhor a Mabel Gráfica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whats mt-10"
              >
                Falar com a gente
              </a>
            </div>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-lg font-bold text-mabel-800">Informações</h2>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-mabel-800">Endereço</dt>
                  <dd className="mt-1 text-slate-600">{ADDRESS_LINE}</dd>
                </div>
                <div>
                  <dt className="font-bold text-mabel-800">Horário</dt>
                  <dd className="mt-1 text-slate-600">
                    Seg a Sáb, 08:00 às 18:00
                    <br />
                    Domingo: fechado
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-mabel-800">WhatsApp</dt>
                  <dd className="mt-1 text-slate-600">{BUSINESS.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="font-bold text-mabel-800">Pagamento</dt>
                  <dd className="mt-1 text-slate-600">
                    Pix, dinheiro e cartão
                  </dd>
                </div>
              </dl>

              <a
                href={buildMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand mt-7 w-full"
              >
                Ver no Maps
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
