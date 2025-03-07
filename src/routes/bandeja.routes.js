import { Router } from "express";
import { validarEntrada, registrarBandeja, finalizarIngresos } from "../controllers/bandeja.controller.js";

const router = Router();

router.post('/validar-entrada', validarEntrada);
router.post('/registrar-bandeja', registrarBandeja);
router.post('/finalizar-ingresos', finalizarIngresos);

export default router;