import Entrada from "../models/entrada.model.js";
import Bandeja from "../models/bandeja.model.js";
import User from "../models/user.model.js";

export const validarEntrada= async (req, res) => {
    const {rut} = req.body;
    try {
        const validUser = await User.find({
                            rut: rut,
                            status: 1
                        });
        if(!validUser){
            throw new Error("usuario no encontrado");
        }

        const validEntrada = await Entrada.find({
                        user: validUser._id,
                        status: 1,
        });
        if(!validEntrada){
            throw new Error("Entrada no encontrada");
        }

        return res.status(200).json({validEntrada})
    } catch (error) {
        return res.status(404).json(error)
    }
   

}

export const registrarBandeja = async (req, res) => {
    const {entrada, clon, invernadero, canaleton, correlativo } = req.body;
    try {
        let fecha = Date.now();
        const newBandeja= new Bandeja({
                    clon,
                    invernadero,
                    canaleton,
                    correlativo,
                    fecha:fecha,
                    entrada,
                });
        await newBandeja.save();
        return res.status(200).json({message:"bandeja registrada con exito"});
    } catch (error) {
        return res.status(404).json(error);
    }
    
}

export const finalizarIngresos = async (req, res) =>{
    const {entrada} = req.body;
    try {
        const validEntrada = await Entrada.findById(entrada);
        if(!validEntrada){
            throw new Error("Entrada no encontrada");
            
        }
        validEntrada.status = 0;
        validEntrada.save();
        return res.status(200).json({message:"Proceso finalizado"});
    } catch (error) {
        return res.status(404).json(error);
    }
   
}