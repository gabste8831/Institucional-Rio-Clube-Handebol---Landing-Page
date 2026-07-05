"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Trophy, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Para Todos",
    description: "Crianças, jovens e adultos são bem-vindos. Treinos orientados por profissionais, adaptados para cada faixa etária e nível de experiência.",
  },
  {
    icon: Target,
    title: "Treinos Estruturados",
    description: "Três vezes por semana, com foco em técnica, tática, condicionamento físico e trabalho em equipe.",
  },
  {
    icon: Trophy,
    title: "Competições",
    description: "Representamos Rio do Sul em campeonatos regionais. Uma oportunidade real para atletas que buscam crescer no esporte.",
  },
  {
    icon: Heart,
    title: "100% Gratuito",
    description: "Projeto oficial da Semel de Rio do Sul. Participação totalmente gratuita para a comunidade.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-secondary/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center justify-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-verde font-medium mb-4">
            Sobre o Projeto
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Mais que um esporte,{" "}
            <span className="text-muted-foreground">uma comunidade</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground text-pretty mx-auto my-0">
            O <b>Rio Clube Handebol</b> é um projeto que vai além das quadras. Formamos atletas,
            construímos amizades e fortalecemos nossa comunidade através do esporte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-verde/50 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary group-hover:bg-verde/10 transition-colors">
                <feature.icon className="h-6 w-6 text-foreground group-hover:text-verde transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
