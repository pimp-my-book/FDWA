/*

ADD YOUR MUTATION HERE:

export const addCars = async (args, context) => {


}


*/
import uuid from "uuid";

export const addMenuItem = async (args, context) => {
  ID: uuid.v1();
  name: args.name;
  price: args.price;
  vendor: args.vendor;
  size: args.size
}

export const placeOrder = async (args, context) => {
  ID: uuid.v1();
  total: args.total;
  items: args.items;
  deliveryMethod: args.deliveryMethod;
  deliveryCost: args.deliveryCost;
}
