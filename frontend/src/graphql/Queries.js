import gql from 'graphql-tag';

// GraphQL - Hello World Query
export const HELLO_WORLD = gql `
 query helloWorld {
   hello
 }`;

// GraphQL - getAllItems
export const GET_ALL_ITEMS = gql `
query GetAllItems{
  getAllItems{
    pk
    sk
    itemName
    price
    vendorName
    size
  }
}`;
