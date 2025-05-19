'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const rows = 25

  const titulosRef = useRef<HTMLTextAreaElement>(null)
  const urlsRef = useRef<HTMLTextAreaElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (sourceTextArea: any, targetTextArea: any) => {
    const source = sourceTextArea.current
    const target = targetTextArea.current

    if (!source || !target) return

    target.scrollTop = source.scrollTop
    target.scrollLeft = source.scrollLeft
  }

  useEffect(() => {
    const titulosArea = titulosRef.current
    const urlsArea = urlsRef.current

    if (titulosArea && urlsArea) {
      const handleScroll1 = () => handleScroll(titulosRef, urlsRef)
      const handleScroll2 = () => handleScroll(urlsRef, titulosRef)

      titulosArea.addEventListener('scroll', handleScroll1)
      urlsArea.addEventListener('scroll', handleScroll2)
      return () => {
        titulosArea.removeEventListener('scroll', handleScroll1)
        urlsArea.removeEventListener('scroll', handleScroll2)
      }
    }
  })

  const [titulos, setTitulos] = useState<string[]>([])
  const [urls, setUrls] = useState<string[]>([])

  useEffect(() => {
    const urls = titulos.map((titulo) => {
      return titulo
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '')
    })
    setUrls(urls)
  }, [titulos])

  return (
    <div className="container mx-auto mt-2">
      <h1 className="text-3xl font-bold text-center">URL SEO</h1>

      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="flex flex-col text-center">
          <label>Titulos</label>
          <textarea
            ref={titulosRef}
            rows={rows}
            className="border p-2"
            value={titulos.join('\n')}
            onChange={(e) => {
              setTitulos(e.target.value.split('\n'))
            }}
          ></textarea>
        </div>
        <div className="flex flex-col text-center">
          <label>URLs</label>
          <textarea
            ref={urlsRef}
            rows={rows}
            value={urls.join('\n')}
            className="border p-2"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
