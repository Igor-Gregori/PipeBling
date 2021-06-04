import { Request, Response } from "express";
import { AppError } from "../errors/AppErrors";
import { DealsService } from "../services/DealsService";
import { OrdersService } from "../services/OrdersService";

class OrdersController {
  async createOrders(request: Request, response: Response) {
    const dealsService = new DealsService();
    const ordersService = new OrdersService();

    try {
      const wonDeals = await dealsService.wonDeals();
      const responseOrders = await ordersService.create(wonDeals);

      //Salvar no banco de dados

      return response.status(201).json(responseOrders);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  async getAll(request: Request, response: Response) {
    const ordersService = new OrdersService();
    try {
      const responseOrders = await ordersService.getAll();

      return response.status(200).json(responseOrders);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { OrdersController };
