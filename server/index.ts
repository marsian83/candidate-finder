import 'dotenv/config'

import express from 'express'
import cors from "cors"
import indexRouter from './src/routes/_index';

import { frontendUrl } from './config';

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({origin : frontendUrl}));
app.use(express.json())

app.use('/',indexRouter)

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})
