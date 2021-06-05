import { OrderModel } from "../models/OrderModel";
import moment from "moment-timezone";

class OrderRepository {
  async getAll() {
    const results = await OrderModel.find();
    return results;
  }

  async getByDate(date: string) {
    const results = await OrderModel.find({
      orderDay: date,
    });
    return results;
  }

  async saveTodayOrders(orderDay: any) {
    const order = new OrderModel({
      totalValue: orderDay.totalValue,
      orders: orderDay.orders,
    });

    const result = await order.save();

    return result;
  }

  async todayOrdersExists() {
    const date = moment().tz(process.env.TZ).format().substr(0, 10);
    const result = await OrderModel.findOne({
      orderDay: date,
    });
    return result;
  }
}

export { OrderRepository };