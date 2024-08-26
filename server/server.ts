import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

import antelopeData from './data.json'

app.get('/api/antelopes', (req, res) => {
  res.json(antelopeData)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
