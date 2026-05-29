"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function RealizationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="realizacao" className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Elemento decorativo sutil de fundo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-amarelo rounded-full filter blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-row max-[1050px]:flex-col gap-12 items-center justify-center">

          {/* Coluna de Texto (Esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left max-[1050px]:text-center"
          >
            <span className="inline-block text-sm uppercase tracking-widest text-amarelo font-medium">
              Realização & Parceria
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-medium tracking-tight text-foreground text-balance">
              Uma aliança dedicada ao{" "}
              <span className="text-muted-foreground">fomento do esporte</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              O Rio Clube Handebol atua em parceria direta com a{" "}
              <strong>Fundação Municipal de Esportes (FME) de Rio do Sul</strong>,
              unindo o fomento institucional ao desenvolvimento desportivo e social de nossos jovens.
            </p>
          </motion.div>

          {/* Coluna de Logos (Direita) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-6 mx-auto w-full"
          >
            {/* Logo Rio Clube Handebol */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white dark:bg-zinc-950 border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-6 text-center group shrink-0"
            >
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 mb-1 sm:mb-2 flex items-center justify-center">
                <Image
                  src="/images/logo_rio_clube.png"
                  alt="Logo Rio Clube Handebol"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground select-none">
                Rio Clube Handebol
              </span>
            </motion.div>

            {/* Elemento Conector Dinâmico */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted-foreground/10 text-muted-foreground font-bold text-sm select-none shrink-0">
              +
            </div>

            {/* Logo Fundação Municipal de Esportes */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white dark:bg-zinc-950 border border-border/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-6 text-center group shrink-0"
            >
              <div className="relative w-24 h-24 sm:w-36 sm:h-36 mb-1 sm:mb-2 flex items-center justify-center">
                <Image
                  src="/images/logo_fundacao.png"
                  alt="Logo Fundação de Esportes"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground select-none">
                FME Rio do Sul
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
