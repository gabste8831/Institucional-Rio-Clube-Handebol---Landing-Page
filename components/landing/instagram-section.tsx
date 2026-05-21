"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mockPosts = [
  { id: 1, likes: 124, comments: 8 },
  { id: 2, likes: 89, comments: 5 },
  { id: 3, likes: 156, comments: 12 },
  { id: 4, likes: 203, comments: 15 },
  { id: 5, likes: 67, comments: 3 },
  { id: 6, likes: 142, comments: 9 },
]

export function InstagramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {mockPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/rioclube_handebol/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative h-56 sm:h-64 lg:h-72 bg-muted rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Instagram className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground">Post {post.id}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-background text-sm flex items-center gap-4">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

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
