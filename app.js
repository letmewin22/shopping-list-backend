const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('./middleware/cors.middleware')

const app = express()
app.use(cors)
app.use(express.json({extended: true}))

app.use('/api/list', require('./routes/list.routes'))

const PORT = process.env.port || config.get('port')

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    app.listen(PORT, () => console.log(`app has been started on port ${PORT}`))
  } catch (e) {
    console.log('Server error:', e.message)
    process.exit(1)
  }
}

start()

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
