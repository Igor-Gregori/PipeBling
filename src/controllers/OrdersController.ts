import { Request, Response } from "express";
import { AppError } from "../errors/AppErrors";
import { OrderRepository } from "../repositories/OrdersRepository";
import { DealsService } from "../services/DealsService";
import { OrdersService } from "../services/OrdersService";

class OrdersController {
  async createOrders(request: Request, response: Response) {
    const dealsService = new DealsService();
    const ordersService = new OrdersService();
    const orderRepository = new OrderRepository();

    try {
      const wonDeals = await dealsService.wonDeals();
      
      const responseOrders = await ordersService.create(wonDeals);

      const savedOrders = await orderRepository.saveTodayOrders(responseOrders);

      return response.status(201).json(savedOrders);
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
