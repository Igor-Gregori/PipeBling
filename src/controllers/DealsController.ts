import { Request, Response } from "express";
import { AppError } from "../errors/AppErrors";
import { DealsService } from "../services/DealsService";

class DealsController {
  async wonDeals(request: Request, response: Response) {
    const dealsService = new DealsService();

    try {
      const wonDeals = await dealsService.wonDeals();

      return response.status(200).json(wonDeals);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { DealsController };

