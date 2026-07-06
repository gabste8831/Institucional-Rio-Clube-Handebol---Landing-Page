"use client"

import Link from "next/link"
import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#historia", label: "História" },
  { href: "#treinos", label: "Treinos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
  { href: "#parceiros", label: "Parceiros" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-verde" />
                <span className="h-2 w-2 rounded-full bg-amarelo" />
                <span className="h-2 w-2 rounded-full bg-azul" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">
                Rio Clube Handebol
              </span>
            </Link>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Projeto esportivo comunitário que promove a prática do handebol para todas as idades.
              Treinos gratuitos, competições regionais e muito mais. Venha fazer parte do time!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rioclube_handebol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5547997409924?text=Olá! Gostaria de saber mais sobre o Handebol Rio do Sul."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rioclubehandebol@gmail.com&su=Contato%20-%20Rioclube%20Handebol"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-background/50" />
                <a
                  href="https://maps.app.goo.gl/2pVbGKXdX7uCGVjW6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Colégio Municipal João Custódio da Luz - Rio do Sul - SC<br />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-background/50" />
                <a
                  href="https://wa.me/5547997409924?text=Olá! Gostaria de saber mais sobre o Handebol Rio do Sul."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  (47) 9 9740-9924
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-background/50" />
                <a
                  href="mailto:rioclubehandebol@gmail.com"
                  className="text-background/70 hover:text-background break-all transition-colors text-sm"
                >
                  rioclubehandebol@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Rio Clube Handebol. Todos os direitos reservados.
          </p>
          <a className="text-sm text-background/50 flex items-center gap-1 hover:text-background transition-colors" href="https://www.instagram.com/gabr_ste/">
            Feito por Gabriel Steffens
          </a>
        </div>
      </div>

      {/* Color Bars */}
      <div className="flex h-1">
        <div className="flex-1 bg-verde" />
        <div className="flex-1 bg-amarelo" />
        <div className="flex-1 bg-azul" />
      </div>
    </footer>
  )
}
