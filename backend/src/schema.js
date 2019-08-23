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

input PlaceOrderInput {
  allOrderItems: [UserItemInput],
  deliveryMethod: String!,
  deliveryCost: String,
  orderTotal: Int!
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
User ID [pk]
"""
pk: String!

"""
Order ID [sk]
"""
sk: String!

"""
items pulled from predefined MenuItem
"""
allOrderItems: [MenuItem]

"""
Delivery type to use [Required]
"""
deliveryMethod: String!

"""
Cost of order delivery
"""
deliveryCost: Int

"""
Total price from order [Required]
"""
orderTotal: Int!

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
"""
Add Menu Item to Table
"""
addMenuItem(input: UserItemInput): MenuItem,
"""
Add user Order to Table
"""
placeOrder(input: PlaceOrderInput): Order

}

`

export {schema}
