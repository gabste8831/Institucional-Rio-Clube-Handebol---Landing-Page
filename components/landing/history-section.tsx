"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const timeline = [
  {
    year: "2018",
    title: "Início do Projeto",
    description: "O projeto Handebol Rio do Sul nasce com a missão de difundir o esporte na região.",
  },
  {
    year: "2019",
    title: "Primeira Competição",
    description: "Participação no primeiro campeonato regional, marcando o início da trajetória competitiva.",
  },
  {
    year: "2020",
    title: "Adaptação e Crescimento",
    description: "Mesmo com desafios, o projeto manteve atividades online e fortaleceu a comunidade.",
  },
  {
    year: "2022",
    title: "Reconhecimento Regional",
    description: "Conquista de medalhas em competições estaduais e crescimento no número de atletas.",
  },
  {
    year: "2024",
    title: "Consolidação",
    description: "Projeto oficializado pela Fundação de Esportes de Rio do Sul, com treinos regulares.",
  },
]

export function HistorySection() {
  const ref = useRef(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isTimelineActive, setIsTimelineActive] = useState(false)

  return (
    <section id="historia" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-primary/10" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-verde font-medium mb-4">
            Nossa História
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-balance mb-6">
            Uma jornada de{" "}
            <span className="text-muted-foreground">dedicação</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Desde 2018, construímos uma história de superação, conquistas e muito amor pelo handebol.
          </p>
        </motion.div>

        {/* Timeline Container with Internal Scroll */}
        <div
          ref={timelineRef}
          className="h-96 overflow-y-auto overflow-x-hidden rounded-3xl bg-background/40 backdrop-blur-sm border border-border/50 p-8 scrollbar-hide relative group"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent to-azul/60 via-azul/90 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 z-10">
                    <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-white to-azul -translate-x-1.5" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 hover:border-primary/15 transition-colors duration-300 group"
                    >
                      <span className="inline-block text-4xl font-serif font-bold text-muted-foreground/20 mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Color Bars */}
        <div className="mt-8 flex h-1 rounded-full overflow-hidden">
          <div className="flex-1 bg-verde" />
          <div className="flex-1 bg-amarelo" />
          <div className="flex-1 bg-azul" />
        </div>
      </div>
    </section>
  )
}
