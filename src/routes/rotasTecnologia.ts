import { Router } from "express";
import { controladorTecnologia } from "../controllers/controladorTecnologia";
import { contaUsuarioExiste } from "../middlewares/contaUsuarioExiste";

const router = Router();

router.get("/", contaUsuarioExiste, controladorTecnologia.index);
router.post("/", contaUsuarioExiste, controladorTecnologia.store);
router.put("/:id", contaUsuarioExiste, controladorTecnologia.update);
router.patch("/:id/studied", contaUsuarioExiste, controladorTecnologia.updateStatus);
router.delete("/:id", contaUsuarioExiste, controladorTecnologia.destroy);

export default router;