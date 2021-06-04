import { Router } from "express";
import { DealsController } from "./controllers/DealsController";
import { OrdersController } from "./controllers/OrdersController";

const routes = Router();

const dealsController = new DealsController();
const ordersController = new OrdersController();

routes.get("/deals/won", dealsController.wonDeals);

routes.post("/orders", ordersController.createOrders);
routes.get("/orders", ordersController.getAll);

export { routes };
