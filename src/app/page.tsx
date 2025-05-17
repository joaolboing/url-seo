'use client'

import { useState } from 'react'

export default function Home() {
  const [comprimento, setComprimento] = useState(60)
  return (
    <div>
      <h1>URL SEO</h1>

      <div>
        <span>Settings</span>
        <div className="flex flex-row gap-4">
          <div>
            <label className="block text-sm font-medium">Comprimento</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                id="length"
                min={10}
                max={150}
                value={comprimento}
                onChange={(e) => setComprimento(Number(e.target.value))}
              />
              <input
                type="number"
                value={comprimento}
                min={10}
                max={150}
                onChange={(e) => setComprimento(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
