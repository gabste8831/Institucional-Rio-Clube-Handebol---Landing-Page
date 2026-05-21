"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MessageCircle, Instagram, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 sm:py-32 bg-secondary/50" ref={ref}>
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
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Venha fazer parte do{" "}
            <span className="text-muted-foreground">time</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Entre em contato conosco e comece a treinar. Todas as idades são bem-vindas!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="block h-full min-h-[170px] p-6 rounded-2xl bg-card border border-border hover:border-verde/50 transition-all group"
                >
                  <div className="flex h-full flex-col justify-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-verde/10 flex items-center justify-center transition-colors">
                        <item.icon className="h-5 w-5 text-foreground group-hover:text-verde transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="h-full overflow-hidden">
              <CardContent className="flex h-full flex-col justify-between p-6 bg-verde/10 border-verde/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-verde flex items-center justify-center shrink-0">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Prefere WhatsApp?</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Tire suas dúvidas diretamente pelo WhatsApp
                    </p>
                    <Button asChild className="bg-verde hover:bg-verde/90 text-white">
                      <Link
                        href="https://wa.me/5547999990000?text=Olá! Gostaria de saber mais sobre o Handebol Rio do Sul."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-6">Envie uma mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(47) 99999-0000" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Idade do participante</Label>
                    <Input id="age" placeholder="Ex: 15 anos" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre seu interesse no projeto..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mensagem Enviada!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
