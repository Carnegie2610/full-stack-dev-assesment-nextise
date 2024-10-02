import type { Metadata } from "next"
import './globals.css'

export const metadata : Metadata = {
  title: 'seminar management',
  description: 'assesment to build a seminar mangement sys ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}