import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FindMyIP',
  description: 'Find your public IP address. IPv4 and IPv6.',
  openGraph: {
    title: "FindMyIP",
    description: "App for finding your public IP address. IPv4 and IPv6."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
