import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({ 
    origin: process.env.CORS_ORIGIN,
    credentials: true
    }))





app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(express.static('public'))
app.use(cookieParser())


import userRouter from './routes/user.route.js'
app.use('/quizapi/user',userRouter)


import questionRouter from './routes/questions.route.js'
app.use('/quizapi/questions',questionRouter)





export {app};