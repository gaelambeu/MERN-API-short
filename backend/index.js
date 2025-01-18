const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors({
    origin:'*'
}))

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/CRUD_API_DB")



app.listen(8000,function(){
    console.log("server is running")
})