import { gql } from "@apollo/client";

// GraphQL Query to fetch a room by it's ID
export const ROOMS_QUERY = gql`
  {
    roomById(id: 1) {
      room_id
      name
      tenant {
        tenant_id
        firstName
        lastName
      }
    }
  }
`;
