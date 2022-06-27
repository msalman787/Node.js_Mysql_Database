const express = require("express")
const cors = require("cors")


const app = express()

var corOption = {
    origin :"https:http://localhost:4000/"
}

// middleware

app.use(cors(corOption))

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


// routers

const router = require("./routes/productRouters")

app.use("/api/products",router)


// text api

app.get('/',(req,res)=>{
    res.json({message:"Hello  I am Apii"})
})

// Port
const PORT = process.env.PORT || 4001

// Server

app.listen(PORT,()=>{
    console.log(`Server In Runing This ${PORT}`)
})