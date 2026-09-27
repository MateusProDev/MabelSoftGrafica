import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { SERVICOS_RAPIDOS } from "@/lib/content";

const nav = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mabel-950 text-white/70">
      <div className="container-mabel py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <p className="text-xl font-extrabold text-white">
              {BUSINESS.shortName}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-sand-400">
              {BUSINESS.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Gráfica rápida em Fortaleza. Impressões, Xerox, encadernação e
              materiais personalizados com agilidade e qualidade.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h2>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-sand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Serviços
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICOS_RAPIDOS.slice(0, 6).map((servico) => (
                <li key={servico.slug}>
                  <Link
                    href={`/servicos/${servico.slug}`}
                    className="transition-colors hover:text-sand-400"
                  >
                    {servico.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contato
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sand-400"
                >
                  WhatsApp {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-sand-400"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {BUSINESS.street}, {BUSINESS.number}
                <br />
                {BUSINESS.neighborhood} — {BUSINESS.city}/{BUSINESS.state}
                <br />
                CEP {BUSINESS.zip}
              </li>
              <li>
                Seg a Sáb · {BUSINESS.opens} às {BUSINESS.closes}
                <br />
                <span className="text-white/50">Domingo: fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/55">
            © {year} {BUSINESS.name}. Todos os direitos reservados. É proibida a
            reprodução total ou parcial deste site, do conteúdo e das marcas aqui
            apresentadas sem autorização prévia por escrito.
          </p>
        </div>
      </div>
    </footer>
  );
}
