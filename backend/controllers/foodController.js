import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item

const addFood = async(req,res) =>{

    let imageFileName = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: imageFileName,
        category: req.body.category,
    })
    try {
        await food.save();
        res.json({success:true, message:'Food Added'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
    
}

// fetching all food list
const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'error'})
    }

}

//removing food item

const removeFood = async (req, res) =>{

    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:'Food removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }


}



export {addFood, listFood, removeFood}