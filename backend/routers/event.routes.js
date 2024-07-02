import { Router } from "express";
import {
  evenCreate,
  evenLists,
  eventUnic,
  evenUpdate,
  evenDelete,
} from "../controller/event.controllers.js";

const router = Router();

router.get("/eventos", evenLists); //solicitar toda las tareas
router.get("/evento/:id", eventUnic); //obtener unica tarea por id
router.post("/crear_evento", evenCreate); //crear tareas de eventos
router.put("/Update_evento/:id", evenUpdate); //actualizar
router.delete("/delete_evento/:id", evenDelete); //cual tarea eliminar por id
export default router;
