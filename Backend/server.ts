import express,{Express,Request, Response} from 'express'
import 'dotenv/config'
import { AppDataSource } from './config/connectdb.js'
const app:Express=express()



app.get('/',(req:Request,res:Response)=>{
    res.send('hello from nepal')
    
})


app.listen(3000,()=>{
    AppDataSource.initialize().then(()=>{
        console.log('Data source has been intialized')
    }).catch((err)=>console.log(err.message))
    console.log('Server is listening at port 3000')
})