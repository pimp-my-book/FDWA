const schema = `

"""
INPUT
"""
input UserItemInput {
  itemName: String!,
  price: Int!,
  vendorName: String!,
  size: String,
}

input PlaceOrderInput {
  itemName: String!,
  price: Int!,
  vendorName: String!,
  size: String!,
  deliveryMethod: String!,
  deliveryCost: Int,
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
Name of Menu Item [Required]
"""
itemName: String!

"""
Price of Menu Item [Required]
"""
price: String!

"""
Vendor name [Required]
"""
vendorName: String!

"""
Size of meal [S,M,L]
"""
size: String

"""
Delivery type to use [Required]
"""
deliveryMethod: String!

"""
Cost of order delivery
"""
deliveryCost: String

"""
Total price from order [Required]
"""
orderTotal: String!

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
addMenuItem(itemName: String!,
  price: Int!,
  vendorName: String!,
  size: String!,
  deliveryMethod: String!,
  deliveryCost: Int,
  orderTotal: Int!): MenuItem,
  
"""
Add user Order to Table
"""
placeOrder(
  itemName: String!,
  price: String!,
  vendorName: String!,
  size: String!,
  deliveryMethod: String!,
  deliveryCost: String,
  orderTotal: String!): Order

}

`

export {schema}
