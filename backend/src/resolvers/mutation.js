/*

ADD YOUR MUTATION HERE:

export const addCars = async (args, context) => {


}


*/
import uuid from "uuid";
import * as dynamodbLib from "../../libs/dynamodb-lib";

export const addMenuItem = async (args, context) => {
  const params = {
    TableName: process.env.FoodDeliveryTable,
    Item: {
      menuItemId: uuid.v1(),
      name: args.name,
      price: args.price,
      vendor: args.vendor,
      size: args.size,
    }
  }
  try {
    await dynamodbLib.call("put", params);
    return {
      menuItemId: params.Item.menuItemId,
      name: args.name,
      price: args.price,
      vendor: args.Item.vendor,
      size: args.Item.size,
    }
  }
  catch(e) {
    return e
  }
}
