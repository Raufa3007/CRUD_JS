const Product=require("../models/productsmodel")

async function PostProd(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ "message": error });
    }
}
const GetProds=async(req,res)=>{
    try{
            const products=await Product.find({})
            res.status(200).json(products)
        }
        catch(error){
            res.status(500).json(error)
        }
}
const GetProd=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json({product});
    }
    catch(error){
        res.status(404).json(error);
    }

}
const DeleteProd=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json('Poduct Not Found')
        }
        res.status(200).json({message:"Product Sucessfully Deleted"})

    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const UpdateProd=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json('Poduct Not Found')
        }
        const UpdatedProduct=await Product.findById(id)
        res.status(200).json({UpdatedProduct})

    }
    catch(error){
        res.status(500).json({message:error})
    }
}


module.exports={GetProd,GetProds,PostProd,UpdateProd,DeleteProd};