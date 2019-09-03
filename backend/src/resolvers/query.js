import * as dynamodbLib from "../../libs/dynamodb-lib";

export const hello = (args, context) => {
    return "First FDWA Query -_-"
}

export const getAllItems = async (args, context) => {
  const params = {
    TableName: process.env.FoodDeliveryTable,
  }
  try {
    const result = await dynamodbLib.call("scan", params);
    return result.Items
  }
  catch(e) {
    return e;
  }
}

export const customerOrderList = async (args, context) => {
  const params = {
    TableName: process.env.FoodDeliveryTable,
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "userId-b82cb180-c5b5-11e9-ab64-5f22eec26915"
    }
    };
  try {
    const result = await dynamodbLib.call("query", params);
    return result.Items
  }
  catch(e) {
    return e;
  }
}
