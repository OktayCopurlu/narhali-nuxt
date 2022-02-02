import { gql } from "graphql-tag";

export const GET_ALL_CARPETS = gql `
  query {
    halilarCollection {
      items {
        baslik
        aciklama
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;

export const GET_ALL_IMAGES_ID = gql `
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

export const GET_ALL_MAGAZALAR = gql `
  query {
    magazalarimizCollection {
      items {
        baslik
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
export const GET_ALL_PERDE = gql `
  query {
    perdelerCollection {
      items {
        baslik
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
export const GET_ALL_KAYMAZ_HALI = gql `
  query {
    kaymazHalilarCollection {
      items {
        baslik
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
export const GET_ALL_EV_DEKORASYON = gql `
  query {
    evDekorasyonCollection {
      items {
        baslik
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
export const GET_ALL_YATAK = gql `
  query {
    yataklarCollection {
      items {
        baslik
        slug
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
export const GET_HAKKIMIZDA = gql `
  query {
    hakkimizdaCollection {
      items {
        baslik
        slug
        aciklama {
          json
        }
        resimlerCollection {
          items {
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;