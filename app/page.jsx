import Link from 'next/link'
export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">WebBotKelas — Official Docs</h1>
      <p className="small mb-4">Documentation & installer for <strong>BotKelas</strong>. Deployable to Vercel at <em>botkelasfloss.vercel.app</em>.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h3 className="font-semibold">Install</h3>
          <p className="small">Quick start guide to run the bot locally or on a VPS.</p>
          <Link href="/install" className="mt-2 inline-block">Open install guide →</Link>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Commands (78)</h3>
          <p className="small">Auto-discovered commands from your bot repo.</p>
          <Link href="/commands" className="mt-2 inline-block">View commands →</Link>
        </div>
      </div>
    </section>
  )
}
