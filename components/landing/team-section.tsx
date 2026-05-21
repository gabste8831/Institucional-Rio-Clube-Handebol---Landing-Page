"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const coordinators = [
  {
    name: "Eliani Finger Patzlaff",
    role: "Coordenadora",
    description: "Responsável pela organização geral e desenvolvimento técnico dos atletas.",
    phone: "(47) 99999-0001",
    email: "eliani@handebolriodosul.com",
    instagram: "@eliani.handball",
  },
  {
    name: "Micael Albino",
    role: "Coordenador",
    description: "Foco em preparação física e estratégias de jogo para competições.",
    phone: "(47) 99999-0002",
    email: "micael@handebolriodosul.com",
    instagram: "@micael.handball",
  },
  {
    name: "Igor Souza",
    role: "Coordenador",
    description: "Trabalho com categorias de base e formação de novos talentos.",
    phone: "(47) 99999-0003",
    email: "igor@handebolriodosul.com",
    instagram: "@igor.handball",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="equipe" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Profissionais dedicados que fazem o projeto acontecer, 
            compartilhando conhecimento e paixão pelo handebol.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={coordinator.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-border hover:border-amarelo/50">
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-serif text-3xl font-medium text-muted-foreground">
                        {coordinator.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                    <div className="flex-1 bg-verde" />
                    <div className="flex-1 bg-amarelo" />
                    <div className="flex-1 bg-azul" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">{coordinator.name}</h3>
                    <p className="text-sm text-verde font-medium">{coordinator.role}</p>
                  </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
