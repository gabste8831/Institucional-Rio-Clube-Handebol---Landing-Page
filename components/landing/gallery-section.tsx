"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const images = [
  {
    id: 1,
    src: "/images/hero-handball.jpg",
    alt: "Jogo de handebol",
    category: "Jogos",
  },
  {
    id: 2,
    src: "/images/team-photo.jpg",
    alt: "Time reunido",
    category: "Equipe",
  },
  {
    id: 3,
    src: "/images/training.jpg",
    alt: "Treino de handebol",
    category: "Treinos",
  },
  {
    id: 4,
    src: "/images/hero-handball.jpg",
    alt: "Treino de goleiros",
    category: "Treinos",
  },
  {
    id: 5,
    src: "/images/training.jpg",
    alt: "Celebração de vitória",
    category: "Jogos",
  },
  {
    id: 6,
    src: "/images/team-photo.jpg",
    alt: "Aquecimento",
    category: "Treinos",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-secondary/50" ref={ref}>
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
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Registros de treinos, competições e confraternizações do nosso time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[280px]">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group h-full ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
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
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 rounded-full bg-background/90 text-foreground text-sm font-medium">
                  {selectedImage.alt}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
