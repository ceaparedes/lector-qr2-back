import User from "../models/user.model.js"


export const register = async (req, res) =>{
    
    const {rut, nombre } = req.body;
    try {
        const newUser= new User({
            rut,
            nombre,
            status:1
        });
        
        await newUser.save();
        res.json({message:'registrado'});
    } catch (error) {
        console.log(error);
    }
    
    
}

export const testConcection = (req,res) => {
    res.json({message:'conexión establecida'});
}