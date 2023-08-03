import { useQuery, gql } from "@apollo/client";
const GET_PERPAGE = gql`
  query GetAnimesPerPage($page: Int!) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
      }
      media {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;
export const useAnimes = (page: number) => {
  const { loading, error, data } = useQuery(GET_PERPAGE, { variables: { page } });
  return { loading, error, data };
};
