import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let ideas = []
let id = 1

// 🔹 Nova rota raiz (GET /)
app.get('/', (req, res) => {
  res.send(`
    <h2>🚀 API do Painel de Ideias Criativas</h2>
    <p>Use a rota <code>/ideas</code> para ver ou enviar ideias.</p>
  `)
})

app.get('/ideas', (req, res) => {
  res.json(ideas)
})

app.post('/ideas', (req, res) => {
  const { text } = req.body
  if (!text || !text.trim()) return res.status(400).json({ error: 'Texto obrigatório' })

  const idea = { id: id++, text }
  ideas.push(idea)
  res.status(201).json(idea)
})

app.delete('/ideas/:id', (req, res) => {
  const ideaId = parseInt(req.params.id)
  ideas = ideas.filter(i => i.id !== ideaId)
  res.status(204).end()
})

const PORT = 4000
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`))
