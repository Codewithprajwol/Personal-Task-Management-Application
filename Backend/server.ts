import express,{Express,Request, Response} from 'express'

const app:Express=express()


app.get('/',(req:Request,res:Response)=>{
    res.send('hello from nepal')
})


app.listen(3000,()=>{
    console.log('Server is listening at port 3000')
})