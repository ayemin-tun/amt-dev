export const metadata = {
  title: 'amt.dev | Portfolio',
  description: 'Aye Min Tun Portfolio website using NextJs',
}
import ThemeProviderSection from "@/components/ThemeProviderSection"
import Navigation from "@/components/navigation/Navigation"
import "./globals.css"
import Template from "./template"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">

      <Template>
        <body className="bg-white dark:bg-slate-800">
          <ThemeProviderSection>
            <Navigation />
            <main>{children}</main>
          </ThemeProviderSection>
        </body>
      </Template>

    </html>
  )
}
