"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InstagramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    // Carregar o script do Behold
    const script = document.createElement('script')
    script.src = 'https://cdn.beholdsocial.com/embed/2.0/behold.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-[#E1306C] font-medium mb-4">
            Instagram
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Fique por dentro das{" "}
            <span className="text-muted-foreground">nossas redes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Acompanhe nossa rotina, novidades e bastidores no Instagram.
          </p>
        </motion.div>

        {/* Behold Widget - Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-10 flex justify-center"
        >
          {/* Cole aqui o widget code do Behold */}
          {/* Crie em: https://behold.so/ */}
          <div 
            className="behold-embed" 
            data-behold-id="COLOQUE_SEU_WIDGET_ID_AQUI"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#E1306C] hover:bg-[#C13584] text-white"
          >
            <Link
              href="https://www.instagram.com/rioclube_handebol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Seguir @rioclube_handebol
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
