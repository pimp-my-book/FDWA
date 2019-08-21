import { hello } from "./query";
import { addMenuItem } from "./mutation";

export const resolvers = {
    Query: {
        hello: (args, context) => hello(args, context)
    },
    Mutation: {
        addMenuItem: (args, context) => addMenuItem(args, context)
    }
}
