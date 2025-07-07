'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QuoteCard from "@/components/QuoteCard"
import { quotesData } from "@/lib/quotes"



export default function Home() {
  const [topic, setTopic] = useState('')
  const [quotes, setQuotes] = useState<{ text: string; source: string }[]>([])

  const handleGetQuotes = () => {
    const found = quotesData[topic.toLowerCase()]
    setQuotes(found ? found.slice(0, 3) : [])
  }

  return (
        <main className="min-h-screen animated-bg flex flex-col items-center justify-center p-4 text-white">
        <div className="w-full max-w-xl bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/30">
        <h1 className="text-2xl font-bold text-pink-700 mb-4 text-center">💡 Quote Generator</h1>

        <div className="flex gap-2 flex-wrap justify-center mb-4 text-sm">
          {["determination", "faith", "patience", "gratitude", "mercy", "forgiveness", "success", "motivation", "humility", "trust", "honesty", "kindness", "justice", "prayer", "charity", "knowledge", "repentance"].map(tag => (
            <button
              key={tag}
              onClick={() => setTopic(tag)}
              className="bg-pink-200 text-rose-800 rounded-full px-3 py-1 hover:bg-pink-300 transition"
            >
              {tag}
            </button>
          ))}
        </div>

        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic e.g. determination"
          className="mb-4 text-black"
        />
        <Button
          onClick={handleGetQuotes}
          className="bg-gradient-to-r from-rose-300 to-pink-500 text-white font-semibold w-full shadow-lg hover:scale-105 hover:brightness-110 transition"
        >
          🎯 Get Quotes
        </Button>

        <div className="mt-6">
          {quotes.length > 0 ? (
            quotes.map((quote, i) => (
              <QuoteCard key={i} text={quote.text} source={quote.source} />
            ))
          ) : (
            <p className="text-gray-500 mt-4">No quotes found for this topic.</p>
          )}
        </div>
      </div>
    </main>
  )
}
