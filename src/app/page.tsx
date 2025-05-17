'use client'

import { RangeInput } from '@/components/RangeInput'
import { useState } from 'react'

export default function Home() {
  const [comprimento, setComprimento] = useState(60)
  return (
    <div>
      <h1>URL SEO</h1>

      <div>
        <span>Settings</span>
        <div className="flex flex-row gap-4">
          <RangeInput
            min={10}
            max={150}
            label="Comprimento"
            value={comprimento}
            onChange={(value) => setComprimento(value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
