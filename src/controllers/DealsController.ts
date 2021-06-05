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
    const { date } = request.params;
    this.dealsService = new DealsService();

    try {
      if (String(date).length != 10 || String(date)[4] != "-") {
        throw new Error(
          "Date with invalid format, follow the 'YYYY-MM-DD' template !"
        );
      }

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