const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000

app.use("/api/users/",require("./routes/User"))

app.get('/',(req,res)=>{
    res.json({'msg':"hello world"})
})

app.listen(PORT,()=>{
    console.log(`Backend running on port ${PORT}`)
})