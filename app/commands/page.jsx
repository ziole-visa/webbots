'use client'
import React, { useEffect, useState } from 'react'

export default function CommandsPage(){
  const [commands, setCommands] = useState([])
  const [q, setQ] = useState('')
  useEffect(()=>{
    fetch('/commands.json').then(r=>r.json()).then(j=>setCommands(j))
  },[])
  const filtered = commands.filter(c=>c.includes(q.toLowerCase()))
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Command List</h1>
      <div className="card p-4 mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search commands..." className="w-full p-2 rounded-md" />
      </div>
      <div className="grid gap-3">
        {filtered.map(cmd=>(
          <div key={cmd} className="card p-3 flex items-center justify-between">
            <div>
              <div className="font-mono">!{cmd}</div>
              <div className="small">Auto-generated from codebase</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>navigator.clipboard.writeText('!'+cmd)} className="px-3 py-1 rounded-md card small">Copy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
