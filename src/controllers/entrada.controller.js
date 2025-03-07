import Entrada from "../models/entrada.model.js";
import User from "../models/user.model.js";

export const registrarEntrada = async (req, res) =>{
    
    const {rut} = req.body;
    try {
        const validUser = await User.find({
           rut: rut,
           status: 1
        });
         if(!validUser){
            throw new Error("usuario no encontrado");
         }
         let fecha = Date.now();
         const newEntrada= new Entrada({
                     fecha: fecha,
                     user:validUser._id,
                     status:1
                 });

        await newEntrada.save();
       return res.json({message:'registrado'});
    } catch (error) {
        console.log(error);
    }
    
}

export const listarEntradas = async (req, res) => {
    const entradas = await Entrada.find().populate('User');
    return res.json(entradas);
}

