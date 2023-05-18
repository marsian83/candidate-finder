import express from "express"
const router = express.Router()

router.get('/s',(req,res)=>{
    res.send({lol:'lllll'})
})

export default router