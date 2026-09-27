import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 pt-24">
      <div className="text-center">
        <p className="text-6xl font-extrabold text-mabel-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-mabel-900">
          Página não encontrada
        </h1>
        <p className="mt-3 text-slate-600">
          O endereço que você procurou não existe. Mas a gráfica continua aberta.
        </p>
        <a href="/" className="btn-brand mt-8">
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
