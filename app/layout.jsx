import './globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'WebBotKelas - Docs',
  description: 'Official docs for BotKelas - FLOSS WhatsApp Bot'
}

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'dark'
    setTheme(t)
    document.documentElement.className = t === 'light' ? 'light' : ''
  },[])
  function toggle(){
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t)
    localStorage.setItem('theme', t)
    document.documentElement.className = t === 'light' ? 'light' : ''
  }
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="p-4 flex items-center justify-between card shadow-md">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">WebBotKelas</div>
              <nav className="hidden md:flex gap-3 small">
                <Link href="/install">Install</Link>
                <Link href="/commands">Commands</Link>
                <Link href="/update">Update</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a className="small" href="https://botkelasfloss.vercel.app" target="_blank" rel="noreferrer">botkelasfloss.vercel.app</a>
              <button aria-label="toggle theme" onClick={toggle} className="px-3 py-1 rounded-md card small">Toggle</button>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
          <footer className="p-4 small card text-center">
            © WebBotKelas • FLOSS • Generated docs
          </footer>
        </div>
      </body>
    </html>
  )
}
