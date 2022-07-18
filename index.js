import express from  "express"
import dotenv from "dotenv"
import conectarDB from './config/db.js'
import cors from "cors"
import reconocimientoRoutes from './routes/reconocimientoRoutes.js'


const app = express();

app.use(express.json())

//Buscar Variables de entorno
dotenv.config()

//Conectar a la BD
conectarDB();


//const whitelist = [process.env.FRONTEND_URL];
const whitelist = ['http://localhost:5173'];
const corsOptions= {
    origin: function(origin, callback){
        //console.log(origin);
        if(whitelist.includes(origin)){
            callback(null, true); //Puede consultar API - null no error, true da acceso
        }else{
            callback(new Error('Error de Cors')); //No esta permitido
        }
    },
};

app.use(cors(corsOptions))
//fin CORS




//Routing
app.use('/api/reconocimiento', reconocimientoRoutes)

//turnos
// app.use('/api/turnos', turnosRoutes)

//

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
    console.log('server run 4000');
}) 