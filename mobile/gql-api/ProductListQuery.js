import { gql} from 'apollo-boost'


const PRODUCT_LIST_QUERY = gql`
query ProductListQuery {
    products {
      name,
      id,
      description,
      thumbnail,
      thumbnailCl,
      tags,
      image,
      brand {
        name,
        logo
      }
      brandName,
      priceLevel
      categories {
        name
      }
    }
  }
`;

export default PRODUCT_LIST_QUERY