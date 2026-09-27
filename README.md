# Site — Mabel Gráfica

Site institucional da **Mabel Gráfica Impressões e Serviços Digitais**, gráfica rápida
em Fortaleza (Sabiaguaba). Construído em **Next.js 14 (App Router) + TypeScript +
Tailwind CSS**, com foco em SEO local.

## Rodar o projeto

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz (não versionado):

```env
# URL pública do site (sem barra no final)
NEXT_PUBLIC_APP_URL=https://seudominio.com.br

# Opcional: Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Opcional: verificação do Google Search Console
GOOGLE_SITE_VERIFICATION=seu-codigo
```

Sem `NEXT_PUBLIC_APP_URL`, o site assume `https://mabelgrafica.com.br`.

## Onde ficam os dados do negócio

**Um único arquivo:** `src/lib/business.ts`.

Telefone, endereço, horário e coordenadas saem de lá e alimentam o site, o
JSON-LD e os links de WhatsApp. Para mudar o número em todo o site, edite
`phoneRaw` e `phoneDisplay` nesse arquivo.

Os serviços e as perguntas frequentes ficam em `src/lib/content.ts`.

## SEO implementado

- `metadata` completo no `layout.tsx` — title template, OpenGraph, Twitter card,
  canonical e diretivas de robots com `max-image-preview: large`
- **JSON-LD**: `LocalBusiness` (com endereço, geo, horário e formas de pagamento),
  `WebSite`, `FAQPage`, `Service` e `BreadcrumbList`
- `robots.ts` e `sitemap.ts` nativos do App Router
- Páginas de serviço geradas estaticamente em `/servicos/[slug]`
- Meta tags de geolocalização (`geo.region`, `geo.position`, `ICBM`)
- Headers de segurança e formatos de imagem AVIF/WebP no `next.config.js`
- `robots.txt` e `manifest.json` em `public/`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Metadata global + JSON-LD + Header/Footer
│   ├── page.tsx            # Home
│   ├── globals.css         # Tailwind + tokens de marca
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── not-found.tsx
│   ├── servicos/
│   │   ├── page.tsx        # Lista de serviços
│   │   └── [slug]/page.tsx # Página individual de cada serviço
│   ├── sobre/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── public/             # Header, Hero, Servicos, FaqSection, Footer, WhatsAppFloat
│   └── seo/JsonLd.tsx      # Todos os schemas
└── lib/
    ├── business.ts         # Dados do negócio
    ├── content.ts          # Serviços, FAQ, números
    ├── site-url.ts
    └── cn.ts
```

## Pendências para publicar

- [ ] Trocar `BUSINESS.email` em `src/lib/business.ts` pelo e-mail real
- [ ] Ajustar as coordenadas de latitude/longitude para o ponto exato da loja
- [ ] Adicionar `public/og-image.png` (1200x630) para o compartilhamento em redes
- [ ] Adicionar `public/icon-192.png` e `public/icon-512.png` para o PWA
- [ ] Confirmar o domínio final em `src/lib/site-url.ts` e `public/robots.txt`
