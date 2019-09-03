import gql from 'graphql-tag';

// GraphQL - Hello World Query
export const HELLO_WORLD = gql `
 query helloWorld {
   hello
 }`;

export const GET_ALL_ITEMS = gql `
query GET_ALL_ITEMS{
  getAllItems{
    pk
    sk
    itemName
    price
    vendorName
    size
  }
}`;

export const CUSTOMER_ORDER_LIST = gql `
query CUSTOMER_ORDER_LIST($pk: String!){
  customerOrderList(pk: $pk){
    pk
    sk
    itemName
    price
    vendorName
    size
  }
}
`;
