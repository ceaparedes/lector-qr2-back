import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    rut: {type:String, required:true, trim:true},
    nombre: {type:String, required:true, trim:true},
    status: {type:Number, required:true}
});

export default mongoose.model('User',userSchema);