import express,{Express} from 'express'
import 'dotenv/config'
import { AppDataSource } from './config/connectdb.js'
import taskRoutes from './routes/task.routes.js'
const app:Express=express()



app.use('/',taskRoutes)


app.listen(3000,()=>{
    AppDataSource.initialize().then(()=>{
        console.log('Data source has been intialized')
    }).catch((err)=>console.log(err.message))
    console.log('Server is listening at port 3000')
})