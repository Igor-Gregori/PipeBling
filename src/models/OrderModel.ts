import moment from "moment-timezone";
import mongoose from "mongoose";

const date = moment().tz(process.env.TZ).format().substr(0, 10);

const OrderSchema = new mongoose.Schema({
  orderDay: { type: String, default: date },
  totalValue: Number,
  orders: [
    {
      personName: String,
      organization: String,
      value: Number,
    },
  ],
});

const OrderModel = mongoose.model("Order", OrderSchema);

export { OrderModel };