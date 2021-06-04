import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderDay: { type: Date, default: Date.now },
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
