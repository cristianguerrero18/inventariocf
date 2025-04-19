
import express from "express"
import categoriasRoutes from "./routes/categorias.routes.js"
import clientesRoutes from "./routes/clientes.routes.js" 
import cors from  "cors"

const app = express(); 

app.use(cors());

app.use(express.json());

app.set("port",5000);
app.use("/api/categorias",categoriasRoutes)
app.use("/api/clientes",clientesRoutes)

export default app ; 