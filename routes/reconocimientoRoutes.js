import express from 'express';
import {obtenerReconocimiento,agregarReconocimiento } from '../controllers/reconocimientoController.js'


const router = express.Router();



//  api/reconocimiento 
router.get('/', obtenerReconocimiento)

// 
router.post('/agregar', agregarReconocimiento)





export default router
