import type { Metadata } from 'next'
import { Figtree, Crimson_Pro } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | EMDR & Trauma Therapy in Santa Monica',
  description: 'Licensed Clinical Psychologist specializing in EMDR, trauma, anxiety, and burnout therapy for high-achieving adults in Santa Monica, California.',
  keywords: ['EMDR therapy', 'trauma therapy', 'Santa Monica therapist', 'anxiety treatment', 'burnout therapy', 'psychologist Santa Monica'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-sage-50 text-navy-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}