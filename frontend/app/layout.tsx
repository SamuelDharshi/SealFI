import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LandingNav } from '@/components/layout/LandingNav'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: 'SealFi | Every Vote is Sealed',
  description: 'SealFi is the first confidential DAO governance protocol on Ethereum using Zama\'s fhEVM. Every vote is cast as an encrypted value, and the tally arrives once, when it closes.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased bg-black text-white`}>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <LandingNav />
          <main className="flex-1">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
