import ReduxProvider from "@/components/Providers/ReduxProvider"
import "./globals.css"
import { Cormorant_Upright, Open_Sans } from "next/font/google"

const com = Cormorant_Upright({
  variable: "--font-com",
  display: "swap",
  weight: ["600", "700"],
  subsets: ["latin"],
})

const sans = Open_Sans({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
})

export const metadata = {
  title: "Belle Full",
  description: "Meal Application, A key to fine dining",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${com.variable} ${sans.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
