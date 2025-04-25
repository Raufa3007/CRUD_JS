const express=require("express")
const { GetProd, GetProds, PostProd, UpdateProd, DeleteProd } = require("../controllers/product_controllers")
const route=express.Router()

route.get('/get',GetProds)
route.get('/get/:id',GetProd)
route.post('/post',PostProd)
route.put('/update/:id',UpdateProd)
route.delete('/delete/:id',DeleteProd)

module.exports=route;