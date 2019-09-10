import gql from 'graphql-tag';

// GraphQL - placeOrder Mutation
export const Place_Order = gql `
    mutation PlaceOrder($itemName: String!, $price: String!, $vendorName: String!, $size: String!, $deliveryMethod: String!, $deliveryCost: String, $orderTotal: String!) {
        placeOrder(itemName : $itemName, price : $price, vendorName : $vendorName, size : $size, deliveryMethod : $deliveryMethod, deliveryCost : $deliveryCost, orderTotal : $orderTotal) {
            itemName
            price
            vendorName
            size
            deliveryMethod
            deliveryCost
            orderTotal
        }
    }
`;