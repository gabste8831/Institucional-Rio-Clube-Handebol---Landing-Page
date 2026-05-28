"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(47) 99999-0000",
    href: "tel:+5547999990000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@handebolriodosul.com",
    href: "mailto:contato@handebolriodosul.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fale Conosco",
    href: "https://wa.me/5547999990000?text=Olá! Gostaria de saber mais sobre o Handebol Rio do Sul.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@rioclube_handebol",
    href: "https://www.instagram.com/rioclube_handebol/",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // no local state required (contato via links/WhatsApp)

  return (
    <section id="contato" className="py-20 bg-secondary/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-verde font-medium mb-4">
            Contato
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-balance mb-6">
            Venha fazer parte do{" "}
            <span className="text-muted-foreground">time</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Entre em contato conosco e comece a treinar. Todas as idades são bem-vindas!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="group p-6 rounded-2xl bg-muted-foreground/6 border border-border/70 hover:border-verde/50 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-verde/10 mb-4">
                <item.icon className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-verde" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans font-normal tracking-wide">{item.label}</p>
                <p className="font-sans font-normal tracking-wide text-base text-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
