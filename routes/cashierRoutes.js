const express = require("express");

const router=express.Router()
 
router.get('/',(req,res)=>{
    res.json({mssg:"get all elemenst"})

})

router.post('/',(req,res)=>{
    res.json({mssg:"post all elemenst"})

})
