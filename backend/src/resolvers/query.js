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
      ":pk": context.event.requestContext.authorizer.claims.sub
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
