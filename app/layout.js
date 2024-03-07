export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">{children}</body>
    </html>
  )
}
