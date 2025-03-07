import mongoose from "mongoose";

const bandejaSchema = new mongoose.Schema({
    clon: {type:String, required:false},
    invernadero: {type:String, required:false},
    canaleton:{type:String, required:false},
    fecha: {type:Date, required:false},
    correlativo:{type:Number,required:false},
    entrada: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Entrada',
        required:true
    },
    
});

export default mongoose.model('Bandeja',bandejaSchema);