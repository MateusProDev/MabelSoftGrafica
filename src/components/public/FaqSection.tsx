import { FAQ } from "@/lib/content";
import { buildWhatsAppUrl } from "@/lib/business";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-mabel">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mabel-600">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-mabel-900 sm:text-4xl">
            Antes de mandar seu arquivo
          </h2>
        </header>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-0 transition-shadow open:shadow-md"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-bold text-mabel-800 [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex-shrink-0 text-xl text-mabel-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppUrl(
              "Olá! Tenho uma dúvida sobre os serviços da Mabel Gráfica."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whats"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
