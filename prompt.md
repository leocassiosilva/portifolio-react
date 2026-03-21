# 🔍 Guia Completo de SEO — Portfólio Francisco Leocassio da Silva

> **Stack:** React (Create React App ou Vite)  
> **Objetivo:** Emprego CLT + Freelance como Analista de Sistemas  
> **URL:** https://leocassio-silva.vercel.app/

---

## ⚠️ Problema Raiz: React Client-Side Rendering

React puro envia ao Google uma página quase vazia. O crawler precisa executar JS para ver o conteúdo, o que penaliza muito o indexamento. As correções abaixo resolvem isso **sem trocar de framework**.

---

## 📁 1. `public/index.html` — Meta Tags Completas

Substitua o conteúdo do `<head>` pelo código abaixo:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- ✅ Título principal (aparece na aba e no Google) -->
  <title>Francisco Leocassio da Silva | Analista de Sistemas</title>

  <!-- ✅ Meta Description (texto que aparece embaixo do título no Google) -->
  <meta
    name="description"
    content="Portfólio de Francisco Leocassio da Silva, Analista de Sistemas com experiência em desenvolvimento de software, análise de requisitos e soluções tecnológicas. Disponível para CLT e freelance."
  />

  <!-- ✅ Palavras-chave (menor impacto, mas ainda válido) -->
  <meta
    name="keywords"
    content="Analista de Sistemas, Francisco Leocassio, desenvolvedor, portfólio, sistemas, tecnologia, freelance"
  />

  <!-- ✅ Autor -->
  <meta name="author" content="Francisco Leocassio da Silva" />

  <!-- ✅ Indexação pelo Google -->
  <meta name="robots" content="index, follow" />

  <!-- ✅ URL canônica -->
  <link rel="canonical" href="https://leocassio-silva.vercel.app/" />

  <!-- ================================================ -->
  <!-- ✅ OPEN GRAPH (preview no WhatsApp, LinkedIn, Facebook) -->
  <!-- ================================================ -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://leocassio-silva.vercel.app/" />
  <meta property="og:title" content="Francisco Leocassio da Silva | Analista de Sistemas" />
  <meta
    property="og:description"
    content="Portfólio de Francisco Leocassio da Silva — Analista de Sistemas disponível para oportunidades CLT e freelance."
  />
  <!-- Crie uma imagem 1200x630px e coloque em public/og-image.png -->
  <meta property="og:image" content="https://leocassio-silva.vercel.app/og-image.png" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:site_name" content="Portfólio — Francisco Leocassio" />

  <!-- ================================================ -->
  <!-- ✅ TWITTER CARD (preview no Twitter/X) -->
  <!-- ================================================ -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Francisco Leocassio da Silva | Analista de Sistemas" />
  <meta
    name="twitter:description"
    content="Portfólio de Francisco Leocassio da Silva — Analista de Sistemas."
  />
  <meta name="twitter:image" content="https://leocassio-silva.vercel.app/og-image.png" />

  <!-- ================================================ -->
  <!-- ✅ TEMA E ÍCONE -->
  <!-- ================================================ -->
  <meta name="theme-color" content="#0f172a" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
</head>
```

---

## 📁 2. `public/manifest.json` — PWA e SEO Básico

```json
{
  "short_name": "Leocassio Dev",
  "name": "Francisco Leocassio da Silva | Analista de Sistemas",
  "description": "Portfólio profissional de Francisco Leocassio da Silva, Analista de Sistemas.",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#0f172a",
  "background_color": "#0f172a"
}
```

---

## 📁 3. `public/robots.txt` — Permitir o Google rastrear

```txt
User-agent: *
Allow: /

Sitemap: https://leocassio-silva.vercel.app/sitemap.xml
```

---

## 📁 4. `public/sitemap.xml` — Mapa do Site

Crie o arquivo `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://leocassio-silva.vercel.app/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

> 🔁 Atualize `<lastmod>` sempre que fizer mudanças importantes no portfólio.

---

## 📁 5. `src/` — Schema.org (JSON-LD) no React

Adicione este componente para dizer ao Google exatamente quem você é. Isso aparece em resultados enriquecidos no Google.

Crie o arquivo `src/components/SeoSchema.jsx`:

```jsx
import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Francisco Leocassio da Silva",
  "url": "https://leocassio-silva.vercel.app/",
  "jobTitle": "Analista de Sistemas",
  "description": "Analista de Sistemas com experiência em desenvolvimento de software e soluções tecnológicas. Disponível para oportunidades CLT e freelance.",
  "sameAs": [
    "https://www.linkedin.com/in/SEU-LINKEDIN-AQUI",
    "https://github.com/SEU-GITHUB-AQUI"
  ],
  "knowsAbout": [
    "Análise de Sistemas",
    "Desenvolvimento de Software",
    "React",
    "JavaScript"
  ]
};

export default function SeoSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
```

Depois adicione no seu `App.js` ou componente raiz:

```jsx
import { HelmetProvider } from 'react-helmet-async';
import SeoSchema from './components/SeoSchema';

function App() {
  return (
    <HelmetProvider>
      <SeoSchema />
      {/* resto do seu app */}
    </HelmetProvider>
  );
}
```

Instale a dependência:

```bash
npm install react-helmet-async
```

---

## 🖼️ 6. Criar a Imagem OG (Open Graph)

Para o preview funcionar no WhatsApp e LinkedIn, crie uma imagem:

- **Tamanho:** 1200 × 630 pixels
- **Conteúdo sugerido:** Seu nome, cargo "Analista de Sistemas" e URL do site
- **Ferramentas gratuitas:** [Canva](https://canva.com) ou [OG Image Generator](https://og-image.vercel.app)
- **Onde salvar:** `public/og-image.png`

---

## 🚀 7. Performance (resolver lentidão)

Adicione estas otimizações no seu código React:

### Lazy Loading de componentes pesados:
```jsx
import { lazy, Suspense } from 'react';

const Projetos = lazy(() => import('./sections/Projetos'));

// No JSX:
<Suspense fallback={<div>Carregando...</div>}>
  <Projetos />
</Suspense>
```

### Imagens com lazy load nativo:
```jsx
<img src="projeto.png" alt="Descrição do projeto" loading="lazy" />
```

---

## 📋 8. Checklist Final

Após aplicar todas as mudanças:

- [ ] `public/index.html` atualizado com todas as meta tags
- [ ] `public/manifest.json` com nome e descrição corretos
- [ ] `public/robots.txt` com Allow e link do sitemap
- [ ] `public/sitemap.xml` criado
- [ ] `public/og-image.png` criado (1200×630px)
- [ ] `react-helmet-async` instalado e `SeoSchema.jsx` criado
- [ ] Links do LinkedIn e GitHub atualizados no schema
- [ ] Deploy feito na Vercel
- [ ] Testar preview: https://www.opengraph.xyz/ (cole sua URL)
- [ ] Testar schema: https://validator.schema.org/ (cole sua URL)
- [ ] Submeter ao Google Search Console: https://search.google.com/search-console

---

## 🔗 Ferramentas de Validação

| Ferramenta | Link | Para que serve |
|---|---|---|
| Open Graph Tester | https://www.opengraph.xyz | Ver preview do WhatsApp/LinkedIn |
| Schema Validator | https://validator.schema.org | Validar JSON-LD |
| Google Search Console | https://search.google.com/search-console | Indexar no Google |
| PageSpeed Insights | https://pagespeed.web.dev | Analisar performance |
| Meta Tags Preview | https://metatags.io | Ver todas as meta tags |

---

*Guia gerado para: Francisco Leocassio da Silva — leocassio-silva.vercel.app*

