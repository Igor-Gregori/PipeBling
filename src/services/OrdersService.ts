import axios from "axios";
import { OrdersHelper } from "../helpers/OrdersHelper";

interface IOrder {
  personName: string;
  organization: string;
  value: number;
}

interface IOrdersResponse {
  allSuccess: boolean;
  successes: number;
  errors: number;
  orders: Array<IOrder>;
  totalValue: number;
}

class OrdersService {
  private apiUrl: string;
  private apiToken: string;

  constructor() {
    this.apiUrl = process.env.BLING_API_URL;
    this.apiToken = `&apikey=${process.env.BLING_API_KEY}`;
  }

  async create(wonDeals: any) {
    const ordersHelper = new OrdersHelper();

    let requests = [];
    let orders = [];
    let totalValue = 0;

    wonDeals.map((deal: any) => {
      const xml = ordersHelper.getXml(deal);

      const urlRequest = encodeURI(
        `${this.apiUrl}/pedido/json/?xml=${xml}${this.apiToken}`
      );

      requests.push(axios.post(urlRequest));

      orders.push({
        personName: deal.person_id.name ? deal.person_id.name : "",
        organization: deal.org_id ? deal.org_id.name : "",
        value: deal.value,
      });
      totalValue += deal.value;
    });

    const responseOrders = await axios.all(requests);

    const responseOrder: IOrdersResponse = {
      allSuccess: true,
      successes: 0,
      errors: 0,
      orders,
      totalValue,
    };

    responseOrders.map((response) => {
      if (response.status == 201) {
        responseOrder.successes++;
      } else {
        responseOrder.allSuccess = false;
        responseOrder.errors++;
      }
    });

    return responseOrder;
  }

  async getAll() {
    const response = await axios.get(
      `${this.apiUrl}/pedidos/json/${this.apiToken}`
    );

    return response.data.retorno;
  }
}

export { OrdersService };
