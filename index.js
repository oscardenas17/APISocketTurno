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



//Routing
app.use('/api/reconocimiento', reconocimientoRoutes)

//turnos
// app.use('/api/turnos', turnosRoutes)

//

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
    console.log('server run 4000');
}) 