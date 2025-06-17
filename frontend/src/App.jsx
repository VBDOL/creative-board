import React, { useState, useEffect } from 'react'
import IdeaCard from './components/IdeaCard.jsx'

const App = () => {
  const [ideas, setIdeas] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/ideas')
      .then(res => res.json())
      .then(data => setIdeas(data))
  }, [])

  const addIdea = async () => {
    if (!input.trim()) return
    const res = await fetch('http://localhost:4000/ideas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    })
    const newIdea = await res.json()
    setIdeas(prev => [...prev, newIdea])
    setInput('')
  }

  const removeIdea = async (id) => {
    await fetch(`http://localhost:4000/ideas/${id}`, { method: 'DELETE' })
    setIdeas(prev => prev.filter(idea => idea.id !== id))
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Painel de Ideias Criativas</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 flex-grow rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite uma nova ideia"
        />
        <button
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          onClick={addIdea}
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {ideas.map(idea => (
          <IdeaCard key={idea.id} idea={idea} onRemove={() => removeIdea(idea.id)} />
        ))}
      </div>
    </div>
  )
}

export default App
