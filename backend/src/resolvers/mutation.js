import uuid from "uuid";
import * as dynamodbLib from "../../libs/dynamodb-lib";

export const addMenuItem = async ({input:args}, context) => {
  const params = {
    TableName: process.env.FoodDeliveryTable,
    Item: {
      menuItemId: "menuItem-${uuid.v1()}",
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
      vendor: args.vendor,
      size: args.size,
    }
  }
  catch(e) {
    console.log(e);
    return e
  }
}
