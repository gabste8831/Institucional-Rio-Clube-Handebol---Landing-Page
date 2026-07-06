"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type TimelinePhoto = {
  src: string
  alt: string
}

type TimelineItem = {
  year: string
  title: string
  description: string
  images?: TimelinePhoto[]
}

const timeline: TimelineItem[] = [
  {
    year: "1994",
    title: "Início do Handebol Adulto",
    description: "O trabalho com o handebol em Rio do Sul começa focado no time adulto masculino.",
  },
  {
    year: "1995",
    title: "Introdução das Categorias de Base",
    description: "O projeto expande sua atuação e inicia os treinos voltados para as crianças.",
  },
  {
    year: "1998",
    title: "Chegada de Eliani Finger Patzlaff",
    description: "Eliani Lucia Finger Patzlaff dá entrada como Professora Técnica de Handebol pela Fundação Municipal de Desportos de Rio do Sul, reforçando o desenvolvimento do projeto.",
  },
  {
    year: "1999",
    title: "Vice-Campeonato no JASC Feminino",
    description: "A equipe feminina conquista o 2º lugar nos Jogos Abertos de Santa Catarina (JASC).",
  },
  {
    year: "2001",
    title: "Campeãs Estaduais na OLESC",
    description: "O time feminino conquista o 1º lugar na OLESC (Olimpíada Estudantil Catarinense), além do 3º lugar no JASC Regional.",
  },
  {
    year: "2002",
    title: "Montagem do Primeiro Clube",
    description: "Realização da primeira reunião oficial nas dependências do SESI para estruturar e montar o primeiro clube de handebol.",
    images: [
      { src: "/images/Fotos Linha do Tempo/2002 - reunião.jpeg", alt: "Primeira reunião oficial do clube, 2002" },
      { src: "/images/Fotos Linha do Tempo/2002 - Reunião 2.jpeg", alt: "Primeira reunião oficial do clube, 2002 (2)" },
    ],
  },
  {
    year: "2003",
    title: "Sequência de Conquistas",
    description: "Ano de múltiplos pódios: 3º lugar na OLESC Estadual, 1º lugar nos Joguinhos e 3º lugar na categoria infantil feminina.",
  },
  {
    year: "2005",
    title: "Pódio na OLESC Regional",
    description: "A equipe conquista o 2º lugar na fase regional da OLESC.",
  },
  {
    year: "2006",
    title: "Ano de Ouro do Projeto",
    description: "Melhor temporada em conquistas: 1º lugar no JESC feminino, 2º lugar no JESC regional e masculino, 2º lugar no JASC e 3º lugar na OLESC regional.",
  },
  {
    year: "2008",
    title: "Formalização Jurídica do Clube",
    description: "O clube é oficialmente registrado como Rioclube Handebol (CNPJ constituído em 13/06/2008), sob presidência de André Budag.",
  },
  {
    year: "2013",
    title: "Transição na Coordenação Técnica",
    description: "Encerra-se o vínculo da treinadora Eliani com a Fundação Municipal de Desportos, que se dedica à docência na Escola Adventista da cidade.",
  },
  {
    year: "2018",
    title: "Retomada das Atividades",
    description: "Após um período de baixa — coincidindo com a ascensão do voleibol feminino na cidade — o handebol retoma suas atividades com a recontratação da treinadora Eliani. Começa aqui a fase de reconstrução do projeto.",
  },
  {
    year: "2022",
    title: "Retorno aos Pódios Estaduais",
    description: "3º lugar na fase regional dos Joguinhos (Fraiburgo) e 14º lugar na fase estadual (Blumenau).",
  },
  {
    year: "2023",
    title: "Avanço na Competição Estadual",
    description: "8º lugar na fase estadual dos Joguinhos, em Curitibanos.",
  },
  {
    year: "2024",
    title: "Classificação para o JASC",
    description: "4º lugar no JASC Regional adulto masculino (Capinzal), com convite para a etapa final em Concórdia.",
  },
  {
    year: "2024",
    title: "Crescimento Estrutural do Projeto",
    description: "O clube vive uma fase de expansão: aumento no número de alunos e turmas, além de melhorias no espaço de treino e nos materiais disponíveis para a prática.",
  },
  {
    year: "2025",
    title: "Consolidação no Cenário Adulto",
    description: "4º lugar na fase regional adulta e 12º lugar no JASC adulto estadual, com convite para a etapa em Chapecó.",
  },
  {
    year: "2026",
    title: "SEMEL & Melhor fase",
    description: "A Secretaria Municipal de Esporte e Lazer (SEMEL) passa a ser a principal parceira institucional do projeto. É a melhor fase do projeto, com mais alunos, mais estrutura e mais conquistas a cada temporada.",
  },
]

