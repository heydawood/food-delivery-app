import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://root:root@cluster0.atu8u.mongodb.net/tomato')
    .then(()=>{
         console.log('db connected')
    })
}