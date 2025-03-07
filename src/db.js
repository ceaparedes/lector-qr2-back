import mongoose from 'mongoose'

export const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb://atlas-sql-67ca335522e7793d15f3619a-lm7vx.a.query.mongodb.net/lectorqr?ssl=true&authSource=admin");
        console.log(">>>> DB is connected")
    } catch (error) {
        console.log(error);
    }
    
};

