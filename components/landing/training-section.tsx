"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Shield, Target, Dumbbell, Hand } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const schedule = [
  { day: "Segunda-feira", time: "19:00 - 21:00", type: "Treino Técnico" },
  { day: "Quarta-feira", time: "19:00 - 21:00", type: "Treino Tático" },
  { day: "Sexta-feira", time: "19:00 - 21:00", type: "Treino Livre/Jogo" },
]

const trainingTypes = [
  {
    icon: Target,
    title: "Ataque",
    description: "Técnicas de arremesso, posicionamento e jogadas ensaiadas.",
  },
  {
    icon: Shield,
    title: "Defesa",
    description: "Sistemas defensivos, marcação e interceptação de bola.",
  },
  {
    icon: Hand,
    title: "Goleiros",
    description: "Treino especializado para a posição mais importante do time.",
  },
  {
    icon: Dumbbell,
    title: "Físico",
    description: "Condicionamento, agilidade e preparação física completa.",
  },
]

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="treinos" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-verde font-medium mb-4">
            Treinos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Rotina de{" "}
            <span className="text-muted-foreground">treinamentos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Treinos estruturados e profissionais, abertos para todos os níveis. 
            Não se trata apenas de jogos avulsos, mas de uma rotina completa de desenvolvimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="bg-foreground text-background p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  <h3 className="font-semibold text-xl">Horários de Treino</h3>
                </div>
              </div>
              <CardContent className="p-0">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`p-6 flex items-center justify-between ${
                      index !== schedule.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div>
                      <p className="font-medium">{item.day}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="mt-6 overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/images/training.jpg"
                  alt="Local de treino"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardContent className="p-6 -mt-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="h-6 w-6 text-verde" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local de Treino</h4>
                    <p className="text-muted-foreground text-sm">
                      Ginásio Municipal de Esportes de Rio do Sul
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Rua Exemplo, 123 - Centro, Rio do Sul - SC
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {trainingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-verde/10 flex items-center justify-center mb-4">
                  <type.icon className="h-5 w-5 text-verde" />
                </div>
                <h4 className="font-semibold mb-1">{type.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
