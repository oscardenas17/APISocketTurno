import mongoose from "mongoose"

const reconocimientoSchema = mongoose.Schema( {

    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    apellidos: {
        type: String,
        trim: true,
        required: true,
    },
    consultorio: {
        type: String,
        trim: true,
        required: true,
    },
    centro: {
        type: String,
        trim: true,
        required: true,
    },

} );

const Reconocimiento = mongoose.model( "Reconocimiento", reconocimientoSchema );

export default Reconocimiento;