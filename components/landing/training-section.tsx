"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Shield, Target, Dumbbell, Hand, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const venues = [
  {
    id: 1,
    name: "Colégio Municipal João Custódio da Luz",
    address: "R. Ladeira Porto Velho, 191 - Boa Vista, Rio do Sul - SC, 89167-234",
    description: "Nosso principal local de treino.",
    image: "/images/training.jpg",
    mapsUrl: "https://maps.app.goo.gl/2pVbGKXdX7uCGVjW6",
  },
  {
    id: 2,
    name: "Centro Universitário de Rio do Sul (UNIDAVI)",
    address: "R. Júlio Roussenq Filho, 87-253 - Jardim América, Rio do Sul - SC, 89160-000",
    description: "Espaço dedicado ao treinamento técnico e desenvolvimento dos atletas.",
    image: "/images/training.jpg",
    mapsUrl: "https://maps.app.goo.gl/z2DWVCKeCeGzW8oc8",
  },
  {
    id: 3,
    name: "IFC Campus Agronomia Rio do Sul",
    address: "Estr. do Redentor, 5665 - Serra Canoas, Rio do Sul - SC, 89163-356",
    description: "Quadra auxiliar para treinos adicionais e competições locais.",
    image: "/images/training.jpg",
    mapsUrl: "https://maps.app.goo.gl/gsVmUfJZEwdWHyBy9",
  },
]

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentVenue, setCurrentVenue] = useState(0)

  const currentLocation = venues[currentVenue]

  return (
    <section id="treinos" className="py-24 sm:py-32 bg-secondary/50" ref={ref}>
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
          <h2 className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-balance mb-6">
            Rotina de{" "}
            <span className="text-muted-foreground">treinamentos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Treinos estruturados e profissionais, abertos para todos os níveis.
            Não se trata apenas de jogos avulsos, mas também de uma rotina completa de desenvolvimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="rounded-2xl bg-muted-foreground/6 border border-border/70 overflow-hidden h-full flex flex-col">
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted-foreground/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-foreground dark:text-white" />
                  </div>
                  <h3 className="font-sans text-xl font-medium">Horários de Treino</h3>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`p-6 flex items-center justify-between ${
                      index !== schedule.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <div>
                      <p className="font-sans font-normal tracking-wide text-base">{item.day}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-foreground dark:text-white" />
                      <span className=" text-base text-muted-foreground/70" >{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-muted-foreground/6 border border-border/70 hover:border-verde/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-muted-foreground/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-verde/10">
                  <type.icon className="h-6 w-6 text-foreground transition-colors duration-300 group-hover:text-verde" />
                </div>
                <h4 className="font-sans font-normal tracking-wide text-base mb-2 text-foreground">
                  {type.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Venues Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="relative h-140 rounded-2xl overflow-hidden">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentVenue ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-transparent" />
              </motion.div>
            ))}

            <motion.div
              key={currentVenue}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-end"
            >
                <div className="relative bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-10">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium text-white mb-6">
                      {currentLocation.name}
                    </h3>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="h-3.5 w-3.5 text-red shrink-0 mt-0.5" />
                      <p className="text-xs text-white/90 truncate">{currentLocation.address}…</p>
                    </div>
                    <p className="text-xs text-white/70">
                      Treinos realizados em espaços amplos e preparados para a prática do handebol.
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="group md:absolute md:right-0 md:bottom-0 md:-m-6 inline-flex h-10 rounded-lg border border-white/30 text-white bg-transparent transition-all duration-300 overflow-hidden hover:bg-white/10 hover:border-white/50 font-normal w-fit"
                  >
                    <a
                      href={currentLocation.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3"
                    >
                      <MapPin className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-white" />
                      <span className="transition-all duration-300 ease-out">
                        Mapa
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-2 justify-center">
            {venues.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVenue(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentVenue
                    ? "bg-amarelo w-8"
                    : "bg-border/50 w-2 hover:bg-border"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

