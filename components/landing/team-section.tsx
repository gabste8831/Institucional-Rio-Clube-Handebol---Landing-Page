"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Mail, Phone, Instagram } from "lucide-react"
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
    cref: "CREF: 123456",
    phone: "(47) 99999-0001",
    email: "eliani@handebolriodosul.com",
    instagram: "@elianipatzlaff",
    image: "/images/eliani.png",
  },
  {
    name: "Micael Albino",
    role: "Auxiliar Técnico",
    description: "Foco em preparação física e estratégias de jogo para competições. Estudante de Educação Física.",
    phone: "(47) 90000-0000",
    email: "micael@handebolriodosul.com",
    instagram: "@albinomicael",
    image: "/images/micael.png",
  },
  {
    name: "Igor Silva",
    role: "Auxiliar Técnico",
    description: "Responsável pelas categorias de base e formação de novos talentos, em especial, goleiros. Estudante de Educação Física.",
    phone: "(47) 90000-0000",
    email: "igor@handebolriodosul.com",
    instagram: "@siilva.igord",
    image: "/images/igor.png",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false, // Mantido false para evitar bugs visuais com poucos cards no desktop
      align: "center",
      skipSnaps: false,
      duration: 40, // Velocidade da transição de deslize
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 5000, // 5 segundos exatos para cada card
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnLastSnap: false, // O segredo: faz o autoplay voltar ao início nativamente sem travar
      }),
    ]
  )
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
      setShowNavigation(emblaApi.canScrollPrev() || emblaApi.canScrollNext())
    }
    
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
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
          <div 
            className="overflow-hidden rounded-xl" 
            ref={emblaRef}
          >
            <div className="flex -ml-4">
              {coordinators.map((coordinator) => (
                <div
                  key={coordinator.name}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                >
                  <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-border hover:border-amarelo/50">
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
                    <CardContent>
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg">{coordinator.name}</h3>
                        <p className="text-sm text-verde font-medium">{coordinator.role}</p>
                      </div>
                      
                      {coordinator.cref && (
                        <p className="text-foreground text-sm mb-2 leading-relaxed dark:text-white">
                          {coordinator.cref}
                        </p>
                      )}
                      
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {coordinator.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{coordinator.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{coordinator.email}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4"
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
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navegação */}
          {showNavigation && (
            <div className="flex flex-col items-center gap-6 mt-8">
              <div className="flex justify-center gap-2">
                {coordinators.map((_, index) => (
                  <motion.div
                    key={index}
                    onClick={() => {
                      emblaApi?.scrollTo(index)
                      const autoplayPlugin = emblaApi?.plugins()?.autoplay as any
                      if (autoplayPlugin && typeof autoplayPlugin.play === 'function') {
                        autoplayPlugin.play()
                      }
                    }}
                    animate={{
                      width: selectedIndex === index ? 32 : 8,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className={`h-1 cursor-pointer rounded-full transition-all ${
                      selectedIndex === index 
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