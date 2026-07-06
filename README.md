# Rio Clube Handebol — Landing Page

Landing page institucional do Rio Clube Handebol (Rio do Sul/SC), com apresentação do time, histórico do projeto, treinos, galeria de fotos, apoiadores e contato.

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (configuração via CSS em `app/globals.css`, sem `tailwind.config.js`)
- **Framer Motion** — animações de entrada/scroll
- **Embla Carousel** — carrosséis (galeria, time, apoiadores)
- **next-themes** — suporte a tema claro/escuro
- **Lucide React** — ícones
- **Vercel Analytics**

## Estrutura do projeto

```
app/
  layout.tsx        # layout raiz, fontes (Inter/Playfair Display), tema, analytics
  page.tsx           # composição das seções da landing page
  globals.css        # design tokens (cores, breakpoints) e estilos globais

components/
  theme-provider.tsx # provider de tema (next-themes)
  theme-toggle.tsx    # botão de alternância claro/escuro
  ui/
    button.tsx        # componente Button (shadcn-style)
    card.tsx           # componente Card / CardContent
  landing/
    header.tsx          # cabeçalho fixo com navegação
    hero-section.tsx     # seção inicial
    about-section.tsx     # sobre o projeto
    history-section.tsx    # linha do tempo do clube
    team-section.tsx        # equipe/comissão técnica
    training-section.tsx     # locais e horários de treino
    gallery-section.tsx       # galeria de fotos com carrossel
    instagram-section.tsx      # feed do Instagram (widget Behold)
    partners-section.tsx       # apoiadores/parceiros
    realization-section.tsx     # realização/apoio institucional
    contact-section.tsx          # contato
    footer.tsx                    # rodapé

public/
  images/            # imagens estáticas usadas nas seções
```

## Notas de implementação

- **Imagens**: `next/image` está configurado com `unoptimized: true` em `next.config.mjs`, então as imagens em `public/images` são servidas como estão, sem otimização automática do Next.
- **Fontes**: carregadas via `next/font/google` (Inter e Playfair Display) em `app/layout.tsx` — exigem acesso à internet durante o build para buscar os arquivos de fonte do Google Fonts.
- **Tema claro/escuro**: gerenciado pelo `next-themes`, com toggle no header (`theme-toggle.tsx`).
- **Breakpoint customizado**: o breakpoint `md` foi ajustado para `730px` (em vez do padrão `768px` do Tailwind) — definido em `app/globals.css` via `--breakpoint-md`.
- **Instagram**: o feed é embutido via widget da [Behold](https://behold.so/), carregado por `<Script>` em `instagram-section.tsx`.

## Deploy

Projeto em produção pela [Vercel](https://vercel.com/).
- https://rioclubehandebol.vercel.app/

## Interfaces

<img width="1080" height="1350" alt="Rio clube handebol (1)" src="https://github.com/user-attachments/assets/4c8af8ba-2696-4093-8a84-044d3aabc5ff" />
