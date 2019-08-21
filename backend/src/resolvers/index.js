import { hello } from "./query";
import { addMenuItem } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        addMenuItem: (root, args, context) => addMenuItem(args, context)
    }
}
