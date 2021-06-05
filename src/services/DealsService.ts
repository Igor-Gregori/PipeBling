import axios from "axios";
import { DealsHelper } from "../helpers/DealsHelper";

class DealsService {
  private apiUrl: string;
  private apiToken: string;

  private dealsHelper: DealsHelper;

  constructor() {
    this.apiUrl = process.env.PIPEDRIVE_API_URL;
    this.apiToken = `&api_token=${process.env.PIPEDRIVE_API_KEY}`;

    this.dealsHelper = new DealsHelper();
  }

  async wonDeals() {
    const response = await axios.get(
      `${this.apiUrl}/deals?status=won${this.apiToken}`
    );
    return response.data.data;
  }

  async todayWonDeals() {
    const wonDeals = await this.wonDeals();

    let todayWonDeals = [];
    const today = this.dealsHelper.getStrToday();

    wonDeals.map((deal: any) => {
      if (deal.won_time) {
        let dealDate = this.dealsHelper.getStrOfDay(deal.won_time);
        if (dealDate == today) {
          todayWonDeals.push(deal);
        }
      }
    });

    return todayWonDeals;
  }

  async wonDealsByDate(date: string) {
    const wonDeals = await this.wonDeals();

    let wonDealsByDate = [];
    const day = this.dealsHelper.getStrOfUTCDay(date);

    wonDeals.map((deal: any) => {
      if (deal.won_time) {
        let dealDate = this.dealsHelper.getStrOfDay(deal.won_time);
        if (dealDate == day) {
          wonDealsByDate.push(deal);
        }
      }
    });

    return wonDealsByDate;
  }
}

export { DealsService };
