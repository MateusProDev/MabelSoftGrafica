import { BUSINESS, buildWhatsAppUrl, buildMapsUrl, ADDRESS_LINE } from "@/lib/business";
import { NUMEROS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-mabel-900 via-mabel-800 to-mabel-600 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mabel-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sand-400/10 blur-3xl"
      />

      <div className="container-mabel relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Aberto de segunda a sábado · Sabiaguaba, Fortaleza
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Gráfica rápida com tudo o que você precisa em{" "}
              <span className="bg-gradient-to-r from-sand-400 to-white bg-clip-text text-transparent">
                um só lugar
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/85">
              Xerox, impressões, plastificação, encadernação, currículos, boletos
              e materiais personalizados como cartões, panfletos, adesivos e caixas
              de festa. Agilidade de balcão e atendimento por WhatsApp.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl(
                  "Olá! Vi o site da Mabel Gráfica e gostaria de fazer um orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whats"
              >
                Pedir orçamento no WhatsApp
              </a>
              <a
                href="#servicos"
                className="btn-brand border border-white/30 !bg-white/10 !bg-none backdrop-blur"
              >
                Ver todos os serviços
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {NUMEROS.map((item) => (
                <div key={item.label}>
                  <dt className="text-3xl font-extrabold text-sand-400">
                    {item.value}
                    {item.suffix}
                  </dt>
                  <dd className="mt-1 text-sm text-white/75">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="rounded-3xl bg-white p-7 text-mabel-900 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Fale com a gente
            </p>
            <p className="mt-2 text-3xl font-extrabold text-mabel-800">
              {BUSINESS.phoneDisplay}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-mabel-600">✓</span>
                <span>Xerox, impressão e digitalização na hora</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-mabel-600">✓</span>
                <span>Cartões, panfletos, adesivos e personalizados</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-mabel-600">✓</span>
                <span>Manda o arquivo pelo WhatsApp e passa para retirar</span>
              </li>
            </ul>

            <a
              href={buildMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 transition-colors hover:bg-slate-100"
            >
              <strong className="block text-mabel-800">Como chegar</strong>
              {ADDRESS_LINE}
            </a>

            <p className="mt-5 text-center text-xs text-slate-500">
              Aceitamos Pix, dinheiro e cartão.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
