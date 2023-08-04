import { useQuery, gql } from "@apollo/client";
const GET_ANIME = gql`
  query GetAnimeDetail($id: Int!) {
    Media(id: $id) {
      id
      title {
        romaji
        native
        english
      }
      episodes
      duration
      description
      type
      format
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      coverImage {
        large
      }
      genres
      averageScore
      characters(page: 1, perPage: 5) {
        nodes {
          id
          name {
            full
            native
          }
          image {
            large
          }
        }
      }
    }
  }
`;
const useAnime = (id: number) => {
  const { loading, error, data } = useQuery(GET_ANIME, { variables: { id } });
  return { loading, error, data };
};
export default useAnime;
