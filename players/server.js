const express = require("express")
 
const app = express();

const HOST = "0.0.0.0"

const PORT = 80

app.get('/', (req,res)=>{
    res.json({
        players:["Mario", "John", "Sarah","Joe", "Jerry","Pepe"]
    })
})

app.listen(PORT,HOST)
console.log(`RUNNING ON ${HOST}:${PORT}`)