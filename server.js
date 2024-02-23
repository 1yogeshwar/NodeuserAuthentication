
const express = require('express')



const app = express()
app.use(express.json());


const router=require('./routers/auth-router')
const connectDb=require('./utils/db');


app.use("/api/auth", router);

connectDb().then(()=>{
const port = 5000
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
})