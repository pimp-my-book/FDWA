const schema = `

"""
INPUT
"""
input UserItemInput {
  itemName: String!,
  price: Int!,
  vendorName: String!,
  size: String!,
}

"""
TYPE
"""

type MenuItem {
"""
Vendor Name [pk]
"""
pk: String!

"""
Menu Item ID [sk]
"""
sk: String!

"""
Name of Menu Item [Required]
"""
itemName: String!

"""
Price of Menu Item [Required]
"""
price: Int!

"""
Vendor name [Required]
"""
vendorName: String!

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
QUERY
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
MUTATION
"""

type Mutation {

addMenuItem(input: UserItemInput): MenuItem

placeOrder(
  total: Int!,
  items: [UserItemInput],
  DeliveryMethod: String!,
  DeliveryCost: Int
): Order

}

`

export {schema}
