import { buildWhatsAppUrl } from "@/lib/business";
import { NUMEROS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-mabel-900 via-mabel-800 to-mabel-600 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      {/* Brilho decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mabel-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sand-400/10 blur-3xl"
      />

      <div className="container-mabel relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.6rem]">
            Gráfica rápida com tudo o que você precisa em{" "}
            <span className="bg-gradient-to-r from-sand-400 to-white bg-clip-text text-transparent">
              um só lugar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Xerox, impressões, plastificação, encadernação, currículos, boletos
            e materiais personalizados como cartões, panfletos, adesivos e caixas
            de festa. Agilidade de balcão e atendimento por WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
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

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {NUMEROS.map((item) => (
              <div key={item.label}>
                <dt className="text-3xl font-extrabold text-sand-400">
                  {item.prefix}
                  {item.value}
                  {item.suffix}
                </dt>
                <dd className="mt-1 text-sm text-white/75">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
