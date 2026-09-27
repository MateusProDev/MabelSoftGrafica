import Link from "next/link";
import { SERVICOS_RAPIDOS, PERSONALIZADOS } from "@/lib/content";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="container-mabel">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mabel-600">
            Serviços rápidos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-mabel-900 sm:text-4xl">
            Resolvemos no balcão, na hora
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Do Xerox à segunda via de boleto. Se você precisa de algo impresso ou
            digitalizado hoje, é aqui.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS_RAPIDOS.map((servico) => (
            <Link
              key={servico.slug}
              href={`/servicos/${servico.slug}`}
              className="card-service group"
            >
              <h3 className="text-lg font-bold text-mabel-800">
                {servico.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {servico.description}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-mabel-600 transition-transform group-hover:translate-x-1">
                Saber mais →
              </span>
            </Link>
          ))}
        </div>

        <header className="mx-auto mb-14 mt-24 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mabel-600">
            Personalizados
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-mabel-900 sm:text-4xl">
            Material com a cara do seu negócio
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cartões, panfletos, adesivos, caixas de festa, apostilhas e agendas.
            A gente ajuda a montar a arte também.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERSONALIZADOS.map((item) => (
            <Link
              key={item.slug}
              href={`/servicos/${item.slug}`}
              className="card-service group"
            >
              <h3 className="text-lg font-bold text-mabel-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-mabel-600 transition-transform group-hover:translate-x-1">
                Saber mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
