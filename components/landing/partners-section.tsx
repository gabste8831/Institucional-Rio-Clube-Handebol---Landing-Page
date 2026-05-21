"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, Heart, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const currentPartners = [
  { name: "Fundação de Esportes", type: "Institucional" },
  { name: "Prefeitura de Rio do Sul", type: "Governamental" },
  { name: "Empresa Parceira 1", type: "Patrocinador" },
  { name: "Empresa Parceira 2", type: "Apoiador" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="parceiros" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-azul font-medium mb-4">
            Parceiros & Apoiadores
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance mb-6">
            Juntos pelo{" "}
            <span className="text-muted-foreground">esporte</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Empresas e instituições que acreditam no poder do esporte para transformar vidas. 
            Seu logo pode estar no nosso uniforme de treinos e jogos.
          </p>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-center font-semibold text-lg mb-8">Nossos Parceiros Atuais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="font-medium text-sm">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="bg-foreground text-background p-6">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold text-xl">Seja um Parceiro</h3>
                  <p className="text-sm opacity-80">
                    Apoie o esporte e tenha visibilidade para sua marca
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa / Instituição</Label>
                    <Input id="company" placeholder="Nome da empresa" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nome do Contato</Label>
                    <Input id="contact-name" placeholder="Seu nome" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">E-mail</Label>
                    <Input id="contact-email" type="email" placeholder="email@empresa.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Telefone</Label>
                    <Input id="contact-phone" placeholder="(47) 99999-0000" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partnership-type">Tipo de Parceria</Label>
                  <Input
                    id="partnership-type"
                    placeholder="Ex: Patrocínio, Doação de materiais, Apoio logístico..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partnership-message">Mensagem</Label>
                  <Textarea
                    id="partnership-message"
                    placeholder="Conte-nos mais sobre como gostaria de apoiar o projeto..."
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-azul hover:bg-azul/90 text-white"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Proposta Enviada!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Proposta de Parceria
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
