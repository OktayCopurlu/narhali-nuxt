import { gql } from "graphql-tag";

export const GET_ALL_CARPET = gql`
  query {
    haliCollection {
      items {
        baslik
        description
        sys {
          id
        }
        slug
        resimlerCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export const GET_ALL_IMAGES_ID = gql`
  query {
    assetCollection {
      items {
        sys {
          id
        }
      }
    }
  }
`;
export const GET_ALL_MAGAZA = gql`
  query {
    magazaCollection {
      items {
        baslik

        slug
        resimlerCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
