const schema = `

"""
Defining Menu Item used for Order Creation
"""
type MenuItem {
"""
Menu Item ID [Required]
"""
ID: String!
"""
Name of Menu Item [Required]
"""
name: String!
"""
Price of Menu Item [Required]
"""
price: Int!
"""
Vendor name [Required]
"""
vendor: String!
"""
Size of meal [S,M,L]
"""
size: String
}

type Order {
"""
Order ID [Required]
"""
ID: String!
"""
Total price from items [Required]
"""
total: Int!
"""
items pulled from predefined MenuItem
"""
items: [MenuItem]
"""
Delivery type to use [Required]
"""
DeliveryMethod: String!
"""
Cost of order delivery
"""
DeliveryCost: Int
}

"""
READ
"""
type Query {
"""
Use predefined MenuItem to list all Menu Items
"""
getAllItems: [MenuItem],
"""
Hello World
"""
hello: String!
}

"""
WRITE
"""
type Mutation {
"""
Add name to menu item [Required]
"""
addMenuItem(name: String!,
"""
Add price to menu item [Required]
"""
price: Int!,
"""
Vendor name providing item [Required]
"""
vendor: String!,
"""
Size of meal [S,M,L]
"""
size: String): MenuItem

}

`

export {schema}
