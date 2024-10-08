export const metadata = {
  title: 'amt.dev | Portfolio',
  description: 'Aye Min Tun Portfolio website using NextJs',
}
import ThemeProviderSection from "@/components/ThemeProviderSection"
import Navigation from "@/components/navigation/Navigation"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import Template from "./template"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/logo.png" type="image/x-icon"></link>
      <Template>
        <body className="bg-white dark:bg-slate-900">
          <ThemeProviderSection>
            <Navigation />
            <Toaster position="bottom-left" />
            <main>{children}</main>
          </ThemeProviderSection>
        </body>
      </Template>

    </html>
  )
}