// Fotos de época sem data confirmada (6.jpeg, hj.jpeg, hjk.jpeg) ficam de fora
// da timeline até termos um ano para associá-las a um card específico.

type GalleryState = { photos: TimelinePhoto[]; index: number }

function MediaIndicator({
  photos,
  onOpen,
  align,
}: {
  photos: TimelinePhoto[]
  onOpen: () => void
  align: "left" | "right"
}) {
  return (
    <button
      onClick={onOpen}
      className={`mt-4 inline-flex items-center gap-2 group/media ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex -space-x-3">
        {photos.slice(0, 3).map((photo, i) => (
          <div
            key={photo.src}
            className="relative w-9 h-9 rounded-lg overflow-hidden border-2 border-background transition-transform"
            style={{ zIndex: 3 - i }}
          >
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <span className="text-xs text-muted-foreground/70 group-hover/media:text-foreground transition-colors hover:cursor-pointer">
        {photos.length} {photos.length === 1 ? "foto" : "fotos"} · ver galeria
      </span>
    </button>
  )
}

function GalleryModal({
  gallery,
  onClose,
  onNavigate,
}: {
  gallery: GalleryState | null
  onClose: () => void
  onNavigate: (direction: 1 | -1) => void
}) {
  return (
    <AnimatePresence>
      {gallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-7 h-7" />
          </button>

          {gallery.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(-1)
              }}
              className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
          )}

          <motion.div
            key={gallery.photos[gallery.index].src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery.photos[gallery.index].src}
              alt={gallery.photos[gallery.index].alt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/70 text-sm mt-3">
              {gallery.photos[gallery.index].alt}
            </p>
            {gallery.photos.length > 1 && (
              <p className="text-center text-white/40 text-xs mt-1">
                {gallery.index + 1} / {gallery.photos.length}
              </p>
            )}
          </motion.div>

          {gallery.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(1)
              }}
              className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function HistorySection() {
  const ref = useRef(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [gallery, setGallery] = useState<GalleryState | null>(null)

  useEffect(() => {
    if (!gallery) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        navigateGallery(1)
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        navigateGallery(-1)
      }

      if (event.key === "Escape") {
        event.preventDefault()
        setGallery(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [gallery])

  const openGallery = (photos: TimelinePhoto[]) => setGallery({ photos, index: 0 })
  const navigateGallery = (direction: 1 | -1) => {
    setGallery((prev) => {
      if (!prev) return prev
      const total = prev.photos.length
      const nextIndex = (prev.index + direction + total) % total
      return { ...prev, index: nextIndex }
    })
  }

  return (
    <section id="historia" className="relative pt-24 sm:pt-32 bg-primary/12" ref={ref}>
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
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Uma jornada de{" "}
            <span className="text-muted-foreground">dedicação</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Desde a retomada em 2018, vivemos uma fase constante de crescimento — mais alunos, mais
            estrutura e mais conquistas a cada temporada.
          </p>
        </motion.div>

        <div
          ref={timelineRef}
          className="h-96 overflow-y-auto overflow-x-hidden rounded-3xl bg-background/40 backdrop-blur-sm border border-border/50 p-8 scrollbar-hide relative group"
        >
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent to-azul/60 via-azul/90 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const align = index % 2 === 0 ? "right" : "left"
                return (
                  <motion.div
                    key={`${item.year}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    <div className="absolute left-4 md:left-1/2 z-10">
                      <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-white to-azul -translate-x-1.5" />
                    </div>

                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <motion.div className="p-6 rounded-2xl bg-muted-foreground/6 border border-border/50 hover:border-primary/15 transition-colors duration-300 group">
                        <span className="inline-block text-4xl font-serif font-bold text-muted-foreground/35 mb-6">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground/80 text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {item.images && item.images.length > 0 && (
                          <div className={index % 2 === 0 ? "flex justify-end" : "flex justify-start"}>
                            <MediaIndicator
                              photos={item.images}
                              onOpen={() => openGallery(item.images!)}
                              align={align}
                            />
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex h-1 rounded-full overflow-hidden">
          <div className="flex-1 bg-verde" />
          <div className="flex-1 bg-amarelo" />
          <div className="flex-1 bg-azul" />
        </div>
      </div>

      <GalleryModal gallery={gallery} onClose={() => setGallery(null)} onNavigate={navigateGallery} />
    </section>
  )
}