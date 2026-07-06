"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const basePath = "/images/Logos Apoiadores do Projeto Rio Clube"

const currentPartners = [
  { name: "Perito Hash", logoLight: `${basePath}/peritohash-lightmode.png`, logoDark: `${basePath}/peritohash-darkmode.png`, url: "https://www.instagram.com/peritohash/" },
  { name: "Pe Pratic", logoLight: `${basePath}/pepratic-lightmode.png`, logoDark: `${basePath}/pepratic-darmode.png`, url: "https://www.instagram.com/pepratic/" },
  { name: "Leve Fitness", logoLight: `${basePath}/letefitness-lightmode.png`, logoDark: `${basePath}/levefitness-darkmode.png`, url: "https://www.instagram.com/leve.fitness__/" },
  { name: "Agência Hapi", logoLight: `${basePath}/hapi-lightmode.png`, logoDark: `${basePath}/hapi-darkmode.png`, url: "https://www.instagram.com/agenciahapi/" },
  { name: "Grupo Planner", logoLight: `${basePath}/grupoplanner-lightmode.png`, logoDark: `${basePath}/grupoplanner-darkmode.png`, url: "https://www.instagram.com/grupoplanner/" },
  { name: "Marmoraria Granicar", logoLight: `${basePath}/granicarmarmoraria-lighmode.png`, logoDark: `${basePath}/granicarmarmoraria-darkmode.png`, url: "https://www.instagram.com/marmorariagranicar/" },
  { name: "Essenza Detail", logoLight: `${basePath}/essenzadetail-lightmode.png`, logoDark: `${basePath}/essenzadetail-darkmode.png`, url: "https://www.instagram.com/essenza_detail/" },
  { name: "Don Ruan Pizza e Burger", logoLight: `${basePath}/donjuan-lightmode.png`, logoDark: `${basePath}/donruan-darkmode.png`, url: "https://www.instagram.com/donruanpizzaeburger/" },
  { name: "Cia Man Cuecas", logoLight: `${basePath}/ciaman-lightmode.png`, logoDark: `${basePath}/ciaman-darmode.png`, url: "https://www.facebook.com/ciamancuecas/?locale=pt_BR" },
  { name: "Alto Vale Contabilidade", logoLight: `${basePath}/altovalecontabilidade-lightmode.png`, logoDark: `${basePath}/altovalecontabilidade-darkmode.png`, url: "https://www.instagram.com/altovalecontabilidade/" },
  { name: "Zatom Formiga", logoLight: `${basePath}/zatom-lightmode.png`, logoDark: `${basePath}/zatom-darkmode.png`, url: "https://www.instagram.com/zatomformiga/" },
  { name: "W9 TI Tecnologia", logoLight: `${basePath}/w9solucoesemti - lightmode.png`, logoDark: `${basePath}/w9solucoesemti-darkmode.png`, url: "https://www.instagram.com/w9titecnologia/" },
  { name: "ULC Terraplanagem", logoLight: `${basePath}/ulcterraplanagem-lightmode.png`, logoDark: `${basePath}/ulcterraplanagem-darkmode.png`, url: "https://www.instagram.com/ulcterraplanagem/" },
  { name: "Sicoob Alto Vale", logoLight: `${basePath}/sicobaltovale-lightmode.png`, logoDark: `${basePath}/sicobaltovale-darkmode.png`, url: "https://www.instagram.com/sicoobaltovale/" },
  { name: "Senior Engenharia e Medicina", logoLight: `${basePath}/seniorengenhariaesegurançadotrabalho-lightmode.png`, logoDark: `${basePath}/seniorengenhariaesegurançadotrabalho-darkmode.png`, url: "https://www.instagram.com/seniorengenhariaemedicina/" },
  { name: "Requinte Lavanderia", logoLight: `${basePath}/requintelavanderia-lightmode.png`, logoDark: `${basePath}/requintelavanderia-darkmode.png`, url: "https://www.instagram.com/requintelavanderia/" },
  { name: "Qualitte 50+", logoLight: `${basePath}/qualiteaposentadorias-lightmode.png`, logoDark: `${basePath}/qualiteaposentadorias-darkmode.png`, url: "https://www.instagram.com/qualitte50mais/" },
  { name: "WA Concreto", logoLight: `${basePath}/waconcreto - lightmode.png`, logoDark: `${basePath}/waconcreto - darkmode.png`, url: "https://www.instagram.com/waconcreto/" },
]

// Fallback component to render an elegant badge if PNG logo doesn't exist yet
const PartnerLogo = ({ partner }: { partner: typeof currentPartners[0] }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError || !partner.logoLight) {
    return (
      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted-foreground/5 border border-border/50 text-muted-foreground/60 select-none mx-2 hover:bg-muted-foreground/10 transition-colors">
        <Building2 className="h-4 w-4" />
        <span className="font-sans font-semibold text-[11px] tracking-wider uppercase whitespace-nowrap">{partner.name}</span>
      </a>
    )
  }

  const imageClass = "h-auto max-h-[140px] w-auto max-w-[220px] md:max-h-[150px] md:max-w-[260px] object-contain transition-all duration-300 md:grayscale md:opacity-60 md:dark:opacity-45 hover:!opacity-100 hover:!grayscale-0"

  return (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="h-48 flex items-center justify-center px-2 md:px-8">
      <img
        src={partner.logoLight}
        alt={partner.name}
        onError={() => setHasError(true)}
        className={`${imageClass} dark:hidden`}
      />
      <img
        src={partner.logoDark}
        alt={partner.name}
        onError={() => setHasError(true)}
        className={`${imageClass} hidden dark:block`}
      />
    </a>
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
              animation: marquee 120s linear infinite;
            }
          `}} />

          {/* Ribbon do Carrossel */}
          <div
            className="w-full overflow-hidden relative py-4 select-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="animate-marquee-loop flex gap-10 md:gap-16 items-center">
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
                className="inline-flex h-11 px-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium transition-all duration-300"
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
