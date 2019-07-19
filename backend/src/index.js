const  express = require('express')
require('./db/mongoose')
const cors = require('cors')

const homeRoute = require('./routes/home-routes')

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json(),homeRoute)

app.listen(port,()=>{
    console.log(`server is up and unning on port ${port} !!!`)
})


