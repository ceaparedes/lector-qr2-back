import mongoose from "mongoose";

const entradaSchema = new mongoose.Schema({
    fecha : {type:Date, required:true, trim:true},
    status: {type:Number, required:true},
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
});

export default mongoose.model('Entrada',entradaSchema);