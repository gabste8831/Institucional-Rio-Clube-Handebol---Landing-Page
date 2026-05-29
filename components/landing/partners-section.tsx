"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const currentPartners = [
  { name: "FMD Rio do Sul", logo: "/images/fmd.png", type: "Institucional", darkInvert: true },
  { name: "Prefeitura de Rio do Sul", logo: "/images/prefeitura.png", type: "Governamental", darkInvert: true },
  { name: "Empresa Parceira 1", logo: "/images/sponsor1.png", type: "Patrocinador", darkInvert: false },
  { name: "Empresa Parceira 2", logo: "/images/sponsor2.png", type: "Apoiador", darkInvert: false },
]

// Fallback component to render an elegant badge if PNG logo doesn't exist yet
const PartnerLogo = ({ partner }: { partner: typeof currentPartners[0] }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError || !partner.logo) {
    return (
      <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted-foreground/5 border border-border/50 text-muted-foreground/60 select-none mx-2">
        <Building2 className="h-4 w-4" />
        <span className="font-sans font-semibold text-[11px] tracking-wider uppercase whitespace-nowrap">{partner.name}</span>
      </div>
    )
  }

  return (
    <div className="h-16 flex items-center justify-center px-6">
      <img
        src={partner.logo}
        alt={partner.name}
        onError={() => setHasError(true)}
        className={`h-10 w-auto max-w-[150px] object-contain grayscale opacity-60 dark:opacity-45 hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100 transition-all duration-300 ${partner.darkInvert ? 'dark:invert dark:hover:invert-0' : ''}`}
      />
    </div>
  )
}

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="parceiros" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-azul font-medium mb-4">
            Parceiros & Apoiadores
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Juntos pelo{" "}
            <span className="text-muted-foreground">esporte</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Empresas e instituições que acreditam no poder do esporte para transformar vidas.
          </p>
        </motion.div>

        {/* Carrossel de Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-center font-sans font-semibold text-xs tracking-wider uppercase text-muted-foreground mb-8">
            Nossos Parceiros Atuais
          </h3>

          {/* Estilos injetados para o carrossel infinito e responsivo */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-loop {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee-loop:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Ribbon do Carrossel */}
          <div className="w-full overflow-hidden relative py-4 select-none">
            {/* Sombras laterais para fade out suave das marcas */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-loop flex gap-12 items-center">
              {/* Grupo original de logos */}
              {currentPartners.map((partner) => (
                <PartnerLogo key={partner.name} partner={partner} />
              ))}
              {/* Cópia para efeito seamless infinito */}
              {currentPartners.map((partner) => (
                <PartnerLogo key={`dup-${partner.name}`} partner={partner} />
              ))}
              {/* Cópia adicional para preenchimento em telas ultra-wide */}
              {currentPartners.map((partner) => (
                <PartnerLogo key={`dup2-${partner.name}`} partner={partner} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Banner Informativo / Call to Action Patrocinador */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-muted-foreground/4 border border-border/70 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Elemento decorativo discreto */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-azul/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-4 max-w-xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                <Heart className="h-4 w-4 text-azul fill-azul/20" />
                Apoie o Projeto
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                Sua marca jogando junto com Rio do Sul
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ao apoiar o Rio Clube Handebol, sua marca ganha destaque nos nossos uniformes oficiais, banners, eventos e redes sociais. Além disso, sua empresa contribui ativamente para o desenvolvimento social e desportivo de jovens na nossa região.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <Button
                asChild
                className="inline-flex h-11 px-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium transition-all duration-300 hover:shadow-lg shadow-sm"
              >
                <a href="#contato">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
