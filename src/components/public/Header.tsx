"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/business";

const nav = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container-mabel flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label={`${BUSINESS.shortName} — página inicial`}
        >
          <span className="text-lg font-extrabold tracking-tight text-mabel-800">
            {BUSINESS.shortName}
          </span>
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-mabel-600">
            Impressões &amp; Serviços Digitais
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-mabel-50 text-mabel-700"
                    : "text-mabel-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={buildWhatsAppUrl(
              "Olá! Vi o site da Mabel Gráfica e gostaria de um orçamento."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-mabel-800 md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-3 md:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-semibold text-mabel-900 transition-colors hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppUrl("Olá! Gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-gradient-to-br from-green-500 to-emerald-700 px-5 py-3.5 text-center font-bold text-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
