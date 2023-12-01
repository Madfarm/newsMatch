require('dotenv').config()
require('./config/db.connection')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/user-router');
const matchRouter =  require('./routes/matches-router');


const app = express()

const { PORT } = process.env 


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(cors())
app.use(morgan("dev"))

// routers will go here
app.use('/user', userRouter);
app.use('/', matchRouter);


app.get('/', (req,res)=>res.send('Hitting home route'))



app.listen(PORT, ()=>console.log(`Listening on PORT: ${PORT}`))