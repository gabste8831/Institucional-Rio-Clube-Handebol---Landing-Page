"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, type TouchEvent } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    id: 1,
    src: "/images/lance_de_jogo.jpg",
    alt: "Lance de jogo",
    category: "Jogos",
  },
  {
    id: 2,
    src: "/images/foto_time_completo.jpg",
    alt: "Time completo",
    category: "Equipe",
  },
  {
    id: 3,
    src: "/images/treino_arremecos.jpg",
    alt: "Treino de arremessos",
    category: "Treinos",
  },
  {
    id: 4,
    src: "/images/lance_de_jogo_finalização.jpg",
    alt: "Tentativa de finalização",
    category: "Jogos",
  },
  {
    id: 5,
    src: "/images/treino_de_finalizacao.jpg",
    alt: "Treino de finalização",
    category: "Treinos",
  },
  {
    id: 6,
    src: "/images/duas_equipes_cumprimento.jpg",
    alt: "Equipes em cumprimento",
    category: "Equipe",
  },
  {
    id: 7,
    src: "/images/equipes_rio_do_sul_e_blumenau.jpg",
    alt: "Rio do Sul vs Blumenau",
    category: "Jogos",
  },
  {
    id: 8,
    src: "/images/grito_de_guerra.jpg",
    alt: "Grito de guerra",
    category: "Treinos",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const selectedImage = selectedImageIndex === null ? null : images[selectedImageIndex]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 40,
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnLastSnap: false,
      }),
    ]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        setSelectedImageIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setSelectedImageIndex((prev) => (prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length))
      }

      if (event.key === "Escape") {
        setSelectedImageIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedImageIndex])

  const openImage = (index: number) => setSelectedImageIndex(index)
  const closeLightbox = () => setSelectedImageIndex(null)

  const navigateLightbox = (direction: 1 | -1) => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return direction === 1 ? 0 : images.length - 1
      return (prev + direction + images.length) % images.length
    })
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return

    const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    if (deltaX > 50) {
      navigateLightbox(-1)
    } else if (deltaX < -50) {
      navigateLightbox(1)
    }

    touchStartX.current = null
  }

  return (
    <section id="galeria" className="py-20 bg-secondary/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-amarelo font-medium mb-4">
            Galeria
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Momentos que{" "}
            <span className="text-muted-foreground">marcam</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Registros de treinos, competições e confraternizações do nosso time.
          </p>
        </motion.div>

        {/* Carrossel Mobile/Tablet */}
        <div className="lg:hidden mb-8">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%]"
                >
                  <div
                    className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group m-2 ml-0"
                    onClick={() => openImage(images.findIndex((item) => item.id === image.id))}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
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
                className={`h-1 cursor-pointer rounded-full transition-all ${selectedIndex === index
                    ? 'bg-amarelo'
                    : 'bg-muted-foreground/30'
                  }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>

        {/* Grid Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-3 auto-rows-[220px]">
          {images.map((image, index) => {
            let colSpan = "col-span-1"
            let rowSpan = "row-span-1"

            // Padrão compacto sem buracos - máximo 3 linhas
            if (index === 0) {
              colSpan = "col-span-2"
              rowSpan = "row-span-2"
            } else if (index === 1) {
              colSpan = "col-span-2"
              rowSpan = "row-span-1"
            }

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group h-full ${colSpan} ${rowSpan}`}
                onClick={() => openImage(index)}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-3 sm:p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={(event) => {
                event.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background/70 backdrop-blur-sm"
                  onClick={(event) => {
                    event.stopPropagation()
                    navigateLightbox(-1)
                  }}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background/70 backdrop-blur-sm"
                  onClick={(event) => {
                    event.stopPropagation()
                    navigateLightbox(1)
                  }}
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div
              className="relative max-w-4xl w-full aspect-[4/3] sm:aspect-video rounded-[6px] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain bg-background/10"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
