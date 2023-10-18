import express from "express";
import rotasUsuario from "./routes/rotasUsuario.js"
//import technologyRoutes from "./routes/technologyRoutes";
//import {errorMiddleware} from "./middlewares/error";

const app = express();
const porta = 3000;

app.use(express.json());
app.use("/user", rotasUsuario);
//app.use("/technologies", technologyRoutes);
//app.use(errorMiddleware);


app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta ${porta}`);
})

export default app;