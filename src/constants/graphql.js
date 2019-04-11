
import gql from 'graphql-tag'
export const ALL_PUBLIC_DIARIES_QUERY = gql`
query AllDiariesQuery{
    diaries(where: {isPublic : true }){id, country, begin, end}
    }`;

export const DIARY_DETAIL = gql`
    query diary($id: ID) {
      diary(where: {
        id: $id
      }) 
      {
        country
        description
        image {
          handle
        }
      }
    }`;

export const CREATE_DIARY = gql`
mutation CREATE_DIARY($title: String! $country: String! $from: DateTime! $to: DateTime! $description: String!){
  createDiary(
    data: {
      title: $title
      country: $country
      begin: $from
      end: $to
      description: $description
    }
  ) 
  {
    id  }
}`;

