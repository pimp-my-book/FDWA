import { hello, getAllItems } from "./query";
import { addMenuItem, placeOrder } from "./mutation";

export const resolvers = {
    Query: {
        hello: (args, context) => hello(args, context),
        getAllItems: (args, context) => getAllItems(args, context)
    },
    Mutation: {
        addMenuItem: ({input:args}, context) => addMenuItem({input:args}, context),
        placeOrder: ({input:args}, context) => placeOrder({input:args}, context)
    }
}
