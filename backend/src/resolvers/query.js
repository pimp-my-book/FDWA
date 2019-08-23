import * as dynamodbLib from "../../libs/dynamodb-lib";

export const hello = (args, context) => {
    return "First FDWA Query -_-"
}

export const getAllItems = async (args, context) => {
  const params ={
    TableName: process.env.FoodDeliveryTable,
    KeyConditionExpression: "itemName = :itemName",
    ExpressionAttributeValues: {
      ":itemName": args.itemName
    }
  }
  try {
    const result = await dynamodbLib.call("query", params);
    if (result.Item) {
      return result.Item;
    }
    else {
      return "No items found within table"
    }
  }
  catch (e) {
    console.log(e);
    return e;
  }
}
