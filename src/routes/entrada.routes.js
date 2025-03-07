import { Router } from "express";
import { registrarEntrada, listarEntradas } from "../controllers/entrada.controller.js";

const router = Router();

router.post('/registrar-entrada', registrarEntrada);
router.get('/listar-entradas', listarEntradas);


export default router;