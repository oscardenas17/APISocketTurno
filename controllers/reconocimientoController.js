import Reconocimiento from "../models/Reconocimientos.js"

const agregarReconocimiento = async (req, res) => {

    const reconocimiento = new Reconocimiento(req.body)
    
    try {
        const reconocimientoAlmacenado = await reconocimiento.save();
        res.json(reconocimientoAlmacenado)
    } catch (error) {
        console.log(error);
    }
}

const obtenerReconocimiento = async(req,res)=>{  
    const reconocimientos = await Reconocimiento.find( )
    console.log(reconocimientos);
    res.json(reconocimientos)
}








export {
    agregarReconocimiento,
    obtenerReconocimiento
}