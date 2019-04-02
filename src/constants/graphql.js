
import gql from 'graphql-tag'
export const ALL_DIARIES_QUERY = gql`query AllDiariesQuery{diaries{id, country, begin, end}}`;
