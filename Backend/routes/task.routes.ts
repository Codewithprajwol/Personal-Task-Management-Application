import {Request,Response,Router} from 'express'

const router:Router=Router()

router.get('/tasks',(req:Request,res:Response)=>{
    res.send('hello from nepal')
})


export default router