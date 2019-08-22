import uuid from "uuid";
import * as dynamodbLib from "../../libs/dynamodb-lib";

export const addMenuItem = async ({input:args}, context) => {
  const params = {
    TableName: process.env.FoodDeliveryTable,
    Item: {
      pk: "vendorId-${uuid.v1()}",
      sk: "menuItem-${uuid.v1()}",
      itemName: args.itemName,
      price: args.price,
      vendorName: args.vendorName,
      size: args.size,
    }
  }
  try {
    await dynamodbLib.call("put", params);
    return {
      pk: params.Item.pk,
      sk: params.Item.sk,
      itemName: args.itemName,
      price: args.price,
      vendorName: args.vendorName,
      size: args.size,
    }
  }
  catch(e) {
    console.log(e);
    return e
  }
}
