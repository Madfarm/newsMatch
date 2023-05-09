require('dotenv').config()
require('./config/db.connection')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')




const app = express()

const { PORT } = process.env 


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use(morgan("dev"))

// routers will go here



app.get('/', (req,res)=>res.send('Hitting home route'))



app.listen(PORT, ()=>console.log(`Listening on PORT: ${PORT}`))