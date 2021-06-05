import axios from "axios";
import { DealsHelper } from "../helpers/DealsHelper";
import moment from "moment-timezone";

class DealsService {
  private apiUrl: string;
  private apiToken: string;

  constructor() {
    this.apiUrl = process.env.PIPEDRIVE_API_URL;
    this.apiToken = `&api_token=${process.env.PIPEDRIVE_API_KEY}`;
  }

  async wonDeals() {
    const response = await axios.get(
      `${this.apiUrl}/deals?status=won${this.apiToken}`
    );
    return response.data.data;
  }

  async todayWonDeals() {
    const wonDeals = await this.wonDeals();

    const dealsHelper = new DealsHelper();

    let todayWonDeals = [];

    const today = new Date(moment().tz(process.env.TZ).format().substr(0, 10));
    today.setHours(0, 0, 0, 0);
    const strToday = dealsHelper.getStrDay(today, true);

    wonDeals.map((deal: any) => {
      if (deal.won_time) {
        let dealDate = new Date(deal.won_time);
        dealDate.setHours(0, 0, 0, 0);
        let strDealDate = dealsHelper.getStrDay(dealDate);

        if (strDealDate === strToday) {
          todayWonDeals.push(deal);
        }
      }
    });

    return todayWonDeals;
  }

  async wonDealsByDate(date: Date) {
    const wonDeals = await this.wonDeals();

    const dealsHelper = new DealsHelper();

    let wonDealsByDate = [];

    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    const strToday = dealsHelper.getStrDay(date, true);

    wonDeals.map((deal: any) => {
      if (deal.won_time) {
        let dealDate = new Date(deal.won_time);
        dealDate.setHours(0, 0, 0, 0);
        let strDealDate = dealsHelper.getStrDay(dealDate);

        if (strDealDate === strToday) {
          wonDealsByDate.push(deal);
        }
      }
    });

    return wonDealsByDate;
  }
}

export { DealsService };
