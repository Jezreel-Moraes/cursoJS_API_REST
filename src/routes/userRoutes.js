import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// router.get("/", userController.index);
// router.get("/:id", userController.show);

router.post("/", loginRequired, userController.create);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
/*
  index -> listar todos -> GET
  store/create -> criar um novo -> POST
  delete -> apagar um -> DELETE
  show -> mostrar um -> GET
  update -> atualizar um -> PATCH ou PUT
*/
