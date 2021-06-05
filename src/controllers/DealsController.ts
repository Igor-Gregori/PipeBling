import { Request, Response } from "express";
import { AppError } from "../errors/AppErrors";
import { DealsService } from "../services/DealsService";

class DealsController {
  private dealsService: DealsService;

  async wonDeals(request: Request, response: Response) {
    this.dealsService = new DealsService();
    try {
      const wonDeals = await this.dealsService.wonDeals();
      return response.status(200).json(wonDeals);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  async todayWonDeals(request: Request, response: Response) {
    this.dealsService = new DealsService();
    try {
      const todayWonDeals = await this.dealsService.todayWonDeals();
      return response.status(200).json(todayWonDeals);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  async wonDealsByDate(request: Request, response: Response) {
    const { date } = request.query;
    this.dealsService = new DealsService();
    try {
      const wonDealsByDate = await this.dealsService.wonDealsByDate(
        String(date)
      );
      return response.status(200).json(wonDealsByDate);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { DealsController };
