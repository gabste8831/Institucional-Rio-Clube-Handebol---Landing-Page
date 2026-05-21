"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="historia" className="py-24 sm:py-32 bg-secondary/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-azul font-medium mb-4">
            Nossa História
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Uma jornada de{" "}
            <span className="text-muted-foreground">dedicação</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Desde 2018, construímos uma história de superação, conquistas e muito amor pelo handebol.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-verde -translate-x-1.5 md:-translate-x-1.5 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <span className="inline-block text-2xl font-serif font-bold text-verde mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
