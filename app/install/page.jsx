'use client'
import React from 'react'

export default function InstallPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Install BotKelas</h1>
      <div className="card p-4">
        <pre className="whitespace-pre-wrap small"># Install Guide — BotKelas (quick)
Requirements:
- Node.js v18+
- npm (or pnpm)
- Git (optional)

Steps:

1. Clone repo
```bash
git clone https://github.com/yourname/webbotkelas.git
cd webbotkelas
```
2. Install deps
```bash
npm install
```
3. Create .env file (example):
```
SESSION=your-session
PORT=3000
API_KEY=...
```
4. Run
```bash
npm run start
# or for dev
npm run dev
```
Pairing & auth: follow the bot's console output when it starts; scan QR if needed.

For production, run inside a systemd service or use PM2.

</pre>
      </div>
    </section>
  )
}
