import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Rio Clube Handebol | Time Oficial de Handebol de Rio do Sul',
  description: 'Projeto de handebol comunitário em Rio do Sul. Treinos gratuitos para crianças, jovens e adultos. Venha fazer parte da família Rio Clube!',
  keywords: ['handebol', 'rio do sul', 'esporte', 'treino', 'gratuito', 'comunidade'],
  icons: {
    icon: '/images/logo_rio_clube.png',
    shortcut: '/images/logo_rio_clube.png',
    apple: '/images/logo_rio_clube.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
