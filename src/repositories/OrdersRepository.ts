import { OrderModel } from "../models/OrderModel";

class OrderRepository{
    async saveTodayOrders(orderDay: any){
        const order = new OrderModel({
            totalValue: orderDay.totalValue,
            orders: orderDay.orders
        });
        
        const response = await order.save();
        
        return response;
    }
}

export { OrderRepository };