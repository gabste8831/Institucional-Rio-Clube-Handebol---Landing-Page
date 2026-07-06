"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Mail, Phone, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const coordinators = [
  {
    name: "Eliani Finger Patzlaff",
    role: "Coordenadora",
    description: "Responsável pela organização geral e desenvolvimento técnico dos atletas.",
    cref: "CREF: 4606",
    phone: "(47) 9 9740-9924",
    instagram: "@elianipatzlaff",
    image: "/images/eliani.png",
  },
  {
    name: "Samuel Simon",
    role: "Presidente do Clube",
    description: "Representante legal do clube. Responsável pela organização financeira, captação de recursos e coordenação logística/social do projeto.",
    phone: "(47) 9 9678-0251",
    instagram: "@engcivilsamuelsimon",
    image: "/images/samuel.jpg",
  },
  {
    name: "Thiago Sofka",
    role: "Vice Presidente",
    description: "Representação legal do clube, auxiliando na gestão, captação e suporte estratégico do projeto.",
    phone: "(47) 9 8830-8594",
    instagram: "@tiagosofka",
    image: "/images/thiago.jpg",
  },
  {
    name: "Angelo R. Araujo Aristides",
    role: "Secretário",
    description: "Responsável pela organização administrativa e secretariado do projeto.",
    phone: "(47) 9 9659-6419",
    instagram: "@angelo.r.araujo",
    image: "/images/angelo.jpg",
  },
  {
    name: "Micael Albino",
    role: "Auxiliar Técnico",
    description: "Foco em preparação física e estratégias de jogo para competições. Estudante de Educação Física.",
    phone: "(47) 9 8803-8754",
    instagram: "@albinomicael",
    image: "/images/micael.png",
  },
  {
    name: "Igor Silva",
    role: "Auxiliar Técnico",
    description: "Responsável pelas categorias de base e formação de novos talentos, em especial, goleiros. Estudante de Educação Física.",
    phone: "(47) 9 9949-3554",
    instagram: "@siilva.igord",
    image: "/images/igor.png",
  },
  {
    name: "Bernhard Clauberg",
    role: "Apoiador Externo",
    description: "Apoiador e incentivador do clube. Viabiliza parcerias, materiais e contatos estratégicos.",
    phone: "(47) 9 8835-4649",
    instagram: "@bernhardclauberg",
    image: "/images/bernhard.jpg",
  },
  {
    name: "Dione Debatin",
    role: "Consultora Externa",
    description: "Consultoria e suporte estratégico para o desenvolvimento institucional do projeto.",
    phone: "(47) 9 8898-4300",
    instagram: "@dione.debatin",
    image: "/images/dione.jpg.jpg",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Loop infinito — com 4 cards funciona perfeitamente sem bugs visuais
      align: "start",
      skipSnaps: false,
      duration: 30, // Transição suave e rápida
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 5000, // 5 segundos para cada card
        stopOnInteraction: false, // Continua rodando mesmo após interação do usuário
        stopOnMouseEnter: true, // Pausa ao passar o mouse (UX melhor)
      }),
    ]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    }

    onInit()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onInit)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onInit)
    }
  }, [emblaApi])

  return (
    <section id="equipe" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-amarelo font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Coordenadores do{" "}
            <span className="text-muted-foreground">Projeto</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Profissionais dedicados que fazem o projeto acontecer,
            compartilhando conhecimento e paixão pelo handebol.
          </p>
        </motion.div>

        {/* Bloco do Carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="overflow-hidden rounded-xl"
              ref={emblaRef}
            >
              <div className="flex -ml-4">
              {coordinators.map((coordinator) => (
                <div
                  key={coordinator.name}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 min-w-0"
                >
                  <Card className="h-full overflow-hidden group transition-all duration-300 border-border hover:border-amarelo/50">
                    <div className="aspect-[4/3] bg-gradient-to-br from-verde/20 to-azul/20 relative overflow-hidden">
                      <Image
                        src={coordinator.image}
                        alt={coordinator.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                        <div className="flex-1 bg-verde" />
                        <div className="flex-1 bg-amarelo" />
                        <div className="flex-1 bg-azul" />
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="font-semibold text-lg">{coordinator.name}</h3>
                          <p className="text-sm text-verde font-medium">{coordinator.role}</p>
                        </div>

                        {coordinator.cref && (
                          <p className="text-foreground text-sm mb-2 leading-relaxed dark:text-white">
                            {coordinator.cref}
                          </p>
                        )}

                        <p className="text-muted-foreground text-xs mb-6 leading-relaxed">
                          {coordinator.description}
                        </p>
                        <div className="space-y-2">
                          {coordinator.phone && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>{coordinator.phone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {coordinator.instagram && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-4 transition-colors duration-200 hover:bg-amarelo/10 hover:border-amarelo/50"
                          asChild
                        >
                          <a
                            href={`https://instagram.com/${coordinator.instagram.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="h-4 w-4 mr-2" />
                            {coordinator.instagram}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                emblaApi?.scrollPrev()
              }}
              className="absolute -left-8 min-[1100px]:-left-12 top-1/2 -translate-y-1/2 z-0 hidden min-[1100px]:flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition hover:bg-background/95 cursor-pointer"
              aria-label="Card anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => {
                emblaApi?.scrollNext()
              }}
              className="absolute -right-8 min-[1100px]:-right-12 top-1/2 -translate-y-1/2 z-0 hidden min-[1100px]:flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition hover:bg-background/95 cursor-pointer"
              aria-label="Próximo card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Navegação */}
          {scrollSnaps.length > 1 && (
            <div className="flex flex-col items-center gap-6 mt-8">
              <div className="flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <motion.div
                    key={index}
                    onClick={() => {
                      emblaApi?.scrollTo(index)
                    }}
                    animate={{
                      width: selectedIndex === index ? 32 : 8,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className={`h-1 cursor-pointer rounded-full transition-all ${selectedIndex === index
                      ? 'bg-amarelo'
                      : 'bg-muted-foreground/30'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}