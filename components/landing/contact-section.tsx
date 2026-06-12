"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MessageCircle, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(47) 99999-0000",
    subtext: "Fale conosco diretamente pelo chat",
    href: "https://wa.me/5547999990000?text=Olá! Gostaria de saber mais sobre o Handebol Rio do Sul.",
    bgClass: "bg-verde text-white",
    accentBg: "bg-verde",
    hoverBorder: "hover:border-verde/30",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@handebolriodosul.com",
    subtext: "Envie-nos uma mensagem a qualquer hora",
    href: "mailto:contato@handebolriodosul.com",
    bgClass: "bg-azul text-white",
    accentBg: "bg-azul",
    hoverBorder: "hover:border-azul/30",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@rioclube_handebol",
    subtext: "Siga nosso perfil e fique por dentro das novidades",
    href: "https://www.instagram.com/rioclube_handebol/",
    bgClass: "bg-amarelo text-zinc-950",
    accentBg: "bg-amarelo",
    hoverBorder: "hover:border-amarelo/30",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="py-24 bg-secondary/50" ref={ref}>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-verde font-medium mb-4">
            Contato
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Venha fazer parte do{" "}
            <span className="text-muted-foreground">time</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground text-pretty">
            Entre em contato conosco e comece a treinar. Todas as idades são bem-vindas!
          </p>
        </motion.div>

        {/* Grid de Contatos com layout centralizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto pt-8">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`group relative pt-16 pb-10 px-6 rounded-t-2xl rounded-b-none bg-card hover:bg-card/90 border border-border/80 ${item.hoverBorder} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col items-center text-center`}
            >
              {/* Círculo com Ícone Sobreposto */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-card shadow-md transition-all duration-500 ease-out ${item.bgClass}`}
              >
                <item.icon className="h-6 w-6" />
              </div>

              {/* Rótulo / Label */}
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 transition-colors duration-300">
                {item.label}
              </span>

              {/* Valor Principal (Linkado visualmente) */}
              <span className="font-sans font-semibold tracking-tight text-base sm:text-lg xl:text-xl text-foreground mb-3 break-all px-2 transition-colors duration-300">
                {item.value}
              </span>

              {/* Subtexto descritivo */}
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-sans max-w-[200px]">
                {item.subtext}
              </p>

              {/* Linha de Destaque na Base */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2 ${item.accentBg}`}
              />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
