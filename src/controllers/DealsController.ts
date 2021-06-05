import { Request, Response } from "express";
import { now } from "mongoose";
import { AppError } from "../errors/AppErrors";
import { DealsHelper } from "../helpers/DealsHelper";
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

  async todayWonDeals(request: Request, response: Response) {
    const dealsService = new DealsService();

    try {
      const todayWonDeals = await dealsService.todayWonDeals();

      return response.status(200).json(todayWonDeals);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  async wonDealsByDate(request: Request, response: Response) {
    const { date } = request.query;

    const dealsService = new DealsService();

    try {
      const requestDate = new Date(String(date));

      const wonDealsByDate = await dealsService.wonDealsByDate(requestDate);

      return response.status(200).json(wonDealsByDate);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { DealsController };
