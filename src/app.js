import express from "express"
import morgan from "morgan";

import authRoutes from './routes/auth.routes.js';
import entradaRoutes from './routes/entrada.routes.js'
import bandejaRoutes from './routes/bandeja.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
//Rutas
app.use("/api/",authRoutes);
app.use("/api/",entradaRoutes);
app.use("/api/",bandejaRoutes);

export default app;