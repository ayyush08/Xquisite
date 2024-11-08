import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config(
    {
        path:'./.env'
    }
)

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR:",error);
    })

    app.get('/',(req,res)=>{
        res.send("Server is running")
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server listening on port ${process.env.PORT || 8000}`)
    })
})
.catch((error)=>{
    console.error("MongoDB connection Error: ",error)
})