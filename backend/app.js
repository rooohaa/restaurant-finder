import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8000
const app = express()

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT)
})

app.get('/', (req, res) => {
   res.send('Hello world :)')
})
