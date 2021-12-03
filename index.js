const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

// Import routes
const UserRoutes = require('./routes/UserRoutes')
const ProductRoutes = require('./routes/ProductRoutes')

dotenv.config()
// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => console.log("Connected to DB")
)

// middleware
app.use(express.json())
app.use(cors())

// route middlewares
app.use('/api/users', UserRoutes)
app.use('/api/Product', ProductRoutes)
app.use('/api/time',timeRouter)

app.listen(process.env.PORT, () => console.log(`Running server on port: ${process.env.PORT}`))