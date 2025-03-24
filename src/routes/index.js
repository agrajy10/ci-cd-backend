import { Router } from "express";
import IndexController from "../controllers/index.js";

const router = Router();
const indexController = new IndexController();

export default function setRoutes(app) {
  app.use("/api/tasks", router);
  router.get("/", indexController.getTasks.bind(indexController));
  router.post("/create-task", indexController.createTask.bind(indexController));
  router.put(
    "/task/:id/completed",
    indexController.updateTaskStatus.bind(indexController)
  );
}
