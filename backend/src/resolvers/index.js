import { hello } from "./query";
import { addMenuItem } from "./mutation";

export const resolvers = {
    Query: {
        hello: (args, context) => hello(args, context)
    },
    Mutation: {
        addMenuItem: (root, {input:args}, context) => addMenuItem({input:args}, context)
    }
}
