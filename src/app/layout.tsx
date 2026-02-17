import './globals.css'
import ForestBackground from '@/components/ForestBackground'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-hidden">
        <ForestBackground />
        {children}
      </body>
    </html>
  )
}
